using Microsoft.Build.Framework;

namespace WebApplication1.Shared
{
    public class UserConnectionModel
    {
        [Required]
        public string Message { get; set; }
        public DateTime When { get; set; }
        public string SenderId { get; set; }
        public string ReceivedId { get; set; }


    }
}
