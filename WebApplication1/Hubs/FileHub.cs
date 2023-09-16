namespace WebApplication1.Hubs
{
    using Microsoft.AspNetCore.SignalR;
    using System.Threading.Tasks;
    using WebApplication1.Models;

    public class FileHub : Hub
    {
        public void SendFile(byte[] fileData, string fileName)
        {
            // Broadcast the file to all connected clients
             Clients.All.SendAsync("ReceiveFile", fileData, fileName);
        }
        public Task ImageMessage(ImageMessage file)
        {
            return Clients.All.SendAsync("ImageMessage", file);
        }
    }
}