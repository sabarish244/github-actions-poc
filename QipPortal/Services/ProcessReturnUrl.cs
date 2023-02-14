using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QipPortal.Services
{
    public static class ProcessReturnUrl
    {
        private const string returnURLSessionKey = "returnUrlValue";
        private static string[] validControllers = { "account", "home", "reports", "surveys" };

        /// <summary>
        /// Saves Return URL value into HTTP Context Session
        /// </summary>
        /// <param name="url">Value of return URL</param>
        /// <returns>Boolean to show if URL was valid and saved to session</returns>
        internal static bool SetReturnURLToSessionValue(HttpContext context, string url)
        {
            if (!string.IsNullOrWhiteSpace(url) && url.Length < 200)
            {
                context.Session.SetString(returnURLSessionKey, url);

                //Successfully saved string to session
                return true;
            }

            // No value saved - Url null, empty, whitespace, or too long (200)
            return false;
        }

        /// <summary>
        /// Gets Return URL value from HTTP Context Session
        /// </summary>
        /// <returns>Value of Return URL in Http Context Session</returns>
        internal static string GetReturnURLFromSessionValue(HttpContext context)
        {
            var sessonValue = context.Session.GetString(returnURLSessionKey);

            return sessonValue;
        }

        /// <summary>
        /// Removes Return URL value from HTTP Context Session
        /// </summary>
        internal static void RemoveReturnURLFromSessionValue(HttpContext context)
        {
            context.Session.Remove(returnURLSessionKey);
        }

        /// <summary>
        /// Processes URL string from either Session or passed from ReturnURL value on page
        /// </summary>
        /// <param name="context">value stored in HTTPContext.Session</param>
        /// <param name="url">value from returnURL or manual</param>
        /// <returns>Validated URL structured for Controller routing</returns>
        internal static string GetValidReturnUrl(HttpContext context, string url)
        {
            string sessionValue;
            string urlToProcess;

            if (string.IsNullOrWhiteSpace(url))
            {
                sessionValue = GetReturnURLFromSessionValue(context);

                if (string.IsNullOrWhiteSpace(sessionValue))
                {
                    return null;
                }
                else
                {
                    urlToProcess = sessionValue;
                }
            }
            else
            {
                urlToProcess = url;
            }
            
            //Split Return URL string on "/" character to get components
            var UrlComponents = urlToProcess.Trim().ToLowerInvariant().Split('/');
            
            string controllerFound = string.Empty;


            for (int i = 0; i < UrlComponents.Length; i++)
            {
                // Are any controllers present in the string
                // Find first one and begin to build return URL

                if (validControllers.Contains(UrlComponents[i]))
                {
                    //Reports handling - needs additional formatting and validation
                    if (UrlComponents[i].Equals("reports"))
                    {
                        //Does valid Project ID exist 
                        if (int.TryParse(UrlComponents[i + 2], out var projectId))
                        {
                            //return validated Reports URL
                            return "/"+UrlComponents[i] + "/index/" + UrlComponents[i + 2];
                        }   
                    }
                    else
                    {
                        // 
                        controllerFound = UrlComponents[i];
                    }

                    // Found first/only controller in Return URL, stop loop
                    break;
                }
            }            

            if (string.IsNullOrEmpty(controllerFound))
            {
                // No valid controllers found
                // Return null to return to home page via Account Controller logic
                return null;
            }

            //Else return formatted controller URL
            return "/"+urlToProcess+"/";
        }
    }
}
