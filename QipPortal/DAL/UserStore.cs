//--------------------------------------------------------------------------------------------------
//   Task-Id        Description                                     Modified by        Modified date
//   10099          X-Platform code refactoring and stabilizing     Boshiruddin        08/03/2021
//       This file is copyright Expleo 2021.
//--------------------------------------------------------------------------------------------------
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.Extensions.Internal;
using Microsoft.Extensions.Options;
using QipPortal.Models;
using QipPortal.Models.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace QipPortal.DAL
{
    public class UserStore : IUserStore<Users>, IUserPasswordStore<Users>, IUserLockoutStore<Users>
    {
        private readonly AuthGatewayDevContext db;
        

        public UserStore(AuthGatewayDevContext db)
        {
            this.db = db;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                db?.Dispose();
            }
        }

        #region IUserStore

        public Task<string> GetUserIdAsync(Users user, CancellationToken cancellationToken)
        {
            
            return Task.FromResult(user.UserId.ToString());
        }

        public Task<string> GetUserNameAsync(Users user, CancellationToken cancellationToken)
        {
            return Task.FromResult(user.UserName);
        }

        public Task SetUserNameAsync(Users user, string userName, CancellationToken cancellationToken)
        {
            throw new NotImplementedException(nameof(SetUserNameAsync));
        }

        public Task<string> GetNormalizedUserNameAsync(Users user, CancellationToken cancellationToken)
        {
            return Task.FromResult(user.NormalizedUserName);
        }

        public Task SetNormalizedUserNameAsync(Users user, string normalizedName, CancellationToken cancellationToken)
        {
            return Task.FromResult((object)null);
        }


        #region Database CRUD Methods
        public async Task<IdentityResult> CreateAsync(Users user, CancellationToken cancellationToken)
        {
            db.Add(user);

            await db.SaveChangesAsync(cancellationToken);

            return await Task.FromResult(IdentityResult.Success);
        }

        public async Task<IdentityResult> UpdateAsync(Users user, CancellationToken cancellationToken)
        {
            db.Update(user);

            await db.SaveChangesAsync(cancellationToken);

            return await Task.FromResult(IdentityResult.Success);
        }
    

        public async Task<IdentityResult> DeleteAsync(Users user, CancellationToken cancellationToken)
        {
            db.Remove(user);

            int i = await db.SaveChangesAsync(cancellationToken);

            return await Task.FromResult(i == 1 ? IdentityResult.Success : IdentityResult.Failed());
        }

        #endregion

        public async Task<Users> FindByIdAsync(string userId, CancellationToken cancellationToken)
        {
            if (int.TryParse(userId, out int id))
            {
                return await db.Users.FindAsync(id);
            }
            else
            {
                return await Task.FromResult((Users)null);
            }
        }

        public async Task<Users> FindByNameAsync(string normalizedUserName, CancellationToken cancellationToken)
        {
            return await db.Users
                           .AsAsyncEnumerable()
                           .SingleOrDefault(p => p.UserName.Equals(normalizedUserName, StringComparison.OrdinalIgnoreCase), cancellationToken);
        }
        #endregion

        #region IUserPasswordStore

        public Task SetPasswordHashAsync(Users user, string passwordHash, CancellationToken cancellationToken)
        {
            user.PasswordHash = passwordHash;

            return Task.FromResult((object)null);
        }

        public Task<string> GetPasswordHashAsync(Users user, CancellationToken cancellationToken)
        {
            return Task.FromResult(user.PasswordHash);
        }

        public Task<bool> HasPasswordAsync(Users user, CancellationToken cancellationToken)
        {
            return Task.FromResult(!string.IsNullOrWhiteSpace(user.PasswordHash));
        }
        #endregion

        #region IUserLockoutStore

        public Task<DateTimeOffset?> GetLockoutEndDateAsync(Users user, CancellationToken cancellationToken)
        {
            //var lol = UserManager<Users>.Options.Lockout.DefaultLockoutTimeSpan;
            //DateTimeOffset? lockOutDate = user.LockoutEnd ?? new DateTimeOffset();

            //DateTimeOffset? lockOutDate = user.LockoutEnd.HasValue ? user.LockoutEnd.Value : new DateTimeOffset(DateTime.UtcNow.AddMinutes(15));
            //return Task.FromResult(lockOutDate);

            return Task.FromResult(user.LockoutEnd);
        }

        public Task SetLockoutEndDateAsync(Users user, DateTimeOffset? lockoutEnd, CancellationToken cancellationToken)
        {           
            if (user == null)
            {
                throw new ArgumentException("Cannot get LockoutEnabled. User is null.");
            }

            user.LockoutEnd = lockoutEnd;

            return Task.FromResult(0);
        }

        public Task<int> IncrementAccessFailedCountAsync(Users user, CancellationToken cancellationToken)
        {
            if (user == null)
            {
                throw new ArgumentException("Cannot get LockoutEnabled. User is null.");
            }

            user.AccessFailedCount++;

            return Task.FromResult(user.AccessFailedCount);
        }

        public Task ResetAccessFailedCountAsync(Users user, CancellationToken cancellationToken)
        {
            if (user == null)
            {
                throw new ArgumentException("Cannot get LockoutEnabled. User is null.");
            }

            user.AccessFailedCount = 0;

            return Task.FromResult(0);
        }

        public Task<int> GetAccessFailedCountAsync(Users user, CancellationToken cancellationToken)
        {
            if (user == null)
            {
                throw new ArgumentException("Cannot get AccessFailedCount. User is null.");
            }
            return Task.FromResult(user.AccessFailedCount);
        }

        public Task<bool> GetLockoutEnabledAsync(Users user, CancellationToken cancellationToken)
        {
            if (user == null)
            {
                throw new ArgumentException("Cannot get LockoutEnabled. User is null.");
            }

            return Task.FromResult(user.LockoutEnabled);
        }

        public Task SetLockoutEnabledAsync(Users user, bool enabled, CancellationToken cancellationToken)
        {
            if (user == null)
            {
                throw new ArgumentException("Cannot set LockoutEnabled. User is null.");
            }

            user.LockoutEnabled = enabled;

            return Task.FromResult(0);
        }

 
 

        #endregion
    }

    public class UsersListStore
    {
        private readonly AuthGatewayDevContext db;
        private readonly IOptions<ConfigSettings> config;

        public UsersListStore(AuthGatewayDevContext db, IOptions<ConfigSettings> config)
        {
            this.db = db;
            this.config = config;
        }

        /// <summary>
        /// Returns list of Users
        /// </summary>
        /// <returns>list of Users</returns>

        public virtual List<PermittedUsers> GetUsers()
        {

            IEnumerable<PermittedUsers> Users =
               (from p in db.Users
                select new PermittedUsers
                {
                    UserId = p.UserId,
                    Email = p.Email,
                    FullName = p.FullName,
                    UserPrincipalName = p.UserPrincipalName
                }
                );

            return Users.ToList();
        }

        /// <summary>
        /// This method returns list of users based on project
        /// </summary>
        /// <param name="projectId "></param>
        /// <returns>list of users</returns>
        public virtual List<PermittedUsers> GetUsersAssignedToProject(int projectId)
        {

            IEnumerable<PermittedUsers> Users =
               (from p in db.Projects
                join up in db.UserProjects
                on p.ProjectId equals up.ProjectId
                join u in db.Users
                on up.UserId equals u.UserId
                where p.ProjectId == projectId
                select new PermittedUsers
                {
                    UserId = u.UserId,
                    FullName = u.FullName,
                    AssignedProject = p.Name
                }
                );

            return Users.ToList();
        }
    }
}