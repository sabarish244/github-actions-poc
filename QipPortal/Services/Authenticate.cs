using Newtonsoft.Json;
using QipPortal.Models.PowerBi;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace QipPortal.Services
{
    /// <summary>
    /// Class used to delegate authentication for Power BI embedding
    /// </summary>
    public static class Authenticate
    {
        /// <summary>
        /// Used to delegate authentication for Power BI embedding
        /// </summary>
        /// <param name="reportData">Data to configure Power BI report</param>
        /// <returns>OAuthResult</returns>
        public static async Task<OAuthResult> AuthenticateAsync(ReportData reportData)
        {
            var oauthEndpoint = new Uri(reportData.AuthorityUrl);

            using (var client = new HttpClient())
            {
                var result = await client.PostAsync(oauthEndpoint, new FormUrlEncodedContent(new[]{
                    new KeyValuePair<string, string>("resource", reportData.ResourceUrl),
                    new KeyValuePair<string, string>("client_id", reportData.ClientId),
                    new KeyValuePair<string, string>("grant_type", "password"),
                    new KeyValuePair<string, string>("username", reportData.Username),
                    new KeyValuePair<string, string>("password", reportData.Password),
                    new KeyValuePair<string, string>("scope", "openid"),
                }));

                var content = await result.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<OAuthResult>(content);
            }
        }
    }
}
