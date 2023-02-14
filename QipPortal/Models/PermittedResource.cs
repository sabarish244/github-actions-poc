using System.Collections.Generic;

namespace QipPortal.Models
{
    /// <summary>
    /// Data for dynamic loading of navigation
    /// </summary>
    public class PermittedResource
    {
        public string Name { get; set; }
        public string Url { get; set; }
        public string Action { get; set; }
        public string RouteId { get; set; }
        public string Controller { get; set; }
        public string Icon { get; set; }
        public string CategoryName { get; set; }
        public string CategoryIcon { get; set; }
        public string CategoryDataLink { get; set; }
    }

    /// <summary>
    /// Collection of Menu Item
    /// </summary>
    public class MenuItemList
    {
        public ClientMenuItem AppTree { get; set; }

        public ClientMenuItem ReportTree { get; set; }

        public ClientMenuItem FavTree { get; set; }
    }

    /// <summary>
    /// Collection of permitted resources
    /// </summary>
    public class PermittedResourceList
    {
        public List<PermittedResource> PermittedResources { get; set; }
    }
}
