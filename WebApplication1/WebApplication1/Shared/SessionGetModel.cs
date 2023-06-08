using System.ComponentModel.DataAnnotations;
using WebApplication1.Models;

namespace WebApplication1.Shared
{
    public class SessionGetModel
    {
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
        public DemandeTransfertGetModel DemandeTransfert { get; set; }

    }
}
