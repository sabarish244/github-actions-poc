//--------------------------------------------------------------------------------
//    This file is copyright Expleo 2021.
//--------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QipPortal.Models
{
    public class MenuItem
    {
        public int ProjectId { get; set; }
        public string ProjectName { get; set; }
        public string ResourceName { get; set; }

        public int ResourceId { get; set; }
        public string ResourceType { get; set; }

        public int IsFavourite { get; set; }

        /* **************************************************************** */
        #region Construction and Finalization

        /// <summary>
        /// Construct the class.
        /// </summary>
        /// <param name="categories">
        /// The list of categories as strings with each one separated by the category separator.
        /// </param>
        /// <param name="name">
        /// The name of the menu item.
        /// </param>
        /// <param name="resourceId">
        /// The Id of the report or the app if this is a leaf node.
        /// </param>
        public MenuItem(string categories, string name, int resourceId)
            : this(categories, name, resourceId, null)
        {
        }

        /// <summary>
        /// Construct the class.
        /// </summary>
        /// <param name="categories">
        /// The list of categories as strings with each one separated by the category separator.
        /// </param>
        /// <param name="name">
        /// The name of the menu item.
        /// </param>
        /// <param name="resourceId">
        /// The Id of the report or the app if this is a leaf node.
        /// </param>
        /// <param name="resourceType">
        /// The type of resource, app or report.
        /// </param>
        public MenuItem(string categories, string name, int resourceId, string resourceType)
            : this(categories, false, name, resourceId, resourceType)
        {
        }

        /// <summary>
        /// Construct the class.
        /// </summary>
        /// <param name="categories">
        /// The list of categories as strings with each one separated by the category separator.
        /// </param>
        /// <param name="isFavourite">
        /// True to set this as a favourite.
        /// </param>
        /// <param name="name">
        /// The name of the menu item.
        /// </param>
        /// <param name="resourceId">
        /// The Id of the report or the app if this is a leaf node.
        /// </param>
        /// <param name="resourceType">
        /// The type of resource, app or report.
        /// </param>
        public MenuItem(string categories, bool isFavourite, string name, int resourceId, string resourceType)
        {
            // Save arguments in member variables
            this.IsFavourite = (isFavourite) ? 1 : 0;
            this.ProjectName = categories;
            this.ResourceName = name;
            this.ResourceId = resourceId;
            this.ResourceType = resourceType;
        }

        public MenuItem()
        {

        }

        #endregion
    }

    public class ClientMenuItem
    {
        /* **************************************************************** */
        #region Constants

        /// <summary>
        /// The string used to define a report in the resource type.
        /// </summary>
        public const string PowerBIReportName = "Power BI Report";

        #endregion

        /// <summary>
        /// The child menu item or null if this is a category.
        /// </summary>
        public List<ClientMenuItem> Children { get; set; }

        /// <summary>
        /// True if this is a report node.
        /// </summary>
        public bool IsReport { get; set; }

        /// <summary>
        /// The name of the menu item.
        /// </summary>
        public string Name { get; set; }

        public int ProjectId { get; set; }

        public int ResourceId { get; set; }

        public int IsFavourite { get; set; }

        /* **************************************************************** */
        #region Construction and Finalization

        /// <summary>
        /// Constructor is used to create a branch node.
        /// </summary>
        /// <param name="name">
        /// The name of the menu item.
        /// </param>
        public ClientMenuItem(string name)
        {
            // Save arguments in member variables
            this.Name = name;

            // Create the arry of children
            this.Children = new List<ClientMenuItem>();
        }

        /// <summary>
        /// Constructor is used to create a branch node.
        /// </summary>
        /// <param name="name">
        /// The name of the menu item.
        /// </param>
        public ClientMenuItem(string name,int ProjectId)
            : this(name)
        {
            // Save arguments in member variables 
            this.ProjectId= ProjectId;
            // Create the arry of children
            this.Children = new List<ClientMenuItem>();
        }


        /// <summary>
        /// Constructor is used to create a leaf node.
        /// </summary>
        /// <param name="name">
        /// The name of the menu item.
        /// </param>
        /// <param name="resourceId">
        /// The Id of the report or the app if this is a leaf node.
        /// </param>
        /// <param name="resourceType">
        /// The type of the resource.
        /// </param>
        public ClientMenuItem(string name, int resourceId, string resourceType)
            : this(name)
        {
            // Save arguments in member variables
            this.ResourceId = resourceId;

            // Check to see if this is a report and set the flag accordingly
            this.IsReport = (resourceType == PowerBIReportName);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="name"></param>
        /// <param name="ProjectId"></param>
        /// <param name="IsFavourite"></param>

        public ClientMenuItem(string name, int resourceId, string resourceType, int IsFavourite)
: this(name)
        {
            // Save arguments in member variables
            this.ResourceId = resourceId;
            this.IsReport = (resourceType == PowerBIReportName);
            // Save arguments in member variables 
            this.IsFavourite = IsFavourite;
            // Create the arry of children
            this.Children = new List<ClientMenuItem>();
        }
        #endregion

        /* **************************************************************** */
        #region Operations

        /// <summary>
        /// Determines if this menu item already contains a child with the
        /// specified name.
        /// </summary>
        /// <param name="name">
        /// The name of the child.
        /// </param>
        /// <returns>
        /// Valid if there is a match or null if there is not.
        /// </returns>
        public ClientMenuItem ContainsChild(string name)
        {
            // Returns
            ClientMenuItem ret = null;

            // Check each child in turn
            foreach (ClientMenuItem child in this.Children)
            {
                // If there is a match quit out
                if (string.Compare(child.Name, name, true) == 0)
                {
                    ret = child;
                    break;
                }
            }

            return ret;
        }

        #endregion
    }
}
