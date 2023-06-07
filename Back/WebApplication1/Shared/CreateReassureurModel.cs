using System.ComponentModel.DataAnnotations;
using WebApplication1.Models;

namespace WebApplication1.Shared
{
    public class CreateReassureurModel
    {

        [Required]
        public string Email { get; set; }

        [Required]
        public string Nationalite { get; set; }

        [Required]
        public string Adresse { get; set; }

        [Required]
        public string paysTransfer { get; set; }

        [Required]
        public string CodeSwift { get; set; }

        [Required]
        public string CodeBic { get; set; }
        [Required]
        public string MotPasse { get; set; }
        [Required]
        public string Role { get; set; }



    }
}
