using System;
using System.Collections.Generic;

namespace QipPortal.Models.DB
{
    public partial class SurveyTypes
    {
        public SurveyTypes()
        {
            Surveys = new HashSet<Surveys>();
        }

        public int SurveyTypeId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string FontAwesomeIcon { get; set; }
        public string Url { get; set; }

        public virtual ICollection<Surveys> Surveys { get; set; }
    }
}
