using System;
using System.Collections.Generic;

namespace QipPortal.Models.DB
{
    public partial class OrganisationVerticals
    {
        public OrganisationVerticals()
        {
            Organisations = new HashSet<Organisations>();
        }

        public int OrganisationVerticalId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public virtual ICollection<Organisations> Organisations { get; set; }
    }
}
