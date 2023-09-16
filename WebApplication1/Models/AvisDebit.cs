using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class AvisDebit
    {
     /*  public AvisDebit(string id, string code, string reassureurName, string lib_Reglement, double montant, string reagtAccept, string obs, DateTime exercice,string compteBancaire)
        {
            Id = id;
            Code = code;
            ReassureurName = reassureurName;
            Lib_Reglement = lib_Reglement;
            Montant = montant;
            ReagtAccept = reagtAccept;
            Obs = obs;
            Exercice = exercice;
            CompteBancaire = compteBancaire;
        }*/

        public string Id { get; set; }
        public string Code { get; set; }
        public string ReassureurName { get; set; }
        public string Lib_Reglement { get; set; }
        public double Montant { get; set; }
        public string ReagtAccept { get; set; }
        public string Obs { get; set; }
        [DataType(DataType.Date)]
        public DateTime Exercice { get; set; }
        public string CompteBancaire { get; set; }

    }
}
