using WebApplication1.Models;

namespace WebApplication1.Shared
{
    public class CompteBancaireAstreeDto
    {
        public string RIB { get; set; }
        public string IBAN { get; set; }
        public string Banque { get; set; }
        public string Agence { get; set; }
        public string Adresse { get; set; }
        //public string ParametrageAstreeId { get; set; }
        public string NumeroCompte { get; set; }
        //public ParametrageAstreeDto ParametrageAstree { get; set; }
    }
}
