using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QipPortal.Models
{
    public class PermittedUsers
    {
        public int UserId { get; set; }
        public string Email { get; set; }
        public string FullName { get; set; }
        public string UserPrincipalName { get; set; }
        public string AssignedProject { get; set; }
    }

    /// <summary>
    /// Collection of UserId Item
    /// </summary>
    public class SSOUserList
    {
        public SSOUser UserId { get; set; }
    }
}
