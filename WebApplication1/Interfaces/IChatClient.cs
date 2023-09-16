using WebApplication1.Models;

namespace WebApplication1.Interfaces
{
    public interface IChatClient
    {
        Task ReceiveMessage(UserConnection user);
        Task SendMessage(string name, string message);
        Task SendFile(byte[] fileData, string fileName);

    }
}
