namespace WebApplication1.Models
{
    public class Reassureur
    {
        public Reassureur()
        {

            CompteBancaires = new HashSet<CompteBancaire>();
        }
        public int Id { get; set; }
        public string? Email { get; set; }
        public string? Nationalite { get; set; }
        public string? Adresse { get; set; }
        public string? paysTransfer { get; set; }
        public string? CodeSwift { get; set; }
        public string? CodeBic { get; set; }
        public string? MotPasse { get; set; }
        public string? Role { get; set; }
        public int? isDeleted { get; set; }
        public string? Nom { get; set; }
        public string? Prenom { get; set; }
        public int? Telephone { get; set; }
        public virtual ICollection<CompteBancaire>? CompteBancaires { get; set; }
    }
}
