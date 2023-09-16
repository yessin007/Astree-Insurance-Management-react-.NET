using WebApplication1.Models;
using WebApplication1.Shared;

namespace WebApplication1.Interfaces
{
    public interface IAvisDebitRepository
    {
        ICollection<AvisDebit> GetAll();
        AvisDebit GetAvisDebit(string id);
        bool SupprimerAvisDebit(string id);
        AvisDebit ModifierAvisDebit(AvisDebit avisDebit);
        bool AvisDebitExists(string id);
        bool Save();
    }
}
