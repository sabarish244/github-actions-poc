using Microsoft.PowerBI.Api;
using Microsoft.PowerBI.Api.Models;
using Microsoft.Rest;
using QipPortal.Models.PowerBi;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace QipPortal.Services
{
    /// <summary>
    /// Apply configuration to return Power BI report from workspace
    /// </summary>
    public class EmbedReport
    {
        private readonly ReportData reportData;

        /// <summary>
        /// Constructor to inject data
        /// </summary>
        /// <param name="reportData">Report Data</param>
        public EmbedReport(ReportData reportData)
        {
            this.reportData = reportData;
        }

        /// <summary>
        /// Return the configuration for embedding
        /// </summary>
        /// <returns>EmbedConfig</returns>
        public async Task<EmbedConfig> GetEmbedConfig()
        {
            if (reportData == null) return null;

            var result = new EmbedConfig();
            try
            {
                result = new EmbedConfig { Username = string.Empty, Roles = string.Empty };


                var authenticationResult = await Authenticate.AuthenticateAsync(reportData);

                if (authenticationResult == null)
                {
                    result.ErrorMessage = "Authentication Failed.";
                    return result;
                }

                var tokenCredentials = new TokenCredentials(authenticationResult.AccessToken, "Bearer");

                // Create a Power BI Client object. It will be used to call Power BI APIs.
                using (var client = new PowerBIClient(new Uri(reportData.ApiUrl), tokenCredentials))
                {
                    // Get a list of reports.
                    Guid groupId = Guid.Parse(reportData.GroupId);
                    var reports = await client.Reports.GetReportsInGroupAsync(groupId);

                    Report report;
                    if (string.IsNullOrEmpty(reportData.ReportId))
                    {
                        // Get the first report in the group.
                        report = null;
                    }
                    else
                    {
                        Guid reportId = Guid.Parse(reportData.ReportId);
                        report = reports.Value.FirstOrDefault(r => r.Id == reportId);
                    }

                    if (report == null)
                    {
                        result.ErrorMessage = "Group has no reports.";
                        return result;
                    }

                    var datasets = await client.Datasets.GetDatasetInGroupAsync(groupId, report.DatasetId);
                    result.IsEffectiveIdentityRequired = datasets.IsEffectiveIdentityRequired;
                    result.IsEffectiveIdentityRolesRequired = datasets.IsEffectiveIdentityRolesRequired;
                    GenerateTokenRequest generateTokenRequestParameters;
                    // This is how you create embed token with effective identities
                    if (!string.IsNullOrEmpty(reportData.RlsUsername))
                    {
                        var rls = new EffectiveIdentity(reportData.RlsUsername, new List<string> { report.DatasetId });
                        if (!string.IsNullOrWhiteSpace(reportData.RlsRoles))
                        {
                            var rolesList = new List<string>();
                            rolesList.AddRange(reportData.RlsRoles.Split(','));
                            rls.Roles = rolesList;
                        }
                        // Generate Embed Token with effective identities.
                        generateTokenRequestParameters = new GenerateTokenRequest(accessLevel: "view", identities: new List<EffectiveIdentity> { rls });
                    }
                    else
                    {
                        // Generate Embed Token for reports without effective identities.
                        generateTokenRequestParameters = new GenerateTokenRequest(accessLevel: "view");
                    }

                    var tokenResponse = await client.Reports.GenerateTokenInGroupWithHttpMessagesAsync(groupId, report.Id, generateTokenRequestParameters);

                    if (tokenResponse == null)
                    {
                        result.ErrorMessage = "Failed to generate embed token.";
                        return result;
                    }

                    // Generate Embed Configuration.
                    result.EmbedToken = tokenResponse.Body;
                    result.EmbedUrl = report.EmbedUrl;
                    result.Id = report.Id.ToString();

                    return result;
                }
            }
            catch (HttpOperationException exc)
            {
                result.ErrorMessage = string.Format("Status: {0} ({1})\r\nResponse: {2}\r\nRequestId: {3}", exc.Response.StatusCode, (int)exc.Response.StatusCode, exc.Response.Content, exc.Response.Headers["RequestId"].FirstOrDefault());
            }
            catch (Exception exc)
            {
                result.ErrorMessage = exc.ToString();
            }

            return result;
        }
    }
}
