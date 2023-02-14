/* ************************************************************** */
/* Copyright (c) Expleo 2020.
/* ************************************************************** */
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Primitives;

namespace QipPortal.Services
{
    /// <summary>
    /// This class is used to extract filter data from the URL and read or write
    /// it to the session object for ease of passing to PowerBI.
    /// Note that UTF 8 encoding is used to save data in the session.
    /// The class will look for preset reports and filters. Here is an example of the
    /// query string and one or both of the parameters may be provided.
    /// "&Report=31?Filter=Test_x0020_Plans_x0020_List/name eq 'Verso Regression Testing 2019'"
    /// </summary>
    internal static class PowerBiFilter
    {
        /* ************************************************************** */
        #region Class Member Definition

        /* ************************************************************** */
        #region Constants

        /// <summary>
        /// This is the key used to save the filter data in the session object.
        /// </summary>
        internal const string FilterSessionKey = "Filter";

        /// <summary>
        /// This is the key used to save the report data in the session object.
        /// </summary>
        internal const string ReportSessionKey = "Report";

        #endregion

        #endregion

        /* ************************************************************** */
        #region Operations

        /// <summary>
        /// Removes the filter from the session object if it is present.
        /// </summary>
        /// <param name="context">
        /// The HTTP context containing the session.
        /// </param>
        internal static void ClearFilterParameter(HttpContext context)
        {
            // Remove filter from session if present
            context.Session.Remove(FilterSessionKey);
        }

        /// <summary>
        /// This static function reads the filter string from the session object.
        /// Note that it is stored within the session as a UTF8 encoded byte array.
        /// </summary>
        /// <param name="context">
        /// The HTTP context containing the session.
        /// </param>
        /// <returns>
        /// The filter parameter or string empty if not found.
        /// </returns>
        internal static string GetFilterParameter(HttpContext context)
        {
            // Returns
            string ret = string.Empty;

            // Check to see if the session contains data
            byte[] data = new byte[1000];
            if (context.Session.TryGetValue(FilterSessionKey, out data))
            {
                // Convert the bytes back into a string
                ret = System.Text.Encoding.UTF8.GetString(data);
            }

            return ret;
        }

        /// <summary>
        /// Read the report Id from the session object.
        /// </summary>
        /// <param name="context">
        /// The HTTP context.
        /// </param>
        /// <returns>
        /// The Id or null if it isn't available.
        /// </returns>
        internal static int? GetReportParameter(HttpContext context)
        {
            // Check to see if the session contains data
            return context.Session.GetInt32(ReportSessionKey);
        }

        /// <summary>
        /// Attempts to read the filter from the query string and if present will write it into
        /// the session object as a UTF8 encoded byte array.
        /// </summary>
        /// <param name="context">
        /// The HTTP context provides access to both the session and the query string.
        /// </param>
        internal static void SaveFilterParameter(HttpContext context)
        {
            // Check the query string for the filter
            StringValues values = new StringValues();
            if (context.Request.Query.TryGetValue(FilterSessionKey, out values))
            {
                // Convert the string value into a byte array
                byte[] bytes = System.Text.Encoding.UTF8.GetBytes(values[0]);

                // Save the data in the session
                context.Session.Set(FilterSessionKey, bytes);
            }

            // Check the query string for the report Id
            if (context.Request.Query.TryGetValue(ReportSessionKey, out values))
            {
                int reportId = 0;
                if (int.TryParse(values[0], out reportId))
                {
                    context.Session.SetInt32(ReportSessionKey, reportId);
                }
            }
        }

        #endregion
    }
}
