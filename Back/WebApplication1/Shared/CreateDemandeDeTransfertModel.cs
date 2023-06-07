using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Shared
{
    public class CreateDemandeDeTransfertModel
    {
        [Required]
        public string Reassureur { get; set; }

        [Required]
        public int CompteReassureur { get; set; }

        [Required]
        public string Libelle { get; set; }

        [Required]
        public string Montant { get; set; }

        [Required]
        public string Devis { get; set; }

        [Required]
        public int CompteAstree { get; set; }

        [Required]
        public string Nature { get; set; }

        [Required]
        public string Obs { get; set; }
        [Required]
        public string Virement { get; set; }
        [Required]
        public string Date { get; set; }

    }
}
