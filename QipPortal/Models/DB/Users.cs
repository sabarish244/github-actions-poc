using System;
using System.Collections.Generic;

namespace QipPortal.Models.DB
{
    public partial class Users
    {
        public Users()
        {
            UserLoginAudit = new HashSet<UserLoginAudit>();
            UserProjects = new HashSet<UserProjects>();
            ComplianceLogs = new HashSet<ComplianceLog>();
            UserFavourites = new HashSet<UserFavourites>();
        }

        public int UserId { get; set; }
        public int UserTypeId { get; set; }
        public int AccessFailedCount { get; set; }
        public string ConcurrencyStamp { get; set; }
        public string Email { get; set; }
        public bool EmailConfirmed { get; set; }
        public bool LockoutEnabled { get; set; }
        public DateTimeOffset? LockoutEnd { get; set; }
        public string NormalizedEmail { get; set; }
        public string NormalizedUserName { get; set; }
        public string PasswordHash { get; set; }
        public string PhoneNumber { get; set; }
        public bool PhoneNumberConfirmed { get; set; }
        public string SecurityStamp { get; set; }
        public bool TwoFactorEnabled { get; set; }
        public string UserName { get; set; }
        public string FullName { get; set; }
        public string UserPrincipalName { get; set; }

        public virtual UserTypes UserType { get; set; }
        public virtual UserAdmins UserAdmins { get; set; }
        public virtual ICollection<UserLoginAudit> UserLoginAudit { get; set; }
        public virtual ICollection<UserProjects> UserProjects { get; set; }
        public virtual ICollection<ComplianceLog> ComplianceLogs { get; set; }
        public virtual ICollection<UserFavourites> UserFavourites { get; set; }
    }
}
