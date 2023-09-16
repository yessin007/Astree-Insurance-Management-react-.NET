using WebApplication1.Models;
using WebApplication1.Shared;


namespace WebApplication1.Interfaces
{
    public interface IReassureurRepository
    {
        ICollection<Reassureur> GetReassureurs();
        Reassureur GetReassureurById(string id);
        Reassureur AjouteReassureurAsync(ReassureurDto reassureur);
        bool SupprimeReassureur(string id);
        Reassureur ModifierReassureur(ReassureurDto reassureur, string id);
        bool ReassureurExists(string id);
        ICollection<GetReassureurCompteModel> getCompteReas();
        bool Save();
    }
}
