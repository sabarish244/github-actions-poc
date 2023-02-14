using Microsoft.PowerBI.Api;
using Microsoft.PowerBI.Api.Models;
using Microsoft.Rest;
using QipPortal.Models.PowerBi;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace QipPortal.Services
{
    /// <summary>
    /// This class provides operations to manipulate Power Bi including printing reports.
    /// </summary>
    public class PowerBIReport
    {
        /* ************************************************************** */
        #region Nested Classes

        /* ************************************************************** */
        #region ExportData Class

        /// <summary>
        /// This class is sent back to the client as JSON and provides information
        /// about the status of a print operation. It must be public and serializable.
        /// </summary>
        [Serializable]
        public class ExportData
        {
            /* ************************************************************** */
            #region Class Member Definition

            /* ************************************************************** */
            #region Properties

            /// <summary>
            /// Filled in if any error occurs.
            /// </summary>
            public string ErrorMessage { get; set; }

            /// <summary>
            /// The unique Id of each print operation.
            /// </summary>
            public string ExportId { get; set; }

            /// <summary>
            /// Completion of the print operation.
            /// </summary>
            public int PercentComplete { get; set; }

            #endregion

            #endregion

            /* ************************************************************** */
            #region Construction and Finalization

            /// <summary>
            /// Default constructor is required for serialization.
            /// </summary>
            public ExportData()
            {
            }

            /// <summary>
            /// Utility constructor.
            /// </summary>
            /// <param name="exportId">
            /// The unique Id of each print operation.
            /// </param>
            public ExportData(string exportId)
            {
                this.ExportId = exportId;
            }

            #endregion
        }

        #endregion

        #endregion

        /* ************************************************************** */
        #region Operations

        /// <summary>
        /// Download the report when the progress reaches 100%.
        /// </summary>
        /// <param name="exportId">
        /// Id of the print operation.
        /// </param>
        /// <param name="reportData">
        /// Infomration about the report.
        /// </param>
        /// <param name="reportName">
        /// The report name is returned from PowerBI in the ExportStatus.
        /// </param>
        /// <param name="stream">
        /// To return the report in a stream.
        /// </param>
        /// <returns>
        /// Will contain the progress or any error messages.
        /// </returns>
        internal static ExportData DownloadPrintedReport(string exportId, ReportData reportData, out string reportName, out Stream stream)
        {
            // Returns
            ExportData ret          = null;
            string outputReportName = null;
            Stream outputStream     = null;

            // Make the connection to Power BI
            Guid reportId = Guid.Parse(reportData.ReportId);
            Guid groupId = Guid.Parse(reportData.GroupId);
            PowerBIClient client = GetPowerBiClient(reportData, ref ret);
            if (client != null)
            {
                using (client)
                {
                    // Get the current status from power BI
                    Task<HttpOperationResponse<Export>> httpMessage = client.Reports.GetExportToFileStatusInGroupWithHttpMessagesAsync(groupId, reportId, exportId);
                    httpMessage.Wait();

                    // Verify that the file was actually exported
                    Export exportStatus = httpMessage.Result.Body;
                    if (exportStatus.Status == ExportState.Succeeded)
                    {
                        // Request the file and wait until the operation completes
                        Task<Stream> fileStream = client.Reports.GetFileOfExportToFileAsync(groupId, reportId, exportId);
                        fileStream.Wait();

                        // Extract the data stream and the report name
                        outputStream        = fileStream.Result;
                        outputReportName    = exportStatus.ReportName;
                    }

                    else
                    {
                        ret.ErrorMessage = string.Format("Error {0} was returned", exportStatus.Status);
                    }
                }
            }

            reportName = outputReportName;
            stream = outputStream;
            return ret;
        }

        /// <summary>
        /// Obtain the list of identies required to print out the report.
        /// </summary>
        /// <param name="client">
        /// The PowerBI client object.
        /// </param>
        /// <param name="datasetId">
        /// The data set associated with the PowerBI report.
        /// </param>
        /// <param name="reportId">
        /// Guid Id of the report.
        /// </param>
        /// <param name="groupId">
        /// Guid Id of the report group.
        /// </param>
        /// <param name="reportData">
        /// Details of the report to print.
        /// </param>
        /// <returns>
        /// The set of identities are needed to make the export request.
        /// </returns>
        private static async Task<List<EffectiveIdentity>> GetEffectiveIdentities(PowerBIClient client, string datasetId, Guid groupId, ReportData reportData)
        {
            // Returns
            List<EffectiveIdentity> ret = null;

            // Determine if an identity is required
            var datasets = await client.Datasets.GetDatasetInGroupAsync(groupId, datasetId);
            bool? isEffectiveIdentityRequired = datasets.IsEffectiveIdentityRequired;
            if (isEffectiveIdentityRequired.HasValue && isEffectiveIdentityRequired.Value)
            {
                ret = new List<EffectiveIdentity>();
                if (!string.IsNullOrEmpty(reportData.RlsUsername))
                {
                    var rls = new EffectiveIdentity(reportData.RlsUsername, new List<string> { datasetId });
                    if (!string.IsNullOrWhiteSpace(reportData.RlsRoles))
                    {
                        var rolesList = new List<string>();
                        rolesList.AddRange(reportData.RlsRoles.Split(','));
                        rls.Roles = rolesList;
                    }
                    ret.Add(rls);
                }
            }

            return ret;
        }

        /// <summary>
        /// Obtain a client object to send requests to PowerBI.
        /// </summary>
        /// <param name="reportData">
        /// Details of the report that will be exported.
        /// </param>
        /// <param name="exportData">
        /// To return error messages.
        /// </param>
        /// <returns>
        /// The client object or null if it couldn't be obtained.
        /// </returns>
        private static PowerBIClient GetPowerBiClient(ReportData reportData, ref ExportData exportData)
        {
            // Returns
            PowerBIClient ret = null;

            // Authenticate access to the report
            Task<OAuthResult> authenticationResult = Authenticate.AuthenticateAsync(reportData);

            // Wait for the object to return
            Task.WaitAll(authenticationResult);

            // Only proceeed if authenticated
            if (authenticationResult != null)
            {
                // Create the client object
                var tokenCredentials = new TokenCredentials(authenticationResult.Result.AccessToken, "Bearer");
                ret = new PowerBIClient(new Uri(reportData.ApiUrl), tokenCredentials);
            }

            else
            {
                exportData.ErrorMessage = "Unable to authenticate user credentials";
            }

            return ret;
        }

        /// <summary>
        /// Send the export request to the PowerBI API to do the export.
        /// </summary>
        /// <param name="client">
        /// The PowerBI client object.
        /// </param>
        /// <param name="reportId">
        /// Guid Id of the report.
        /// </param>
        /// <param name="groupId">
        /// Guid Id of the report group.
        /// </param>
        /// <param name="format">
        /// The format of the report to print.
        /// </param>
        /// <param name="reportData">
        /// Details of the report to print.
        /// </param>
        /// <param name="exportData">
        /// Returns the export Id or any error message.
        /// </param>
        private static void PostExportRequest(PowerBIClient client, Guid reportId, Guid groupId, FileFormat format, ReportData reportData, string state, ref ExportData exportData)
        {
            // Get the list of available reports
            Task<Reports> reports = client.Reports.GetReportsInGroupAsync(groupId);
            reports.Wait();

            // Get the individual report
            Report report = report = reports.Result.Value.FirstOrDefault(r => r.Id == reportId);

            // Get the identify if one is required, this will return null if one isn't needed
            Task<List<EffectiveIdentity>> effectiveIdentities = GetEffectiveIdentities(client, report.DatasetId, groupId, reportData);
            effectiveIdentities.Wait();

            // Format an export request
            var powerBIReportExportConfiguration = new PowerBIReportExportConfiguration
            {
                DefaultBookmark = new PageBookmark
                {
                    State = state,
                },
                Identities = effectiveIdentities?.Result?.Count == 0 ? null : effectiveIdentities.Result,
                Settings = new ExportReportSettings
                {
                    Locale = "en-us",
                },
            };
            var exportRequest = new ExportReportRequest
            {
                Format = format,
                PowerBIReportConfiguration = powerBIReportExportConfiguration,
            };

            // Start the export
            Task<Export> export = null;
            try
            {
                export = client.Reports.ExportToFileInGroupAsync(groupId, reportId, exportRequest);
                export.Wait();

                // Extract the export Id
                exportData.ExportId = export.Result.Id;
            }

            // We can handle HTTP operation exceptions
            catch (Exception except)
            {
                if(except.InnerException is HttpOperationException)
                {
                    exportData.ErrorMessage = except.InnerException.Message;
                }

                else
                {
                    throw except;
                }
            }            
        }

        /// <summary>
        /// Start the server side print operation.
        /// </summary>
        /// <param name="reportData">
        /// Details of the report to be printed.
        /// </param>
        /// <param name="fileFormat">
        /// The file format to print it in.
        /// </param>
        /// <returns>
        /// Contains the export Id and any error message.
        /// </returns>
        internal static ExportData StartPrint(ReportData reportData, FileFormat fileFormat, string state)
        {
            // Returns
            ExportData ret = new ExportData();

            // Make the connection to Power BI
            Guid reportId = Guid.Parse(reportData.ReportId);
            Guid groupId = Guid.Parse(reportData.GroupId);
            PowerBIClient client = GetPowerBiClient(reportData, ref ret);
            if(client != null)
            {
                using (client)
                {
                    // Start the export which returns the export Id
                    try
                    {
                        PostExportRequest(client, reportId, groupId, fileFormat, reportData, state, ref ret);
                    }

                    catch (HttpOperationException exc)
                    {
                        ret.ErrorMessage = string.Format("Status: {0} ({1})\r\nResponse: {2}\r\nRequestId: {3}", exc.Response.StatusCode, (int)exc.Response.StatusCode, exc.Response.Content, exc.Response.Headers["RequestId"].FirstOrDefault());
                    }
                }
            }

            return ret;
        }
                
        /// <summary>
        /// Query PowerBI to get the progress of the print operation.
        /// </summary>
        /// <param name="exportId">
        /// Id of the print operation.
        /// </param>
        /// <param name="reportData">
        /// Infomration about the report.
        /// </param>
        /// <returns>
        /// Will contain the progress or any error messages.
        /// </returns>
        internal static ExportData GetPrintProgress(string exportId, ReportData reportData)
        {
            // Returns
            ExportData ret = new ExportData(exportId);

            // Make the connection to Power BI
            Guid reportId = Guid.Parse(reportData.ReportId);
            Guid groupId = Guid.Parse(reportData.GroupId);
            PowerBIClient client = GetPowerBiClient(reportData, ref ret);
            if(client != null)
            {
                using(client)
                {
                    // Get the current status from power BI
                    Task<HttpOperationResponse<Export>> httpMessage = client.Reports.GetExportToFileStatusInGroupWithHttpMessagesAsync(groupId, reportId, exportId);
                    httpMessage.Wait();

                    // Extract the data from the message body
                    Export exportStatus = httpMessage.Result.Body;
                    if (exportStatus.PercentComplete.HasValue)
                    {
                        int percentage = exportStatus.PercentComplete ?? 0;
                        // Change the percentage if the status is not Succeeded
                        if (percentage == 100 && exportStatus.Status != ExportState.Succeeded)
                            percentage = 99;

                        ret.PercentComplete = percentage;
                    }

                    else
                    {
                        ret.ErrorMessage = "Percentage not available";
                    }
                }                
            }

            return ret;
        }

        #endregion
    }
}
