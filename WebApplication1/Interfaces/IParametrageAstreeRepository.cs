using WebApplication1.Models;
using WebApplication1.Shared;

namespace WebApplication1.Interfaces
{
    public interface IParametrageAstreeRepository
    {
        ICollection<ParametrageAstree> GetParametrageAstrees();
        ParametrageAstree GetParametrageAstreeById(string id);
        ParametrageAstree AjouteParametrageAstree(ParametrageAstreeDto parametrageAstree);
        bool SupprimeParametrageAstree(string id);
        ParametrageAstree ModifierParametrageAstree(ParametrageAstreeDto parametrageAstree, string id);
        bool ParametrageAstreeExists(string id);
        bool Save();
        ICollection<CompteBancaire> GetCompteAstrees(string id);
       // ICollection<UserDto> GetUserAstrees(string id);

    }
}
