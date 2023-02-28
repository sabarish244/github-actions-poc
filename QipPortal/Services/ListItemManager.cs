using Microsoft.AspNetCore.Mvc.Rendering;
using QipPortal.Models;
using System.Collections.Generic;

namespace QipPortal.Services
{
    public class ListItemManager
    {
        public List<SelectListItem> GetProjects(List<PermittedProject> list, string emptyValue)
        {
            List<SelectListItem> selectListItems = new List<SelectListItem>();
            SelectListItem selectListItem;

            //add blank option for select list
            selectListItem = new SelectListItem
            {
                Text = string.Format("--Select {0}--", emptyValue),
                Value = string.Empty
            };
            selectListItem.Selected = true;
            selectListItems.Add(selectListItem);

            for (int i = 0; i < list.Count; i++)
            {
                selectListItem = new SelectListItem
                {
                    Text = list[i].OrganisationProject,
                    Value = list[i].ProjectId.ToString()
                };
                selectListItems.Add(selectListItem);
            }

            return selectListItems;
        }
    }
}
