using WebApplication1.Interfaces;
using WebApplication1.Models;

namespace WebApplication1.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationDbContext _context;

        public UserRepository(ApplicationDbContext context)
        {
            this._context = context;
        }

        public bool DeleteAll()
        {
            var users = GetUsers();
            foreach (ApplicationUser user in users)
            {
                _context.ApplicationUsers.Remove(user);

            }
                
            return true;
        }

        public ApplicationUser GetUserByEmail(string email)
        {
            return _context.ApplicationUsers.Where(u => u.Email == email).FirstOrDefault();

        }

        public ApplicationUser GetUserById(string id)
        {
            return _context.ApplicationUsers.Where(u => u.Id == id).FirstOrDefault();

        }

        public ICollection<DemandeTransfert> GetUserDemandeTransferts(string id)
        {
            throw new NotImplementedException();
        }

        public ICollection<ApplicationUser> GetUsers()
        {
            return _context.ApplicationUsers.OrderBy(x => x.Id).ToList();
        }

        public bool UserExists(string id)
        {
            return _context.ApplicationUsers.Any(u => u.Id == id);
        }
        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }
    }
}
