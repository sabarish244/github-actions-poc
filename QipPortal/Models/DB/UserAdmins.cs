using System;
using System.Collections.Generic;

namespace QipPortal.Models.DB
{
    public partial class UserAdmins
    {
        public int UserId { get; set; }
        public string WindowsLogin { get; set; }

        public virtual Users User { get; set; }
    }
}
