using Microsoft.AspNetCore.Identity;
using QipPortal.Models.DB;
using System.Threading;
using System.Threading.Tasks;

namespace QipPortal.DAL
{
    public class RoleStore : IRoleStore<Roles>
    {
        public void Dispose()
        {
        }

        public Task<IdentityResult> CreateAsync(Roles role, CancellationToken cancellationToken)
        {
            throw new System.NotImplementedException();
        }

        public Task<IdentityResult> UpdateAsync(Roles role, CancellationToken cancellationToken)
        {
            throw new System.NotImplementedException();
        }

        public Task<IdentityResult> DeleteAsync(Roles role, CancellationToken cancellationToken)
        {
            throw new System.NotImplementedException();
        }

        public Task<string> GetRoleIdAsync(Roles role, CancellationToken cancellationToken)
        {
            throw new System.NotImplementedException();
        }

        public Task<string> GetRoleNameAsync(Roles role, CancellationToken cancellationToken)
        {
            throw new System.NotImplementedException();
        }

        public Task SetRoleNameAsync(Roles role, string roleName, CancellationToken cancellationToken)
        {
            throw new System.NotImplementedException();
        }

        public Task<string> GetNormalizedRoleNameAsync(Roles role, CancellationToken cancellationToken)
        {
            throw new System.NotImplementedException();
        }

        public Task SetNormalizedRoleNameAsync(Roles role, string normalizedName, CancellationToken cancellationToken)
        {
            throw new System.NotImplementedException();
        }

        public Task<Roles> FindByIdAsync(string roleId, CancellationToken cancellationToken)
        {
            throw new System.NotImplementedException();
        }

        public Task<Roles> FindByNameAsync(string normalizedRoleName, CancellationToken cancellationToken)
        {
            throw new System.NotImplementedException();
        }
    }
}
