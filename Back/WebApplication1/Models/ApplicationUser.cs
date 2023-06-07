using Microsoft.AspNetCore.Identity;

namespace WebApplication1.Models
{
    public partial class ApplicationUser : IdentityUser
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public int? isDeleted { get; set; }



    }
}
