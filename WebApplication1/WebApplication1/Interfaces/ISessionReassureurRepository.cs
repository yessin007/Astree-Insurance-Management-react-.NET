using WebApplication1.Models;
using WebApplication1.Shared;

namespace WebApplication1.Interfaces
{
    public interface ISessionReassureurRepository
    {
        ICollection<SessionGetModel> GetSessionReassureurs();
        SessionGetModel GetSessionByID(string id);
        ICollection<FacModelGet> GetFacs();
        ICollection<ConvModelGet> GetConvs();
        FacModelGet GetFacByID(string id);
        ConvModelGet GetConvsByID(string id);
        FacModelGet AjouteFac(FacModelPost fac);
        ConvModelGet AjouteConv(ConvModelPost conv);
        //FacModelPost ModifierFac(FacModelPost fac);
        //ConvModelPost ModifierConv(ConvModelPost conv);
        bool SupprimerSessionReassureur(string id);
        bool SessionReassureursExists(string id);
        bool Save();





    }
}
