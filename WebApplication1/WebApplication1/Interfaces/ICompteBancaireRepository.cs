using  WebApplication1.Models;
using WebApplication1.Shared;


namespace WebApplication1.Interfaces
{
    public interface ICompteBancaireRepository
    {
        ICollection<CompteBancaire> GetComptesBancaire();
        ICollection<CompteBancaire> GetComptesBancaireAstree();
        ICollection<CompteBancaire> GetComptesBancaireReas();
        CompteBancaire GetCompteBancaireById(string id);
        CompteBancaire AjouteCompteBancaireAstree(CompteBancaireAstreeDto compteBancaireAstree);
        CompteBancaire AjouteCompteBancaireReas(CompteBancaireReasDto compteBancaireReas);

        bool SupprimeCompteBancaire(string id);
        CompteBancaire ModifierCompteBancaireAstree(CompteBancaireAstreeDto compteBancaireAstree, string id);
        CompteBancaire ModifierCompteBancaireReas(CompteBancaireReasDto compteBancaireAstree, string id);

        bool CompteBancaireExists(string id);
        bool Save();
        ParametrageAstree GetCompteAstrees(string id);
        Reassureur GetCompteReassureur(string id);
        ICollection<CompteBancaire> GetComptesBancaireByReas(string reasId);


    }
}
