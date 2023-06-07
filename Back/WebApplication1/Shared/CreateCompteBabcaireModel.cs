using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Shared
{
    public class CreateCompteBabcaireModel
    {
        [Required]
        public string NumeroCompte { get; set; }

        [Required]
        public string Rib { get; set; }

        [Required]
        public string Iban { get; set; }

        [Required]
        public string Banque { get; set; }

        [Required]
        public string Agence { get; set; }

        [Required]
        public string Adresse { get; set; }
       
        public string? IdReassureur { get; set; }

    }
}
