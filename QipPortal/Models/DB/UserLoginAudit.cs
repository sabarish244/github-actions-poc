using System;
using System.Collections.Generic;

namespace QipPortal.Models.DB
{
    public partial class UserLoginAudit
    {
        public int UserLoginAuditId { get; set; }
        public int UserId { get; set; }

        public virtual Users User { get; set; }
    }
}
