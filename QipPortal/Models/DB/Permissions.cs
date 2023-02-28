using System;
using System.Collections.Generic;

namespace QipPortal.Models.DB
{
    public partial class Permissions
    {
        public int PermissionId { get; set; }
        public int ResourceId { get; set; }
        public int RoleId { get; set; }
        public int UserProjectId { get; set; }

        public virtual Resources Resource { get; set; }
        public virtual Roles Role { get; set; }
        public virtual UserProjects UserProject { get; set; }
    }
}
