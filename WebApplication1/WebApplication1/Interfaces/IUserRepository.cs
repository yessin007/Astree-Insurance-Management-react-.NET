using WebApplication1.Models;
using WebApplication1.Shared;

namespace WebApplication1.Interfaces
{
    public interface IUserRepository
    {
        ICollection<ApplicationUser> GetUsers();
        ApplicationUser GetUserById(string id);
        ApplicationUser GetUserByEmail(string email);
        ICollection<DemandeTransfert> GetUserDemandeTransferts(string id);
        bool UserExists(string id);
        bool DeleteAll();
        bool Save();

    }
}
