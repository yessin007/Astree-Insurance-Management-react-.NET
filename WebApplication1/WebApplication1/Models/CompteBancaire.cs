using System.Data;

namespace WebApplication1.Models
{
    public class CompteBancaire
    {
        public int Id { get; set; }
        public string? NumeroCompte { get; set; }
        public string? Rib { get; set; }
        public string? Iban { get; set; }
        public string? Banque { get; set; }
        public string? Agence { get; set; }
        public string? Adresse { get; set; }
        public int? isDeleted { get; set; }
        public string? IdReassureur { get; set; }
        public virtual Reassureur? IdReassureurNavigation { get; set; }
    }
}
