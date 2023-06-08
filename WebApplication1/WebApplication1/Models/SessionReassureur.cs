using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class SessionReassureur
    {
        public SessionReassureur()
        {
            this.Code = "";
            this.Effet = "";
            this.Risque = "";
            this.Reference = "";
            this.Commission = "";
            this.Aed = "";
            this.Sinistre = "";
            this.RrcConstitue = "";
            this.RssConstitue = "";
            this.PB = "";
            this.Solde = 0;
            this.Num = 0;
            this.Taux = 0;
            this.Monnay = 0;
            this.RefTransfert = "";
            this.Devise = "";
            this.Exercice = DateTime.Now;
            this.DateAuDebit = DateTime.Now;
            this.Recours = "";
        }
        public string Id { get; set; }
        public string Reference { get; set; }
        public string Code { get; set; }
        public string Effet { get; set; }
        public string Risque { get; set; }
        [DataType(DataType.Date)]
        public DateTime Exercice { get; set; }
        public string Recours { get; set; }
        public string Commission { get; set; }
        public string Sinistre { get; set; }
        public string RrcConstitue { get; set; }
        public string RssConstitue { get; set; }
        public string PB { get; set; }
        public string Aed { get; set; }
        public double Solde { get; set; }
        [DataType(DataType.Date)]
        public DateTime DateAuDebit { get; set; }
        public double Num { get; set; }
        public double Taux { get; set; }
        public double Monnay { get; set; }
        public string RefTransfert { get; set; }
        public string Devise { get; set; }
        public string? Assure { get; set; }
        public int? Bordereau { get; set; }
        public string? PrimesCode { get; set; }
        public string? Rrcli { get; set; }
        public string? Rsslib { get; set; }
        public string? Intere { get; set; }
        public string TypeTraite { get; set; }
        public string DemandeTransfertId { get; set; }
        public DemandeTransfert DemandeTransfert { get; set; }
    }
}
