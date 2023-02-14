//--------------------------------------------------------------------------------------------------
//   Task-Id        Description                                     Modified by        Modified date
//   10099          X-Platform code refactoring and stabilizing     Boshiruddin        08/03/2021
//   11060          X-Platform code reviews fixes                   Boshiruddin        08/06/2021
//       This file is copyright Expleo 2021.
//--------------------------------------------------------------------------------------------------
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using QipPortal.DAL;
using QipPortal.DAL.Strategies;
using QipPortal.Models;
using QipPortal.Models.DB;
using QipPortal.Models.PowerBi;
using QipPortal.Services;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace QipPortal.Controllers
{
    /// <summary>
    /// Allow access to secure Power BI reports
    /// Will require authentication to be added at controller level
    /// </summary>
    /// 

    [Authorize]
    public class ReportsController : BaseController
    {
        /// <summary>
        /// Constructor uses base-class dependency injection
        /// </summary>
        /// <param name="reports">Reports strategy - can be mocked</param>
        /// 
        int ResourceID;
 

        public ReportsController(IResources resources,
            //UserManager<Users> userManager,
            IOptions<ConfigSettings> config,
            ListItemManager listItemManager,
            ProjectStore projectStore,
            UsersListStore userslistStore,
            ILoggerFactory logFactory)
             : base(resources, /*userManager,*/ config, listItemManager, projectStore, userslistStore, logFactory)
        {
        }

        [HttpGet]
        public async Task<IActionResult> Index(int id)
        { 
            int loggerID = Convert.ToInt32(HttpContext.Request.Query["Logfile"]);
            // Write an initial log
            long logToken = this.m_logManager.LogFunctionStart(this.HttpContext, "Index");
            try
            {

                //Used for logger  
                //0 (OFF) - log critical and errors
                //1       - log critical, errors and warnings
                //2       - log critical, errors, warnings and info
                //3 (ALL) - log critical, errors, warnings, info and debug
 
                ResourceID = id;
               

                ViewBag.ResetButtonVisibility = string.IsNullOrEmpty(PowerBiFilter.GetFilterParameter(HttpContext)) ? "invisible" : "visible";

                // Add a flag to show the print button
                ViewBag.PrintButtonVisibility = (id == 0) ? "invisible" : "visible";


                var result = GetEmbedConfig(id, loggerID);
 
                return GetActionResult(await result, loggerID);
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
                this.m_logManager.LogFunctionEnd("Index", logToken);
            }

        }

        //[Route("ResetFilter")]
        [HttpGet]
        public IActionResult ResetFilter()
        {
            // Write an initial log
            long logToken = this.m_logManager.LogFunctionStart(this.HttpContext, "ResetFilter");
            try
            {
                PowerBiFilter.ClearFilterParameter(HttpContext);
                return Content("success");
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
                this.m_logManager.LogFunctionEnd("ResetFilter", logToken);
            }
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="resourceId"></param>
        /// <returns></returns>
        private async Task<EmbedConfig> GetEmbedConfig(int resourceId,int loggerID=0)
        {
            // Write an initial log
            long logToken = this.m_logManager.LogFunctionStart(this.HttpContext, "GetEmbedConfig");
            try
            {
 
                ReportData reportData = resources.GetReportData(resourceId, User.Identity.Name, HttpContext);
 
                EmbedReport embedReport = new EmbedReport(reportData);

                // Get the power bi configuration to be embedded in the ASP page
                EmbedConfig config = await embedReport.GetEmbedConfig();
  
                // If there is a filter property then attach it to the power BI url
                string filter = PowerBiFilter.GetFilterParameter(HttpContext);
                if (!string.IsNullOrEmpty(filter))
                {
                    config.EmbedUrl += string.Format("{0}&filter={1}", config.EmbedUrl, filter);
                }

                return config;
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
                this.m_logManager.LogFunctionEnd("ResetFilter", logToken);
            }
        }

        /// <summary>
        /// Returns relevant view for embedded report, or error if necesessary
        /// </summary>
        /// <param name="embedConfig">Configuration for Power BI, inclusing RLS if necessary</param>
        /// <returns>Relevant View or Error View</returns> 
        private IActionResult GetActionResult(EmbedConfig embedConfig, int logfile)
        {
            // Write an initial log
            long logToken = this.m_logManager.LogFunctionStart(this.HttpContext, "GetEmbedConfig");
            try
            {
                if (embedConfig == null)
                {
                    return RedirectToAction("Error",
                        new { id = "Error loading EmbedConfig" });
                }

                if (embedConfig.EmbedUrl == null)
                {
                    return RedirectToAction("Error",
                        new { id = "Error loading EmbedConfig URL" });
                }

                ViewBag.FavouriteID = 0;
                ViewBag.ResourceId = 0;


                //This for Version number and Build Number binding done
                var builder = new ConfigurationBuilder()
                                        .SetBasePath(Directory.GetCurrentDirectory())
                                        .AddJsonFile("appsettings.json");
                var configuration = builder.Build();
                ViewBag.VersionNo = configuration["VersionDetails:VersionNo"];
                ViewBag.VersionDate = configuration["VersionDetails:VersionDate"];
                ViewBag.VersionDateDDMMMYYYY = configuration["VersionDetails:VersionDateDDMMMYYYY"];
                ViewBag.BuildNo = configuration["VersionDetails:BuildNo"];

                return View(embedConfig);
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
                this.m_logManager.LogFunctionEnd("ResetFilter", logToken);
            }
        }

        /// <summary>
        /// Downloads the actual print file when the export has finished.
        /// </summary>
        /// <param name="exportId">
        /// The Id of the export returned by the StartExport function.
        /// </param>
        /// <param name="printStrategyName">
        /// The name of the print stategy to use.
        /// </param>
        /// <param name="reportId">
        /// Id of the report to print.
        /// </param>
        /// <returns>
        /// Json containing the current progress.
        /// </returns>
        [HttpGet]
        public FileResult DownloadPrintedReport(string exportId, string printStrategyName, int reportId)
        {
            // Write an initial log
            long logToken = this.m_logManager.LogFunctionStart(this.HttpContext, "DownloadPrintedReport");
            try
            {
                // Get the print strategy
                PrintStrategy printStrategy = PrintStrategy.AvailableStrategies[printStrategyName];

                // Get the report to print
                ReportData reportData = resources.GetReportData(reportId, User.Identity.Name, HttpContext);

                // Download the report
                return printStrategy.DownloadPrintedReport(exportId, reportData, reportId);
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
                this.m_logManager.LogFunctionEnd("DownloadPrintedReport", logToken);
            }
        }

        /// <summary>
        /// This function returns the progress of a download operation by reading the
        /// data from the session variable.
        /// </summary>
        /// <param name="exportId">
        /// The Id of the export returned by the StartExport function.
        /// </param>
        /// <param name="reportId">
        /// Id of the report to print.
        /// </param>
        /// <returns>
        /// Json containing the current progress.
        /// </returns>
        [HttpGet]
        public JsonResult GetPrintProgress(string exportId, int reportId)
        {
            // Write an initial log
            long logToken = this.m_logManager.LogFunctionStart(this.HttpContext, "DownloadPrintedReport");
            try
            {
                // Get the report to print
                ReportData reportData = resources.GetReportData(reportId, User.Identity.Name, HttpContext);

                // Get the current progress
                PowerBIReport.ExportData data = PowerBIReport.GetPrintProgress(exportId, reportData);

                // Return the data as JSON
                return Json(data);
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
                this.m_logManager.LogFunctionEnd("ResetFilter", logToken);
            }
        }

        /// <summary>
        /// Get print options
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public JsonResult GetPrintStrategies()
        {            // Write an initial log
            long logToken = this.m_logManager.LogFunctionStart(this.HttpContext, "GetPrintStrategies");
            try
            {
                var PrintStrategyDictionary = new Dictionary<string, object>();

                foreach (PrintStrategy printStrategy in PrintStrategy.AvailableStrategies.Values)
                {
                    PrintStrategyDictionary.Add(printStrategy.Name, new { name = printStrategy.Name });
                }

                return Json(PrintStrategyDictionary);
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
                this.m_logManager.LogFunctionEnd("GetPrintStrategies", logToken);
            }
        }

        /// <summary>
        /// Starts a Power BI export operation to print the current report to a number of different
        /// supported formats.
        /// </summary>
        /// <param name="config">
        /// The export configuration to use, passed as JSON
        /// </param>
        /// <returns>
        /// Result contains the export Id and any error message.
        /// 

        [HttpPost]
        public JsonResult StartPrint([FromBody] ExportConfig config)
        {
            // Write an initial log
            long logToken = this.m_logManager.LogFunctionStart(this.HttpContext, "StartPrint");
            try
            {
                if (!ModelState.IsValid)
                    return Json(ModelState);
                // Get the print strategy
                PrintStrategy printStrategy = PrintStrategy.AvailableStrategies[config.PrintStrategyName];

                // Get the report to print
                ReportData reportData = resources.GetReportData(config.ReportId, User.Identity.Name, HttpContext);

                // Start the export
                PowerBIReport.ExportData data = printStrategy.StartPrint(reportData, config.ReportState);

                //Return the data as JSON
                return Json(data);
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
                this.m_logManager.LogFunctionEnd("StartPrint", logToken);
            }
        } 
    }
}