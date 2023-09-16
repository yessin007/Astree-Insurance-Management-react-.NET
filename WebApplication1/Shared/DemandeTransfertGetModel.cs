using System.ComponentModel.DataAnnotations;
using WebApplication1.Models;

namespace WebApplication1.Shared
{
    public class DemandeTransfertGetModel
    {
        public string Id { get; set; }
        [DataType(DataType.Date)]
        public DateTime date { get; set; }
        public string Nature { get; set; }
        public string Type { get; set; }
        public string Libelle { get; set; }
        public string Certificat { get; set; }
        public string typeMontant { get; set; }
        public double Montant { get; set; }
        public string Etat { get; set; }
        public string timeStamp;
        public string? UserName { get; set; }
        public string? ReassureurName { get; set; }
        public string IBAN { get; set; }
        public string NumeroCompte { get; set; }

        public string Banque { get; set; }

        public string CodeSwift { get; set; }

        public string codeBic { get; set; }

        public string Code { get; set; }

        public string UserLName { get; set; }
        public string adresse { get; set; }

        


    }
}
