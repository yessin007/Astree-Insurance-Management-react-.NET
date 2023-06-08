using MessagePack;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Xml;

namespace WebApplication1.Models
{
    public class CompteBancaire
    {
        public string Id { get; set; }
        public string NumeroCompte { get; set; }
        public string RIB { get;set; }
        public string IBAN { get;set; }
        public string Banque { get;set; }
        public string Agence { get;set;}
        public string Adresse { get;set; }
        //public string? ParametrageAstreeId { get;set; }
        //public ParametrageAstree? ParametrageAstree { get;set; }
        public string? ReassureurId { get;set; }
        public virtual Reassureur? Reassureur { get;set; }
        public string? DemandeTransfertId { get; set; }
        public virtual ICollection<DemandeTransfert>? DemandeTransferts { get; set; }

    }
}
