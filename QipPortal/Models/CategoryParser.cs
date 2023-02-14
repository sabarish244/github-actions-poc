//--------------------------------------------------------------------------------------------------
//       This file is copyright Expleo 2021.
//--------------------------------------------------------------------------------------------------
using System.Collections.Generic;

namespace QipPortal.Models
{
    /// <summary>
    /// This class contains code to parse database menu items containing
    /// multi-category strings and turn them into a tree structure.
    /// </summary>
    public class CategoryParser
    {
        /* **************************************************************** */
        #region Class Member Definition

        /* **************************************************************** */
        #region Member Variables

        /// <summary>
        /// The token used to separate categories.
        /// </summary>
        public static char[] CategorySeparator;

        /// <summary>
        /// The name of the root menu item.
        /// </summary>
        public static string RootName;

        #endregion

        #endregion

        /* **************************************************************** */
        #region Construction and Finalization

        /// <summary>
        /// Initialise all static members.
        /// </summary>
        static CategoryParser()
        {
            CategorySeparator = new char[] { '/' };

            // The root name should be loaded from the string table or some other means
            RootName = "X Platform Menu";
        }

        #endregion

        /* **************************************************************** */
        #region Operations

        /// <summary>
        /// Turn the set of database menu items into a tree structure using the ClientMenuItem
        /// class.
        /// </summary>
        /// <param name="isFavourite">
        /// True to build a favourites only menu.
        /// </param>
        /// <param name="filterName">
        /// Only add menu items whose resource type matches this filter name.
        /// </param>
        /// <param name="menuItems">
        /// The set of database menu items each one with its own category.
        /// </param>
        /// <returns>
        /// The root of the tree structure.
        /// </returns>
        public ClientMenuItem CreateMenuStructure(string filterName, List<MenuItem> menuItems)
        {
            // Create the root node
            ClientMenuItem objReturnMenu = new ClientMenuItem(RootName);

            // Create an item for each database menu
            foreach (MenuItem menuItem in menuItems)
            {
                // Only continue if this matches the favourite or filter
                if(((menuItem.IsFavourite >= 0)) && ((menuItem.ResourceType == filterName)))
                {
 
                    this.ParseSingleResource(menuItem.ProjectId, menuItem.IsFavourite, menuItem.ProjectName, objReturnMenu, menuItem.ResourceId, menuItem.ResourceName, menuItem.ResourceType);
                }
                else if (((menuItem.IsFavourite > 0)) && ((filterName == null)))
                { 
                    this.ParseSingleResource(menuItem.ProjectId, menuItem.IsFavourite, menuItem.ProjectName, objReturnMenu, menuItem.ResourceId, menuItem.ResourceName, menuItem.ResourceType);
                }
            }

            return objReturnMenu;
        }

        /// <summary>
        /// Add a single resource to the menu at the correct level dictated by the category
        /// string.
        /// </summary>
        /// <param name="categories">
        /// The list of categories as strings with each one separated by the category separator.
        /// </param>
        /// <param name="rootMenuItem">
        /// The root menu item.
        /// </param>
        /// <param name="resourceId">
        /// The Id of the resource (app or report).
        /// </param>
        /// <param name="resourceName">
        /// The name of the resource (app or report).
        /// </param>
        /// <param name="resourceType">
        /// The type of the resource.
        /// </param>
        public void ParseSingleResource(int ProjectId, int IsFavourite, string categories, ClientMenuItem rootMenuItem, int resourceId, string resourceName, string resourceType = null)
        {
            // This holds the parent menu item while the categories are being added
            ClientMenuItem parent = rootMenuItem;

            // Only parse categories if the string is valid
            if (!string.IsNullOrWhiteSpace(categories))
            {
                // Split the category string into single categories
                string[] categoryEntries = categories.Split(CategorySeparator);

                // Add a menu item for each one in turn
                foreach (string categoryEntry in categoryEntries)
                {
                    // Only create a new menu item if one is not already there
                    ClientMenuItem existingCategory = parent.ContainsChild(categoryEntry);

                    // If there isn't an existing category then create a new one
                    if (existingCategory == null)
                    {
                        // Create a new branch menu item
                        existingCategory = new ClientMenuItem(categoryEntry, ProjectId);

                        // Add it under the parent
                        parent.Children.Add(existingCategory);
                    }

                    // Set the new parent for the next iteration of the loop
                    parent = existingCategory;
                }
            }

            // Now that the categories have been added create the leaf node
            ClientMenuItem leafNode = new ClientMenuItem(resourceName, resourceId, resourceType, IsFavourite);

            // Add it as a child
            parent.Children.Add(leafNode);
        }

        #endregion
    }
}
