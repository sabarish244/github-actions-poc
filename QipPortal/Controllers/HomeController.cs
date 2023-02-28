//--------------------------------------------------------------------------------------------------
//   Task-Id        Description                                     Modified by        Modified date
//   10099          X-Platform code refactoring and stabilizing     Boshiruddin        08/03/2021
//   11060          X-Platform code reviews fixes                   Boshiruddin        08/06/2021
//       This file is copyright Expleo 2021.
//--------------------------------------------------------------------------------------------------
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using QipPortal.DAL;
using QipPortal.DAL.Strategies;
using QipPortal.Models;
using QipPortal.Models.DB;
using QipPortal.Services;
using System;
using System.IO;
using System.Linq;
using System.Data.SqlClient;
using System.Security.Claims;

namespace QipPortal.Controllers
{
    public class HomeController : BaseController
    {

        private readonly AuthGatewayDevContext db;

        public HomeController(IResources resources,
            //UserManager<Users> userManager,
            IOptions<ConfigSettings> config,
            ListItemManager listItemManager,
            ProjectStore projectStore,
            UsersListStore userslistStore,
            ILoggerFactory logFactory,
            AuthGatewayDevContext db)
             : base(resources, /*userManager,*/ config, listItemManager, projectStore, userslistStore, logFactory)
        {
            this.db = db;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public IActionResult Index()
        { 
            return GetActionResult();
        }
        /// <summary>
        /// This method returns list of resources based on projectId
        /// </summary>
        /// <returns>list of resources</returns>
        public IActionResult QIPReports()
        {
            long logToken = this.m_logManager.LogFunctionStart(this.HttpContext, "QIPReports");
            try
            {
                //if not logged in, direct to login action
                dynamic user = userManager.GetUserId(User);

                if (user == null)
                {
                    return RedirectToAction("Login", "Account");
                }

                if (!int.TryParse(user, out int userId))
                {
                    return RedirectToAction("Login", "Account");
                }
                var mnuList = projectStore.GetMenuItemByUserIDAsync(userId);
                ViewBag.menuItem = mnuList;
                return View();
            }
            catch (Exception ex)
            {
                // Log an exception
                this.m_logManager.WriteExceptionLog(ex);

                // Rethrow the error
                throw;
            }
            finally
            {
                // Log that the function has now completed
                this.m_logManager.LogFunctionEnd("QIPReports", logToken);
            }
        }

        /// <summary>
        /// GetActionResult action supports user is null value it's redirect accout to index action
        /// </summary>
        /// <param name="reportaction"></param>
        /// <returns>Relevant View or Error View</returns>
        public IActionResult GetActionResult(string reportaction = "")
        {
            long logToken = this.m_logManager.LogFunctionStart(this.HttpContext, "GetActionResult");
            try
            {
                // Save any filter information
                PowerBiFilter.SaveFilterParameter(HttpContext);

                //Lookup UserID of signed in SSO user
                string strSignedInFullName = HttpContext.User.Claims.First(c => c.Type == "name").Value;
                string strSignedInUserName = HttpContext.User.Claims.First(c => c.Type == "emails").Value;
                var claim = new System.Security.Claims.ClaimsPrincipal();
                claim.AddIdentity(HttpContext.User.Identity as ClaimsIdentity ?? new ClaimsIdentity(HttpContext.User.Identity));


                //if not logged in, direct to login action

                
                dynamic user = db.GetSSOUserID(strSignedInUserName, strSignedInFullName); // userManager.GetUserId(User);
                ViewBag.username = strSignedInFullName;;

                if (!int.TryParse(user, out int userId))
                {
                   // HttpContext.Session.Clear();
                    return RedirectToAction("Login", "Account");
                }

                if (user == null)
                {
                    return RedirectToAction("Login", "Account");
                }
                // If a report Id has been specified on the query string then redirect there now
                //int? reportId = PowerBiFilter.GetReportParameter(HttpContext);
                int? VersionModal = HttpContext.Session.GetInt32("VersionModal");
                if (VersionModal == null)
                {
                    HttpContext.Session.SetInt32("VersionModal", 1);
                }
                else
                {
                    //reportId = 0;
                    HttpContext.Session.Clear();
                    HttpContext.Session.SetInt32("VersionModal", 2);
                }
                VersionModal = HttpContext.Session.GetInt32("VersionModal");
                ViewBag.VersionModalpop = VersionModal;

                // If a report Id has been specified on the query string then redirect there now
                int? reportId = PowerBiFilter.GetReportParameter(HttpContext);
                if (reportId.HasValue)
                {
                    // The Id matches, redirect to the reports controller supplying the report Id
                    ViewBag.reportId = reportId.Value;                      
                }
                else if (HttpContext.Request.Query["reportId"].Any())
                {
                    string reportIdStringParam = HttpContext.Request.Query["reportId"].First();
                    int reportIdParam = 0;
                    int.TryParse(reportIdStringParam, out reportIdParam);
                    ViewBag.reportId = reportIdParam;
                }
                else
                {
                    ViewBag.reportId = 0;
                }
                //This for Version number and Build Number binding done
                var builder = new ConfigurationBuilder()
                                        .SetBasePath(Directory.GetCurrentDirectory())
                                        .AddJsonFile("appsettings.json");
                var configuration = builder.Build();
                ViewBag.XDKEnv = configuration["VersionDetails:XDKEnv"];
                ViewBag.VersionNo = configuration["VersionDetails:VersionNo"];
                ViewBag.VersionDate = configuration["VersionDetails:VersionDate"];
                ViewBag.VersionDateDDMMMYYYY = configuration["VersionDetails:VersionDateDDMMMYYYY"];
                ViewBag.BuildNo = configuration["VersionDetails:BuildNo"];

                //------------------------------------------
                //--FETCHING SIDEBAR MENU ITEM is built from the Stored Proc results 
                //------------------------------------------
                MenuItemList menuList = projectStore.GetMenuItemByUserIDAsync(userId);
                ViewBag.menuItem = menuList;

                Users users = new Users();
                users.UserId = userId;

                return View(users);

            }
            catch (Exception ex)
            {
                // Log an exception
                this.m_logManager.WriteExceptionLog(ex);

                // Rethrow the error
                throw;
            }
            finally
            {
                // Log that the function has now completed
                this.m_logManager.LogFunctionEnd("GetActionResult", logToken);
            }
        }
         

    }
}