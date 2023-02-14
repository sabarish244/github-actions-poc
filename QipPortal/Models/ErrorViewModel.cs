using System;

namespace QipPortal.Models
{
    /// <summary>
    /// Class for handling of custom errors 
    /// </summary>
    public class ErrorViewModel
    {
        public string RequestId { get; set; }
        public string UserDescription { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }
}