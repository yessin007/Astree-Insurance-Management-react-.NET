using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Shared
{
    public class Demande
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string ReassureurName { get; set; }
        [DataType(DataType.Date)]
        public DateTime date { get; set; }
        public string Libelle { get; set; }
        public double Somme { get; set; }
        public string Iban { get; set; }
        public string NumeroCompte { get; set; }
        public string CodeSwift { get; set; }
        public string CodeBic { get; set; }
        public string Bank { get; set;}

    }
}
