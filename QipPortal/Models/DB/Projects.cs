using System;
using System.Collections.Generic;

namespace QipPortal.Models.DB
{
    public partial class Projects
    {
        public Projects()
        {
            UserProjects = new HashSet<UserProjects>();
            ComplianceLogs = new HashSet<ComplianceLog>();
        }

        public int ProjectId { get; set; }
        public string Name { get; set; }
        public int OrganisationId { get; set; }
        public string ChangePointId { get; set; }
        public bool IsMenuItem { get; set; }
        public string ProjectManagerEmail { get; set; }

        public virtual Organisations Organisation { get; set; }
        public virtual ICollection<UserProjects> UserProjects { get; set; }

        public virtual ICollection<ComplianceLog> ComplianceLogs { get; set; }

    }
}
