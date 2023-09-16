using AutoMapper;
using WebApplication1.Shared;
using WebApplication1.Models;

namespace WebApplication1.Helper
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            /*****************User**************************/
            CreateMap<ApplicationUser, UserDto>();
            CreateMap<UserDto, ApplicationUser>();
            /*****************Reassureur**************************/
            CreateMap<Reassureur, ReassureurDto>();
            CreateMap<ReassureurDto, Reassureur>();
            CreateMap<Reassureur, GetReassureurModel>();
            CreateMap<GetReassureurModel, Reassureur>();
            /*****************Astreee**************************/
            CreateMap<ParametrageAstreeDto, ParametrageAstree>();
            CreateMap<ParametrageAstree, ParametrageAstreeDto>();
            /*****************Compte Bancaire Astree**************************/
            CreateMap<CompteBancaire, CompteBancaireAstreeDto>();
            CreateMap<CompteBancaireAstreeDto, CompteBancaire>();
            /*****************Compte Bancaire Reas**************************/
            CreateMap<CompteBancaire, CompteBancaireReasDto>();
            CreateMap<CompteBancaireReasDto, CompteBancaire>();
            /*****************Demande Transfert**************************/
            CreateMap<DemandesTransfertPostModel, DemandeTransfert>();
            CreateMap<DemandeTransfert, DemandesTransfertPostModel>();
            CreateMap<DemandeTransfert, DemandeTransfertGetModel>();
            CreateMap<DemandeTransfertGetModel, DemandeTransfert>();
            /*****************Fac**************************/
            CreateMap<FacModelGet, SessionReassureur>();
            CreateMap<SessionReassureur, FacModelGet>();
            CreateMap<FacModelPost, SessionReassureur>();
            CreateMap<SessionReassureur, FacModelPost>();
            CreateMap<FacModelGet, FacModelPost>();
            CreateMap<FacModelPost, FacModelGet>();
            /*****************Conv**************************/
            CreateMap<ConvModelGet, SessionReassureur>();
            CreateMap<SessionReassureur, ConvModelGet>();
            CreateMap<ConvModelPost, SessionReassureur>();
            CreateMap<SessionReassureur, ConvModelPost>();
            CreateMap<ConvModelGet,ConvModelPost>();
            CreateMap<ConvModelPost, ConvModelGet>();
            /*****************Session**************************/
            CreateMap<SessionGetModel, SessionReassureur>();
            CreateMap<SessionReassureur, SessionGetModel>();

        }
    }
}
