using System;
using System.Collections.Generic;

namespace QipPortal.Models.DB
{
    public partial class PowerBiReports
    {
        public int ResourceId { get; set; }
        public Guid ReportId { get; set; }
        public int ReportTypeId { get; set; }
        public Guid TenancyId { get; set; }
        public Guid GroupId { get; set; }
        public string Name { get; set; }
        public bool RequireRls { get; set; }

        public virtual PowerBiReportType ReportType { get; set; }
        public virtual Resources Resource { get; set; }
    }
}
