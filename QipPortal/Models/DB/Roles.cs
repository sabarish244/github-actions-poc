using System;
using System.Collections.Generic;

namespace QipPortal.Models.DB
{
    public partial class Roles
    {
        public Roles()
        {
            Permissions = new HashSet<Permissions>();
        }

        public int RoleId { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Permissions> Permissions { get; set; }
    }
}
