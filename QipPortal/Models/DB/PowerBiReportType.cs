using System;
using System.Collections.Generic;

namespace QipPortal.Models.DB
{
    public partial class PowerBiReportType
    {
        public PowerBiReportType()
        {
            PowerBiReports = new HashSet<PowerBiReports>();
        }

        public int ReportTypeId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string FontAwesomeIcon { get; set; }
        public string Url { get; set; }

        public virtual ICollection<PowerBiReports> PowerBiReports { get; set; }
    }
}
