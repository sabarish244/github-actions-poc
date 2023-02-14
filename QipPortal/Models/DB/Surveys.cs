using System;
using System.Collections.Generic;

namespace QipPortal.Models.DB
{
    public partial class Surveys
    {
        public Guid SurveyId { get; set; }
        public int SurveyTypeId { get; set; }
        public int ResourceId { get; set; }

        public virtual Resources Resource { get; set; }
        public virtual SurveyTypes SurveyType { get; set; }
    }
}
