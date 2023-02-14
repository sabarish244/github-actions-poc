using Microsoft.AspNetCore.Http;
using QipPortal.DAL.Strategies;
using QipPortal.Models;
using QipPortal.Models.DB;
using QipPortal.Models.PowerBi;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace QipPortal.DAL
{
    public class ResourceStore : IResources
    {
        private readonly AuthGatewayDevContext db;
        private readonly ProjectStore projectStore;

        public ResourceStore(AuthGatewayDevContext db, ProjectStore projectStore)
        {
            this.db = db;
            this.projectStore = projectStore;
        }


        public PermittedResourceList GetPermittedResources(int userId, int projectId)
        {
            IEnumerable<PermittedResource> pbiReports =
                (from u in db.Users
                 join up in db.UserProjects on u.UserId equals up.UserId
                 join pr in db.Projects on up.ProjectId equals pr.ProjectId
                 join p in db.Permissions on up.UserProjectId equals p.UserProjectId
                 join r in db.Roles on p.RoleId equals r.RoleId
                 join res in db.Resources on p.ResourceId equals res.ResourceId
                 join rest in db.ResourceTypes on res.ResourceTypeId equals rest.ResourceTypeId
                 join pbi in db.PowerBiReports on res.ResourceId equals pbi.ResourceId
                 join pbit in db.PowerBiReportType on pbi.ReportTypeId equals pbit.ReportTypeId
                 where (u.UserId == userId) && (pr.ProjectId == projectId)
                 select new PermittedResource
                 {
                     Name = pbit.Name,
                     Url = string.Format("/reports/index/{0}", res.ResourceId.ToString()),//pbit.Url,
                     Action = "Index",
                     Controller = "Reports",
                     RouteId = res.ResourceId.ToString(),
                     Icon = pbit.FontAwesomeIcon,
                     CategoryName = "Reports",
                     CategoryIcon = "fas fa-chart-bar",
                     CategoryDataLink = "reports"
                 });

            IEnumerable<PermittedResource> surveys =
                (from u in db.Users
                 join up in db.UserProjects on u.UserId equals up.UserId
                 join pr in db.Projects on up.ProjectId equals pr.ProjectId
                 join p in db.Permissions on up.UserProjectId equals p.UserProjectId
                 join r in db.Roles on p.RoleId equals r.RoleId
                 join res in db.Resources on p.ResourceId equals res.ResourceId
                 join rest in db.ResourceTypes on res.ResourceTypeId equals rest.ResourceTypeId
                 join s in db.Surveys on res.ResourceId equals s.ResourceId
                 join st in db.SurveyTypes on s.SurveyTypeId equals st.SurveyTypeId
                 where (u.UserId == userId) && (pr.ProjectId == projectId)
                 select new PermittedResource
                 {
                     Name = st.Name,
                     Url = st.Url,
                     Icon = st.FontAwesomeIcon,
                     CategoryName = "Surveys",
                     CategoryIcon = "fas fa-poll-h",
                     CategoryDataLink = "surveys"
                 });

            PermittedResourceList list = new PermittedResourceList
            {
                PermittedResources = pbiReports.Union(surveys).ToList()
            };

            return list;
        }

        public PermittedResourceList GetPermittedResources(int userId)
        {
            IEnumerable<PermittedResource> pbiReports =
                (from u in db.Users
                 join up in db.UserProjects on u.UserId equals up.UserId
                 join pr in db.Projects on up.ProjectId equals pr.ProjectId
                 join p in db.Permissions on up.UserProjectId equals p.UserProjectId
                 join r in db.Roles on p.RoleId equals r.RoleId
                 join res in db.Resources on p.ResourceId equals res.ResourceId
                 join rest in db.ResourceTypes on res.ResourceTypeId equals rest.ResourceTypeId
                 join pbi in db.PowerBiReports on res.ResourceId equals pbi.ResourceId
                 join pbit in db.PowerBiReportType on pbi.ReportTypeId equals pbit.ReportTypeId
                 where (u.UserId == userId)
                 select new PermittedResource
                 {
                     Name = pbit.Name,
                     Url = string.Format("/reports/index/{0}", res.ResourceId.ToString()),//pbit.Url,
                     Action = "Index",
                     Controller = "Reports",
                     RouteId = res.ResourceId.ToString(),
                     Icon = pbit.FontAwesomeIcon,
                     CategoryName = "Reports",
                     CategoryIcon = "fas fa-chart-bar",
                     CategoryDataLink = "reports"
                 });

            IEnumerable<PermittedResource> surveys =
                (from u in db.Users
                 join up in db.UserProjects on u.UserId equals up.UserId
                 join pr in db.Projects on up.ProjectId equals pr.ProjectId
                 join p in db.Permissions on up.UserProjectId equals p.UserProjectId
                 join r in db.Roles on p.RoleId equals r.RoleId
                 join res in db.Resources on p.ResourceId equals res.ResourceId
                 join rest in db.ResourceTypes on res.ResourceTypeId equals rest.ResourceTypeId
                 join s in db.Surveys on res.ResourceId equals s.ResourceId
                 join st in db.SurveyTypes on s.SurveyTypeId equals st.SurveyTypeId
                 where (u.UserId == userId)
                 select new PermittedResource
                 {
                     Name = st.Name,
                     Url = st.Url,
                     Icon = st.FontAwesomeIcon,
                     CategoryName = "Surveys",
                     CategoryIcon = "fas fa-poll-h",
                     CategoryDataLink = "surveys"
                 });

            PermittedResourceList list = new PermittedResourceList
            {
                PermittedResources = pbiReports.Union(surveys).ToList()
            };

            return list;
        }

        public ReportData GetReportData(int resourceId, string username, HttpContext context)
        {
            string userprincipal =
                (from u in db.Users
                 where u.UserName == username
                 select u.UserPrincipalName).SingleOrDefault();

            ReportData reportData =
                (from pbi in db.PowerBiReports
                 where (pbi.ResourceId == resourceId)
                 select new ReportData
                 {
                     ReportId = pbi.ReportId.ToString().ToLower(),
                     ClientId = pbi.TenancyId.ToString().ToLower(),
                     GroupId = pbi.GroupId.ToString().ToLower(),
                     RlsRoles = "qip-user-role",
                     RlsUsername = GetRlsUsername(pbi.RequireRls,userprincipal,pbi.ReportTypeId,context)
                 })
                 .SingleOrDefault();
            return reportData;
        }

        private string GetRlsUsername(
            bool requireRls, 
            string userprincipal,
            int reportType,
            HttpContext context)
        {
            if (!requireRls)
            {
                return null;
            }
            else
            {
                //report type 1 is SLM
                if (reportType == 1)
                {
                    int? projectId = projectStore.GetCurrentProject(context);
                    if (projectId == null)
                    {
                        return userprincipal;
                    }
                    else
                    {
                        return string.Format("{0}##{1}", userprincipal, projectId); 
                    }
                }
                else
                {
                    return userprincipal;
                }
            }
        }
    }
}
