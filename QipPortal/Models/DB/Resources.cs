using System;
using System.Collections.Generic;

namespace QipPortal.Models.DB
{
    public partial class Resources
    {
        public Resources()
        {
            Permissions = new HashSet<Permissions>();
            Surveys = new HashSet<Surveys>();
            UserFavourites = new HashSet<UserFavourites>();
        }

        public int ResourceId { get; set; }
        public int ResourceTypeId { get; set; }

        public virtual ResourceTypes ResourceType { get; set; }
        public virtual PowerBiReports PowerBiReports { get; set; }
        public virtual ICollection<Permissions> Permissions { get; set; }
        public virtual ICollection<Surveys> Surveys { get; set; }
        public virtual ICollection<UserFavourites> UserFavourites { get; set; }
    }
}
