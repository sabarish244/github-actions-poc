   //--------------------------------------------------------------------------------
   //    This file is copyright Expleo 2021.
   //--------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QipPortal.Models.DB
{
    public class ComplianceLog
    {
        public int ComplianceId { get; set; }
        public int ProjectID { get; set; }
        public int UserID { get; set; }
        public DateTime? CreateDateTime { get; set; }
        public string ComplianceMessage { get; set; }



        public virtual Projects Projects { get; set; }
        public virtual Users Users { get; set; }


    }
}
