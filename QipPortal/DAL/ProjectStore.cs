//--------------------------------------------------------------------------------------------------
//   Task-Id        Description                                     Modified by        Modified date
//   10099          X-Platform code refactoring and stabilizing     Boshiruddin        08/03/2021
//       This file is copyright Expleo 2021.
//--------------------------------------------------------------------------------------------------
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using QipPortal.Models;
using QipPortal.Models.DB;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QipPortal.DAL
{
    public class ProjectStore
    {

        private readonly AuthGatewayDevContext db;
        private readonly IOptions<ConfigSettings> config;

        public ProjectStore(AuthGatewayDevContext db, IOptions<ConfigSettings> config)
        {
            this.db = db;
            this.config = config;
        }

        /// <summary>
        /// This Get method returns the list of projects based on userid
        /// </summary>
        /// <param name="userId"></param>
        /// <returns>list of projects</returns>
        public virtual List<PermittedProject> GetProjects(int userId)
        {

            IEnumerable<PermittedProject> projects =
            (from p in db.Projects
            join o in db.Organisations
            on p.OrganisationId equals o.OrganisationId
            join up in db.UserProjects
            on p.ProjectId equals up.ProjectId
            where up.UserId == userId
            select new PermittedProject
            {
            ProjectId = p.ProjectId,
            ProjectName = p.Name,
            ProjectEmail =p.ProjectManagerEmail,
            IsMenu =p.IsMenuItem,
            OrganisationName = o.Name
            }
            );
             return projects.ToList();
        }

        /// <summary>
        /// This method returns projectID based on user
        /// </summary>
        /// <param name="context"></param>
        /// <returns>ProjectID</returns>
        public virtual int? GetCurrentProject(HttpContext context)
        {
            return context.Session.GetInt32(config.Value.SessionProject);
        }

        /// <summary>
        /// This method set the projectID based on user
        /// </summary>
        /// <param name="context"></param>
        /// <param name="projectId"></param>
        public void SetCurrentProject(HttpContext context, int projectId)
        {
            context.Session.SetInt32(config.Value.SessionProject, projectId);
        }

        /// <summary>
        /// Add ComplianceLog
        /// </summary>
        /// <param name="com"></param>
        /// <returns></returns>
        public int AddComplianceLog(ComplianceLog com)
        {
            var compLog = new ComplianceLog
            {
                ComplianceMessage = com.ComplianceMessage,
                ProjectID = com.ProjectID,
                UserID = com.UserID,
                CreateDateTime = com.CreateDateTime
            };

            db.ComplianceLog.Add(compLog);
            return db.SaveChanges();



        }

        /// <summary>
        /// Edit ComplianceLog
        /// </summary>
        /// <param name="com"></param>
        /// <returns></returns>
        public int EditComplianceLog(ComplianceLog com)
        {
            var count = 0;
            var result = db.ComplianceLog.SingleOrDefault(b => b.ComplianceId == com.ComplianceId);
            if (result != null)
            {
                result.ComplianceMessage = com.ComplianceMessage;
                result.ProjectID = com.ProjectID;
                result.UserID = com.UserID;

                count = db.SaveChanges();
            }
            return count;


        }

        /// <summary>
        /// Delete ComplianceLog
        /// </summary>
        /// <param name="comid"></param>
        /// <returns></returns>
        public int DeleteComplianceLog(int comid)
        {
            var result = db.ComplianceLog.SingleOrDefault(x => x.ComplianceId == comid); //returns a single item.
            var count = 0;
            if (result != null)
            {
                db.ComplianceLog.Remove(result);
                count = db.SaveChanges();
            }
            return count;


        }

        /// <summary>
        /// This method returns the list of menu items based on userId
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public MenuItemList GetMenuItemByUserIDAsync(int userId)
        {
            // Returns
            MenuItemList objReturnMenu = new MenuItemList();

            // Get the stuff from the database
            Task<List<MenuItem>> allMenuItemsTask = db.GetMenuItemByUserIDAsync(userId);

            // Wait until the database function has returned
            List<MenuItem> allMenuItems = allMenuItemsTask.Result;

            // Parse the database menu list into separate apps, reports and favourites
            CategoryParser parser = new CategoryParser();
            objReturnMenu.AppTree = parser.CreateMenuStructure("Application", allMenuItems);
            objReturnMenu.ReportTree = parser.CreateMenuStructure("Power BI Report", allMenuItems);
            objReturnMenu.FavTree = parser.CreateMenuStructure(null, allMenuItems);

            return objReturnMenu;
        }

        /// <summary>
        ///  This method is used for adding a new favourites
        /// </summary>
        /// <param name="userfavourite"></param>
        /// <returns> 1 or 0</returns>
        public virtual int AddUserFavourites(UserFavourites userfavourite)
        {
            var userfavourites = new UserFavourites
            {
                ResourceId = userfavourite.ResourceId,
                UserID     = userfavourite.UserID
            };

            db.UserFavourites.Add(userfavourites);
            return db.SaveChanges();
        }

        /// <summary>
        /// This method is used for deleting a favorites
        /// </summary>
        /// <param name="userfavourite"></param>
        /// <returns> 1 or 0 </returns>
        public virtual int DeleteUserFavourites(UserFavourites userfavourite)
        {
            var result = db.UserFavourites.SingleOrDefault(x => x.ResourceId == userfavourite.ResourceId && x.UserID == userfavourite.UserID); //returns a single item.
            var Deletefavourite = 0;
            if (result != null)
            {
                db.UserFavourites.Remove(result);
                Deletefavourite = db.SaveChanges();
            }
            return Deletefavourite;
        }

    }
}


 