using Microsoft.AspNetCore.Http;
using QipPortal.Models;
using QipPortal.Models.PowerBi;

namespace QipPortal.DAL.Strategies
{
    /// <summary>
    /// Interface for management of Power BI reports and surveys
    /// </summary>
    public interface IResources
    {
        ReportData GetReportData(int resourceId, string username, HttpContext context);
        PermittedResourceList GetPermittedResources(int userId, int projectId);
    }
}
