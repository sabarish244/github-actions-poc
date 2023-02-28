using System;
using System.Collections.Generic;

namespace QipPortal.Models.DB
{
    public partial class UserProjects
    {
        public UserProjects()
        {
            Permissions = new HashSet<Permissions>();
        }

        public int UserProjectId { get; set; }
        public int UserId { get; set; }
        public int ProjectId { get; set; }

        public virtual Projects Project { get; set; }
        public virtual Users User { get; set; }
        public virtual ICollection<Permissions> Permissions { get; set; }
    }
}
