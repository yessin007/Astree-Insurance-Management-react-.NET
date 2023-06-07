namespace WebApplication1.Models
{
    public class DemandeTransfert
    {
        public int Id { get; set; }
        public string? Libelle { get; set; }
        public string? Montant { get; set; }
        public string? Devis { get; set; }
        public string? Nature { get; set; }
        public string? Obs { get; set; }
        public string? Virement { get; set; }
        public string? Date { get; set; }
        public string? IdReassureur { get; set; }
        public virtual ApplicationUser? IdReassureurNavigation { get; set; }
        public int? IdCompteReassureur { get; set; }
        public virtual CompteBancaire? IdCompteReassureurNavigation { get; set; }
        public int? IdCompteAstree { get; set; }
        public virtual CompteBancaire? IdCompteAstreeNavigation { get; set; }
    }
}
