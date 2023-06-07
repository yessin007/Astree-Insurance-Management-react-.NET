using WebApplication1.Models;

namespace WebApplication1.Shared
{
    public class GetRoleWithUsers
    {
        public string Id { get; set; }
        public string Name { get; set; }
        
        public IList<ApplicationUser> users { get; set; }
    }
}
