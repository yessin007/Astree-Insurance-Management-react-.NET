namespace WebApplication1.Models
{
    public class DetailTransfert
    {
       /* public DetailTransfert(string? code, string? nationalite, string? adresse, string? paysTransfer, string? codeSwift, string? codeBic, string? banc, string? adresseBanc, string? aff_Suivie_Pai, string? ref_Lettre_Reass, string? ref_Lettre_Bt, double? montantDt, double? montantDev, string? virementEn, string? refBancAstree, string? motif, string? motifDev)
        {
            Code = code;
            Nationalite = nationalite;
            Adresse = adresse;
            PaysTransfer = paysTransfer;
            CodeSwift = codeSwift;
            CodeBic = codeBic;
            Banc = banc;
            AdresseBanc = adresseBanc;
            Aff_Suivie_Pai = aff_Suivie_Pai;
            Ref_Lettre_Reass = ref_Lettre_Reass;
            Ref_Lettre_Bt = ref_Lettre_Bt;
            MontantDt = montantDt;
            MontantDev = montantDev;
            VirementEn = virementEn;
            RefBancAstree = refBancAstree;
            Motif = motif;
            MotifDev = motifDev;
        }*/
        public string Id { get; set; }
        public string? Code { get; set; }
        public string? Nationalite { get; set; }
        public string? Adresse { get; set; }
        public string? PaysTransfer { get; set; }
        public string? CodeSwift { get; set; }
        public string? CodeBic { get; set; }
        public string? Banc { get; set; }
        public string? AdresseBanc { get; set; }
        public string? Aff_Suivie_Pai { get; set; }
        public string? Ref_Lettre_Reass { get; set; }
        public string? Ref_Lettre_Bt{ get; set; }
        public double? MontantDt { get; set; }
        public double? MontantDev { get; set; }
        public string? VirementEn{ get; set; }
        public string? RefBancAstree { get; set; }
        public string? Motif { get;set; }
        public string? MotifDev { get; set; }

    }
}
