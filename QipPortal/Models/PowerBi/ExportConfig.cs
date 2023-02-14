
using Microsoft.PowerBI.Api.Models;
using System;

namespace QipPortal.Models.PowerBi
{
    /// <summary>
    /// Configuration settings for exporting a Power BI report
    /// </summary>
    public class ExportConfig
    {
        public string PrintStrategyName { get; set; }

        public int ReportId { get; set; }

        public string ReportState { get; set; }

    }
}