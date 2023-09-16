using WebApplication1.Models;

namespace WebApplication1.Shared
{
    public class CompteBancaireReasDto
    {
        //public string Id { get; set; }
        public string NumeroCompte { get; set; }
        public string RIB { get; set; }
        public string IBAN { get; set; }
        public string Banque { get; set; }
        public string Agence { get; set; }
        public string Adresse { get; set; }
        public string ReassureurId { get; set; }
       // public virtual Reassureur? Reassureur { get; set; }
    }
}
