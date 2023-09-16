using Microsoft.AspNetCore.SignalR;
using WebApplication1.Interfaces;
using WebApplication1.Models;

namespace WebApplication1.Hubs
{
    public class ChatHub: Hub<IChatClient>
    {
        /* public async Task SendMessage(UserConnection message)
        {
            await Clients.All.ReceiveMessage(message);
        }*/

    }
}