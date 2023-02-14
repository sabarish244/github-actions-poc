//------------------------------------------------------------------------------
//   Task-Id        Description               Modified by        Modified date
//
//       This file is copyright Expleo 2021.
//------------------------------------------------------------------------------

using Microsoft.AspNetCore.Http;
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
using System.Diagnostics;

namespace QipPortal.Controllers
{
    /// <summary>
    /// Base class to handle dependency injection and error handling
    /// </summary>   
    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public class BaseController : Controller
    {
        protected readonly IResources resources;
        protected readonly UserManager<Users> userManager;
        protected readonly IOptions<ConfigSettings> config;
        protected readonly ListItemManager listItemManager;
        protected readonly ProjectStore projectStore;
        protected readonly UsersListStore userslistStore;
        protected readonly LogManager m_logManager;

        /// <summary>
        /// Contructor to alloe dependency injection
        /// </summary>
        /// <param name="reports"></param>
        public BaseController(
            IResources resources,
            //UserManager<Users> userManager,
            IOptions<ConfigSettings> config,
            ListItemManager listItemManager,
            ProjectStore projectStore,
            UsersListStore userslistStore,
            ILoggerFactory logFactory)
        {
            this.resources = resources;
            //this.userManager = userManager;
            this.config = config;
            this.listItemManager = listItemManager;
            this.projectStore = projectStore;
            this.userslistStore = userslistStore;

            // Create the log manager
            this.m_logManager = new LogManager(logFactory);
        }

        public BaseController(IResources resources, UserManager<Users> userManager, IOptions<ConfigSettings> config, ListItemManager listItemManager, ILoggerFactory logFactory)
        {
            this.resources = resources;
            //this.userManager = userManager;
            this.config = config;
            this.listItemManager = listItemManager;
            // Create the log manager
            this.m_logManager = new LogManager(logFactory);
        }

        /// <summary>
        /// Error handling function, directing to custom error page
        /// </summary>
        /// <param name="id">Plain text error description for user</param>
        /// <returns></returns>
        public IActionResult Error(string id)
        {
            return View(new ErrorViewModel
            {
                RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier,
                UserDescription = id
            });
        }

        public virtual PermittedResourceList GetPermittedResourceList(int projectId)
        {
            PermittedResourceList resourceList = new PermittedResourceList();

            if (int.TryParse(userManager.GetUserId(User), out int userId))
            {
                resourceList = resources.GetPermittedResources(
                    userId, (int)projectId);
            }

            return resourceList;
        }
    }
}