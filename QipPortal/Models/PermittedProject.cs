using System;

namespace QipPortal.Models
{
    public class PermittedProject
    {
        public int ProjectId { get; set; }
        public string ProjectName { get; set; }
        public string ProjectEmail { get; set; }
        public  bool IsMenu { get; set; }
        public string OrganisationName { get; set; }
        public string OrganisationProject
        { get
            {
                return string.Format(@"{0}: {1}", OrganisationName, ProjectName);
            }
        }
    }
}
