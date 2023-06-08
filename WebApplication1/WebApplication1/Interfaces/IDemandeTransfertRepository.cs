using WebApplication1.Models;
using WebApplication1.Shared;

namespace WebApplication1.Interfaces
{
    public interface IDemandeTransfertRepository
    {
        ICollection<DemandeTransfertGetModel> GetDemandesTransfert();
        DemandeTransfertGetModel GetDemandeTransfertById(string id);
        Demande GetDemandeTransfertByLibelle(string liblle);
        DemandeTransfert AjouteDemandeTransfert(DemandesTransfertPostModel demandeTransfert);
        bool SupprimeDemandeTransfer(string id);
        DemandeTransfert ModifierDemandeTransfert(DemandesTransfertPostModel demandeTransfert, string id);
        DemandeTransfert ModifierEtat(string etat, string id);

        bool DemandeTransfertExists(string id);
        bool Save();

        ICollection<DemandeTransfert> GetUserDemande(string userid);
        ICollection<DemandeTransfert> GetReassureurDemande(string id);





    }
}
