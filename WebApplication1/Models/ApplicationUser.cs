using Microsoft.AspNetCore.Identity;

namespace WebApplication1.Models
{
    public partial class ApplicationUser : IdentityUser
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
       // public string? ReassureurId { get; set; }
        public ICollection<DemandeTransfert> DemandeTransferts { get; set; }
        public virtual ICollection<UserConnection>? UserConnections { get; set; }    


    }
}
