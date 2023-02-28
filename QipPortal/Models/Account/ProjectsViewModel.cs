using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QipPortal.Models.Account
{
    public class ProjectsViewModel
    {
        public List<SelectListItem> Projects { set; get; }
        public string ProjectId { get; set; }
        public string ReturnUrl { get; set; }
    }
}
