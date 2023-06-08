using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Hubs;
using WebApplication1.Interfaces;
using WebApplication1.Models;
using WebApplication1.Shared;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
    public class ChatController : ControllerBase
    {
        private readonly IHubContext<ChatHub, IChatClient> _chatHub;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IUserRepository _user; 
        private readonly ApplicationDbContext _context;
        private readonly IHubContext<FileHub> _hubContextFile;


        public ChatController(IHubContext<ChatHub, IChatClient> chatHub, ApplicationDbContext context, IUserRepository  userRepository ,UserManager<ApplicationUser> userManager,IHubContext<FileHub> hubContext)
        {
            _chatHub = chatHub;
            _userManager = userManager;
            _user = userRepository;
            _context = context;
            _hubContextFile = hubContext;
        }
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var currentUser = await _userManager.GetUserAsync(User);
            var message = await _context.UserConnections.ToListAsync();
            return Ok(message);
        }

        [HttpPost("messages")]
        public async Task<IActionResult> Post([FromBody] UserConnectionModel message)
        {
            if(ModelState.IsValid)
            {
               //Svar sender = await _userManager.GetUserAsync(User);
                var received  = await _userManager.Users.Where(w=>w.Id== message.ReceivedId).FirstOrDefaultAsync();
                var sender = await _userManager.Users.Where(w => w.Id == message.SenderId).FirstOrDefaultAsync();

                if (sender != null)
                    {
                       // message.SenderId = sender.Id;
                        var msg = new UserConnection
                        {

                            Id = Guid.NewGuid().ToString(),
                            UserId = sender.Id,
                            User = sender,
                            Message = message.Message,
                            Name = received.UserName,
                            When = message.When,
                        };
                        await _context.UserConnections.AddAsync(msg);
                        await _context.SaveChangesAsync();
                        await _chatHub.Clients.All.SendMessage(msg.Name,msg.Message);
                    return Ok(msg);

                    
                  
                }
                else
                {
                    return Unauthorized();

                }

            }
            return BadRequest();

            // run some logic...
            // var userRoles = _user.GetUserByEmail(message.User);

            //await _chatHub.Clients.All.ReceiveMessage(message);
            //await _chatHub.Clients.User(userRoles.Id).SendMessage(message);
        }
        [HttpPost("File")]
        public async Task PostFile([FromBody] byte[] fileData, string fileName)
        {
            _hubContextFile.Clients.All.SendAsync("ReceiveFile", fileData, fileName);
        }

        private IActionResult Ok(object value)
        {
            throw new NotImplementedException();
        }
        [Route("files")]
        [HttpPost]
        [ServiceFilter(typeof(ValidateMimeMultipartContentFilter))]
        public async Task<IActionResult> UploadFiles(FileDescriptionShort fileDescriptionShort)
        {
            if (ModelState.IsValid)
            {
                foreach (var file in fileDescriptionShort.File!)
                {
                    if (file.Length > 0)
                    {
                        using var memoryStream = new MemoryStream();
                        await file.CopyToAsync(memoryStream);

                        var imageMessage = new ImageMessage
                        {
                            ImageHeaders = "data:" + file.ContentType + ";base64,",
                            ImageBinary = memoryStream.ToArray()
                        };

                        await _hubContextFile.Clients.All.SendAsync("ImageMessage", imageMessage);
                    }
                }
            }

            return Redirect("/FileClient/Index");
        }
    }
}