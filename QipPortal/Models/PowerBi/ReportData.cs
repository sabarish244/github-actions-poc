namespace QipPortal.Models.PowerBi
{
    /// <summary>
    /// Data for embedding of Power BI report
    /// </summary>
    public class ReportData
    {
        public string Username { get; set; } = "T-GLB-PowerBIPremium@expleogroup.com";
        public string Password { get; set; } = "hHyYuU67*-4eE+az";
        public string AuthorityUrl { get; set; } = "https://login.windows.net/common/oauth2/token/";
        public string ResourceUrl { get; set; } = "https://analysis.windows.net/powerbi/api";
        public string ClientId { get; set; }
        public string ApiUrl { get; set; } = "https://api.powerbi.com/";
        public string GroupId { get; set; }
        public string ReportId { get; set; }
        public string RlsUsername { get; set; }
        public string RlsRoles { get; set; }
    }
}
