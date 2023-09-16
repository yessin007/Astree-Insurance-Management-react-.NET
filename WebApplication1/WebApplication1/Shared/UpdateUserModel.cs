using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Shared
{
    public class UpdateUserModel
    {
        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string Telephone { get; set; }
        
        [Required]
        [EmailAddress]
        public string Email { get; set; }





    }
}
