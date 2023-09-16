using WebApplication1.Models;
using WebApplication1.Shared;

namespace WebApplication1.Interfaces
{
    public interface IDemandeTransfertRepository
    {
        public double getSommeFac();
        public double getSommeConv();

        public int nombreDT();
        ICollection<DemandeTransfertGetModel> GetDemandesTransfert();
        DemandeTransfertGetModel GetDemandeTransfertById(string id);

        public DemandeTransfertGetModel GetDemandeTransfertByUserId(string UserId);
        Demande GetDemandeTransfertByLibelle(string liblle);
        DemandeTransfert AjouteDemandeTransfert(DemandesTransfertPostModel demandeTransfert);
        bool SupprimeDemandeTransfer(string id);
        DemandeTransfert ModifierDemandeTransfert(DemandesTransfertPostModel demandeTransfert, string id);
        DemandeTransfert ModifierEtat(string etat, string id);

        bool DemandeTransfertExists(string id);
        bool Save();

        ICollection<DemandeTransfert> GetUserDemande(string userid);
        ICollection<DemandeTransfert> GetReassureurDemande(string id);


        ICollection<DemandeTransfert> GetFacs();
        ICollection<DemandeTransfert> GetConvs();

        FacModelGet GetFacByID(string id);
        ConvModelGet GetConvsByID(string id);







    }
}
