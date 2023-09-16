using System.ComponentModel.DataAnnotations;
using WebApplication1.Models;

namespace WebApplication1.Shared
{
    public class DemandesTransfertPostModel
    {
        [DataType(DataType.Date)]
        public DateTime date { get; set; }
        public string Nature { get; set; }
        public string Type { get; set; }
        public string Libelle { get; set; }
        public string Certificat { get; set; }
        public string typeMontant { get; set; }
        public double Montant { get; set; }
        public string Etat { get; set; }
        public string timeStamp = GetTimestamp(DateTime.Now);
        public string UserId { get; set; }
        public string CompteBancaireId { get; set; }
        public string ReassureurId { get; set; }
        public static String GetTimestamp(DateTime value)
        {
            return value.ToString("yyyy/MM/dd/HH:mm:ss:ffff");
        }
    }
}
