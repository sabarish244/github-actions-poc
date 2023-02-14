/* ************************************************************** */
/* Copyright (c) Expleo 2020.
/* ************************************************************** */
using Microsoft.AspNetCore.Mvc;
using Microsoft.PowerBI.Api.Models;
using QipPortal.Models.PowerBi;
using System.Collections.Generic;
using System.IO;

namespace QipPortal.Services
{
    /// <summary>
    /// This class represents a strategy to print out the current dashboard.
    /// Concrete implementations will be provided for a number of different formats.
    /// </summary>
    public class PrintStrategy
    {
        /* ************************************************************** */
        #region Class Member Definition

        /* ************************************************************** */
        #region Properties

        /// <summary>
        /// This dictionary contains all the available print strategies.
        /// </summary>       
        internal static IDictionary<string, PrintStrategy> AvailableStrategies;

        /// <summary>
        /// The format that the print is done in.
        /// </summary>
        internal FileFormat PrintFormat { get; private set; }

        /// <summary>
        /// The name of the strategy to be displayed on the screen.
        /// </summary>
        internal string Name { get; private set; }

        /// <summary>
        /// The report state to use for exporting.
        /// </summary>
        internal string State { get; private set; }

        #endregion

        #endregion

        /* ************************************************************** */
        #region Construction and Finalization

        /// <summary>
        /// Static constructor initalises the set of available print strategies.
        /// </summary>
        static PrintStrategy()
        {
            // Instantiate all the strategies
            AvailableStrategies = new Dictionary<string, PrintStrategy>();

            // Create PDF and PPT strategies only
            PrintStrategy pdfStrategy = new PrintStrategy(StringTable.PDFStrategyName, FileFormat.PDF);
            AvailableStrategies.Add(pdfStrategy.Name, pdfStrategy);
            PrintStrategy pptStrategy = new PrintStrategy(StringTable.PowerPointStrategyName, FileFormat.PPTX);
            AvailableStrategies.Add(pptStrategy.Name, pptStrategy);
        }

        /// <summary>
        /// Setup the strategy object.
        /// </summary>
        /// <param name="name">
        /// The name of the strategy to be displayed on the screen.
        /// </param>
        /// <param name="printFormat">
        /// The format that the print is done in.
        /// </param>
        private PrintStrategy(string name, FileFormat printFormat)
        {
            this.Name           = name;
            this.PrintFormat    = printFormat;
        }

        #endregion

        /* ************************************************************** */
        #region Operations

        /// <summary>
        /// Downloads the actual print file when the export has finished.
        /// </summary>
        /// <param name="exportId">
        /// The Id of the export returned by the StartExport function.
        /// </param>
        /// <param name="reportData">
        /// Representing the actual report.
        /// </param>
        /// <param name="reportId">
        /// Id of the report to print.
        /// </param>
        /// <returns>
        /// Json containing the current progress.
        /// </returns>
        public FileResult DownloadPrintedReport(string exportId, ReportData reportData, int reportId)
        {
            // Returns
            FileContentResult ret = null;

            // Get the exported file
            Stream fileStream = null;
            string reportName = null;
            PowerBIReport.ExportData data = PowerBIReport.DownloadPrintedReport(exportId, reportData, out reportName, out fileStream);

            // If the stream if valid then copy the results into a memory stream to extract the bytes
            using (MemoryStream ms = new MemoryStream())
            {
                fileStream.CopyTo(ms);

                // Create the return object
                ret = new FileContentResult(ms.ToArray(), "application/octetstream");

                // Set the file name using the correct extensions
                ret.FileDownloadName = string.Format("{0}.{1}", reportName, this.PrintFormat);
            }

            return ret;
        }

        /// <summary>
        /// Print and download the file, (this will typically be done by PowerBI).
        /// </summary>
        /// <param name="reportData">
        /// The report to print.
        /// </param>
        internal virtual PowerBIReport.ExportData StartPrint(ReportData reportData, string state)
        {
            // Start the export
            return PowerBIReport.StartPrint(reportData, this.PrintFormat, state);
        }

        #endregion
    }
}
