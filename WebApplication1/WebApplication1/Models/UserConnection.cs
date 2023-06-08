using Microsoft.Build.Framework;

namespace WebApplication1.Models
{
    public class UserConnection
    {
         public string Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Message { get; set; }
        public DateTime When { get; set; }
        public string UserId { get; set; }
        public virtual ApplicationUser User { get; set; }
    }
}
