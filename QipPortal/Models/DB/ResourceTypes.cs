using System;
using System.Collections.Generic;

namespace QipPortal.Models.DB
{
    public partial class ResourceTypes
    {
        public ResourceTypes()
        {
            Resources = new HashSet<Resources>();
        }

        public int ResourceTypeId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public virtual ICollection<Resources> Resources { get; set; }
    }
}
