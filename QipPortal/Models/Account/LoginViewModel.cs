using System.ComponentModel.DataAnnotations;

namespace QipPortal.Models.Account
{
    public class LoginViewModel
    {
        [Required]
       
        public string Username { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Display(Name = "Remember me?")]
        public bool RememberMe { get; set; }
    }
}
