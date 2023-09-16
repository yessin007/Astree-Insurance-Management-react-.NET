﻿namespace WebApplication1.Models
{
    public class Reassureur
    {
        public string ReassureurId { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Telephone { get; set; }
        public string? Nom { get; set; }
        public string? Code { get; set; }
        public string? Nationalite { get; set; }
        public string? Adresse { get; set; }
        public string? PaysTransfer { get; set; }
        public string? CodeSwift { get; set;}
        public string? codeBic { get; set; }
        public ICollection<CompteBancaire> CompteBancaires { get; set; }    
        public ICollection<DemandeTransfert> DemandeTransferts { get; set; }






    }
}