using System;
using System.Collections.Generic;

namespace QipPortal.Models.DB
{
    public partial class Organisations
    {
        public Organisations()
        {
            Projects = new HashSet<Projects>();
        }

        public int OrganisationId { get; set; }
        public int OrganisationVerticalId { get; set; }
        public string Name { get; set; }

        public virtual OrganisationVerticals OrganisationVertical { get; set; }
        public virtual ICollection<Projects> Projects { get; set; }
    }
}
