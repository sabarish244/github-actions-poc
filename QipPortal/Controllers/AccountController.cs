//------------------------------------------------------------------------------
//   Task-Id        Description               Modified by        Modified date
//
//       This file is copyright Expleo 2021.
//------------------------------------------------------------------------------
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.AzureAD.UI;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using QipPortal.DAL;
using QipPortal.Models;
using QipPortal.Models.Account;
using QipPortal.Models.DB;
using QipPortal.Services;
using System;
using System.Collections.Generic;
using System.IO;
using System.Security.Claims;
using System.Threading.Tasks;

namespace QipPortal.Controllers
{
    [Route("[controller]/[action]")]


    public class AccountController : Controller
    {
        //private readonly UserManager<Users> userManager;
        //private readonly SignInManager<Users> signInManager;
        private readonly AuthGatewayDevContext context;
        private readonly ProjectStore projectStore;
        private readonly IOptions<ConfigSettings> config;
        private readonly ListItemManager listItemManager;
        /// <summary>
        /// Used to write all logs
        /// </summary>
        private LogManager m_logManager;
        public AccountController(//UserManager<Users> userManager,
            //SignInManager<Users> signInManager,
            AuthGatewayDevContext context,
            ProjectStore projectStore,
            IOptions<ConfigSettings> config,
            ListItemManager listItemManager,
            ILoggerFactory logFactory)
        {
            //this.userManager = userManager;
            //this.signInManager = signInManager;
            this.context = context;
            this.projectStore = projectStore;
            this.config = config;
            this.listItemManager = listItemManager;
            // Create the log manager
            this.m_logManager = new LogManager(logFactory);
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> Login(string returnUrl = null)
        {
            // Write an initial log
            long logToken = this.m_logManager.LogFunctionStart(this.HttpContext, "Login");
            try
            {
                // Clear the existing external cookie to ensure a clean login process
                await HttpContext.SignOutAsync(IdentityConstants.ExternalScheme);
                ProcessReturnUrl.RemoveReturnURLFromSessionValue(HttpContext);

                //This for Version number and Build Number binding done
                var builder = new ConfigurationBuilder()
                                        .SetBasePath(Directory.GetCurrentDirectory())
                                        .AddJsonFile("appsettings.json");
                var configuration = builder.Build();
                ViewBag.VersionNo = configuration["VersionDetails:VersionNo"];
                ViewBag.VersionDate = configuration["VersionDetails:VersionDate"];
                ViewBag.VersionDateDDMMMYYYY = configuration["VersionDetails:VersionDateDDMMMYYYY"];
                ViewBag.BuildNo = configuration["VersionDetails:BuildNo"];

                ViewData["ReturnUrl"] = returnUrl;
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
                this.m_logManager.LogFunctionEnd("Login", logToken);
            }
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(LoginViewModel model, string returnUrl = null)
        {
            // Write an initial log
            long logToken = this.m_logManager.LogFunctionStart(this.HttpContext, "Login");
            try
            {
                //This for Version number and Build Number binding done
                var builder = new ConfigurationBuilder()
                                        .SetBasePath(Directory.GetCurrentDirectory())
                                        .AddJsonFile("appsettings.json");
                var configuration = builder.Build();
                ViewBag.VersionNo = configuration["VersionDetails:VersionNo"];
                ViewBag.VersionDate = configuration["VersionDetails:VersionDate"];
                ViewBag.VersionDateDDMMMYYYY = configuration["VersionDetails:VersionDateDDMMMYYYY"];
                ViewBag.BuildNo = configuration["VersionDetails:BuildNo"];


                ViewData["ReturnUrl"] = returnUrl;

                if (ModelState.IsValid)
                {
                    // From ASP Net Core source
                    // Switch value determines if Lockout should be lifted if user provides correct login after they were locked out
                    // Overrides AspNetCore default of 'true'
                    AppContext.SetSwitch("Microsoft.AspNetCore.Identity.CheckPasswordSignInAlwaysResetLockoutOnSuccess", false);

                    //var result = await signInManager.PasswordSignInAsync(model.Username, model.Password, model.RememberMe, lockoutOnFailure: true);

                    string signedInUserName = User.Identity.Name;
                    string signedInUserId   = "james.meek@expleogroup.com";
                    string signedInUserPwd  = "P@ssword1";

                    var currentClaimsPrincipal = ClaimsPrincipal.Current;

                    //var result = await signInManager.PasswordSignInAsync(signedInUserId, signedInUserPwd, model.RememberMe, lockoutOnFailure: true);
                    var result = true;

                    //if (result.Succeeded)
                    if (result)
                    {
                        ProcessReturnUrl.SetReturnURLToSessionValue(HttpContext, returnUrl);
                        return RedirectToAction(nameof(HomeController.Index), "Home");

                    }
                    else if (!result) //(result.IsLockedOut)
                    {
                        ModelState.AddModelError(string.Empty, "Account locked.");

                        return View(model);
                    }
                    else
                    {
                        ModelState.AddModelError(string.Empty, "Invalid login credentials.");
                        return View(model);
                    }
                }

                // If we got this far, something failed, redisplay form
                return View(model);
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
                this.m_logManager.LogFunctionEnd("Login", logToken);
            }
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> Logout()
        {
            // Write an initial log
            long logToken = this.m_logManager.LogFunctionStart(this.HttpContext, "Logout");
            try
            {
                //This is for Azure B2C logout redirect uri
                var builder         = new ConfigurationBuilder()
                                            .SetBasePath(Directory.GetCurrentDirectory())
                                            .AddJsonFile("appsettings.json");
                var configuration   = builder.Build();
                var redirectUri     = configuration["AzureB2C:LogoutRedirectUri"];
                
                await HttpContext.ChallengeAsync(OpenIdConnectDefaults.AuthenticationScheme,
                               new AuthenticationProperties { RedirectUri = redirectUri });

                //await signInManager.SignOutAsync();
                await HttpContext.SignOutAsync();
                //await HttpContext.SignOutAsync("Cookies");
                //await HttpContext.SignOutAsync("oidc");
                HttpContext.Session.Remove("VersionModal");
                ProcessReturnUrl.RemoveReturnURLFromSessionValue(HttpContext);

                //return RedirectToAction(nameof(HomeController.Index), "Home");
                return new SignOutResult(new[] { "Cookies" });
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
                this.m_logManager.LogFunctionEnd("Logout", logToken);
            }
        }

        [HttpGet]
        [Authorize]
        public IActionResult CheckProjects(string returnUrl = null)
        {            // Write an initial log
            long logToken = this.m_logManager.LogFunctionStart(this.HttpContext, "CheckProjects");
            try
            {
                //Users user = userManager.GetUserAsync(User).Result;
                List<PermittedProject> list = projectStore.GetProjects(60/*user.UserId*/);

                var processedReturnUrl = ProcessReturnUrl.GetValidReturnUrl(HttpContext, returnUrl);

                if (list.Count > 1)
                {
                    List<SelectListItem> selectListItems = listItemManager.GetProjects(list, "Project / Engagement");
                    ProjectsViewModel checkProjects = new ProjectsViewModel
                    {
                        Projects = selectListItems,
                        ReturnUrl = processedReturnUrl

                    };
                    return View(checkProjects);
                }
                else if (list.Count == 1)
                {
                    projectStore.SetCurrentProject(HttpContext, list[0].ProjectId);

                    return RedirectToLocal(processedReturnUrl);
                }
                else
                {
                    return RedirectToAction("Error", "Base",
                       new { id = "No Projects Found" });
                }
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
                this.m_logManager.LogFunctionEnd("CheckProjects", logToken);
            }
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult CheckProjects(ProjectsViewModel model)
        {
            // Write an initial log
            long logToken = this.m_logManager.LogFunctionStart(this.HttpContext, "CheckProjects");
            try
            {
                if (!ModelState.IsValid)
                {
                    return View(model);
                }

                if (int.TryParse(model.ProjectId, out int projectId))
                {
                    projectStore.SetCurrentProject(HttpContext, projectId);
                    return RedirectToLocal(model.ReturnUrl);
                }

                return View(model);
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
                this.m_logManager.LogFunctionEnd("CheckProjects", logToken);
            }
        }

        private IActionResult RedirectToLocal(string returnUrl)
        {
            // Write an initial log
            long logToken = this.m_logManager.LogFunctionStart(this.HttpContext, "CheckProjects");
            try
            {
                if (Url.IsLocalUrl(returnUrl))
                {
                    return Redirect(returnUrl);
                }
                else
                {
                    return RedirectToAction(nameof(HomeController.Index), "Home");
                }
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
                this.m_logManager.LogFunctionEnd("CheckProjects", logToken);
            }
        }

    }
}