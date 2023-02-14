//--------------------------------------------------------------------------------------------------
//   Task-Id        Description                                     Modified by        Modified date
//   10099          X-Platform code refactoring and stabilizing     Boshiruddin        08/03/2021
//       This file is copyright Expleo 2021.
//--------------------------------------------------------------------------------------------------

using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using QipPortal.DAL;
using QipPortal.DAL.Strategies;
using QipPortal.Models;
using QipPortal.Models.DB;
using QipPortal.Services;
using System;
using System.Web;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;

namespace QipPortal.Controllers
{

    /// <summary>
    /// Security Controller responsible for managing project list, user list, user access and compliance log
    /// Will require authentication to be added at controller level
    /// </summary>
    public class SecurityController : BaseController
    {

        private readonly AuthGatewayDevContext db;

        public SecurityController(IResources resources,
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
        /// Returns list of projects based on userid 
        /// </summary>
        /// <param name="userId"></param>
        /// <returns>List of project</returns>
        [HttpGet, ActionName("GetProjects")]
        [Route("/GetProjects")]
        public JsonResult GetProjects(int userId)
        {
            // Write an initial log
            long logToken = this.m_logManager.LogFunctionStart(this.HttpContext, "GetProjects");
            try
            {
                //  Get the projects
                var projects = projectStore.GetProjects(userId);
                if (projects != null)
                {
                    return Json(projects);
                }
                var resperror = new HttpResponseMessage()
                {
                    Content = new StringContent(StringTable.NoProjects)
                };
                resperror.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");

                return Json(resperror);
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
                this.m_logManager.LogFunctionEnd("GetProjects", logToken);
            }
        }


        /// <summary>
        /// Returns list of Users
        /// </summary>
        /// <returns>list of Users</returns> 
        [HttpGet, ActionName("GetUsers")]
        [Route("/GetUsers")]
        public JsonResult GetUsers()
        {
            // Write an initial log
            long logToken = this.m_logManager.LogFunctionStart(this.HttpContext, "GetUsers");
            try
            {
                var Users = userslistStore.GetUsers();
                if (Users != null)
                {
                    return Json(Users);
                }

                var resperror = new HttpResponseMessage()
                {
                    Content = new StringContent(StringTable.NoProjects)
                };
                resperror.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
                return Json(resperror);
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
                this.m_logManager.LogFunctionEnd("GetUsers", logToken);
            }
        }


        /// <summary>
        ///  This method returns list of users based on project
        /// </summary>
        /// <param name="ProjectID"></param>
        /// <returns>list of users</returns>
        [HttpGet, ActionName("GetUsersAssignedToProject")]
        [Route("/GetUsersAssignedToProject")]
        public JsonResult GetUsersAssignedToProject(int ProjectID, int loggerID)
        {
            // Write an initial log
            long logToken = this.m_logManager.LogFunctionStart(this.HttpContext, "GetUsersAssignedToProject");
            try
            {
                var Users = userslistStore.GetUsersAssignedToProject(ProjectID);
                if (Users != null)
                {
                    return Json(Users);
                }
                var resperror = new HttpResponseMessage()
                {
                    Content = new StringContent(StringTable.NoProjects)
                };

                resperror.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
                return Json(resperror);
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
                this.m_logManager.LogFunctionEnd("GetUsersAssignedToProject", logToken);
            }
        }

        /// <summary>
        /// This method is used for adding a new favourites
        /// </summary>
        /// <param name="userFavourites"></param>
        /// <returns>1  or 0 </returns>
        [HttpPost, ActionName("AddUserFavourites")]
        [Route("/AddUserFavourites")]
        public int AddUserFavourites([FromBody] UserFavourites userFavourites)
        {
            // Write an initial log
            long logToken = this.m_logManager.LogFunctionStart(this.HttpContext, "AddUserFavourites");
            try
            {
                userFavourites = new UserFavourites();
                //Lookup UserID of signed in SSO user
                string strSignedInFullName = HttpContext.User.Claims.First(c => c.Type == "name").Value;
                string strSignedInUserName = HttpContext.User.Claims.First(c => c.Type == "emails").Value;
                string strUserId = db.GetSSOUserID(strSignedInUserName, strSignedInFullName);

                // Set UserFavourites
                userFavourites.UserID = Convert.ToInt32(strUserId);
                userFavourites.ResourceId = Convert.ToInt32(HttpContext.Request.Cookies["favResourceId"]);
                userFavourites.FavId = Convert.ToInt32(HttpContext.Request.Cookies["favFavouriteId"]);


                int AddFavourite = 0;
                if (userFavourites.UserID == 0)
                {
                    //if not logged in, direct to login action
                    Users user = userManager.GetUserAsync(User).Result;
                    userFavourites.UserID = user.UserId;
                }
                AddFavourite = projectStore.AddUserFavourites(userFavourites);

                return AddFavourite;
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
                this.m_logManager.LogFunctionEnd("AddUserFavourites", logToken);
            }
        }

        /// <summary>
        /// This method is used for deleting a favorites
        /// </summary>
        /// <param name="userFavourite"></param>
        /// <returns> 1 or 0 </returns>
        [HttpPost, ActionName("DeleteUserFavourites")]
        [Route("/DeleteUserFavourites")]
        public int DeleteUserFavourites([FromBody] UserFavourites userFavourite)
        {
            // Write an initial log
            long logToken = this.m_logManager.LogFunctionStart(this.HttpContext, "DeleteUserFavourites");
            try
            {
                userFavourite = new UserFavourites();
                //Lookup UserID of signed in SSO user
                string strSignedInFullName = HttpContext.User.Claims.First(c => c.Type == "name").Value;
                string strSignedInUserName = HttpContext.User.Claims.First(c => c.Type == "emails").Value;
                string strUserId = db.GetSSOUserID(strSignedInUserName, strSignedInFullName);

                // Set UserFavourites
                userFavourite.UserID = Convert.ToInt32(strUserId);
                userFavourite.ResourceId = Convert.ToInt32(HttpContext.Request.Cookies["favResourceId"]);
                userFavourite.FavId = Convert.ToInt32(HttpContext.Request.Cookies["favFavouriteId"]);


                int Deletefavourite = 0;

                //if not logged in, direct to login action
                if (userFavourite.UserID == 0)
                {
                    // Write an informational log
                    this.m_logManager.WriteLog(LogManager.LogLevel.Information, "User is not logged in, redirecting to login page");

                    Users user = userManager.GetUserAsync(User).Result;
                    userFavourite.UserID = user.UserId;
                }
                Deletefavourite = projectStore.DeleteUserFavourites(userFavourite);

                return Deletefavourite;
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
                this.m_logManager.LogFunctionEnd("DeleteUserFavourites", logToken);
            }
        }

        /// <summary>
        /// This method will change the user's log level.
        /// </summary>
        /// <param name="logLevel">
        /// The new level, it must be one of the LogManager.LogLevel enumeration values.
        /// </param>
        [HttpPost, ActionName("SetUserLogLevel")]
        [Route("/SetUserLogLevel")]
        public void SetUserLogLevel(string logLevel)
        {
            // Write an initial log
            long logToken = this.m_logManager.LogFunctionStart(this.HttpContext, "SetUserLogLevel");
            try
            {
                // Convert the log level integer to an enumeration value
                LogManager.LogLevel enumValue;
                if(!Enum.TryParse<LogManager.LogLevel>(logLevel, out enumValue))
                {
                    throw new ArgumentOutOfRangeException("logLevel");
                }

                // Set the log level
                this.m_logManager.SetLogLevel(this.HttpContext, enumValue);

                // Write an informational log
                this.m_logManager.WriteLog(LogManager.LogLevel.Information, "Changing the user's log level to {0}", logLevel.ToString());
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
                this.m_logManager.LogFunctionEnd("SetUserLogLevel", logToken);
            }
        }
    }
}

