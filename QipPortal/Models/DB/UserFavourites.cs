using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QipPortal.Models.DB
{
    public class UserFavourites
    {
        public int FavId { get; set; }
        public int ResourceId { get; set; }
        public int UserID { get; set; }  
        public virtual Resources Resources { get; set; }
        public virtual Users Users { get; set; }
    }
}
