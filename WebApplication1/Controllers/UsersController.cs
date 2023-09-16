using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Data;
using WebApplication1.Interfaces;
using WebApplication1.Models;
using WebApplication1.Shared;

namespace WebApplication1.Controllers
{
    /*
    //[Authorize(Roles = "Admin")]
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public UsersController(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
        }

        [HttpGet]
        public IActionResult GetUsersWithRoles()
        {
            var usersWithRoles = _userManager.Users.Select(u => new
            {
                u.Id,
                u.UserName,
                Roles = _userManager.GetRolesAsync(u).Result.ToList()
            });
            return Ok(usersWithRoles);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUserRoles(string id, UpdateUserRolesModel model)
        {
            var user = await _userManager.FindByIdAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            var rolesToAdd = model.Roles.Except(await _userManager.GetRolesAsync(user));
            var rolesToRemove = (await _userManager.GetRolesAsync(user)).Except(model.Roles);

            var result = await _userManager.AddToRolesAsync(user, rolesToAdd);
            if (!result.Succeeded)
            {
                return BadRequest(result.Errors);
            }
            result = await _userManager.RemoveFromRolesAsync(user, rolesToRemove);
            if (!result.Succeeded)
            {
                return BadRequest(result.Errors);
            }
            return Ok();
        }
    }*/



    //[Authorize(Roles = "Admin")]
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IUserRepository _user;

        public UsersController(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _userManager.Users.ToList();
            return Ok(users);
        }
        [HttpGet("UserWithRoles")]
        public async Task<ActionResult<IEnumerable<GetUserWithRoles>>> GetUsers()
        {
            var users = await _userManager.Users.ToListAsync();

            var usersWithRoles = new List<GetUserWithRoles>();

            foreach (var user in users)
            {
                var userRoles = await _userManager.GetRolesAsync(user);
                var userDto = new GetUserWithRoles
                {
                    //Id = user.Id,
                   // UserName = user.UserName,
                   // Email = user.Email,
                   // Roles = userRoles


                    Id = user.Id,
                    Telephone = user.PhoneNumber,
                    Email = user.Email,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Role = userRoles
                };
                usersWithRoles.Add(userDto);
            }

            return Ok(usersWithRoles);
        }
        [HttpGet("{NameRole}/users")]
        public async Task<ActionResult<IEnumerable<GetUserWithRoles>>> GetUsersInRole(string NameRole)
        {
            //var role = await _roleManager.FindByIdAsync(id);
            var role = await _roleManager.FindByNameAsync(NameRole);

            if (role == null)
            {
                return NotFound();
            }

            var users = await _userManager.GetUsersInRoleAsync(role.Name);

            var usersWithRoles = new List<GetUserWithRoles>();

            foreach (var user in users)
            {
                var userRoles = await _userManager.GetRolesAsync(user);
                var userDto = new GetUserWithRoles
                {
                    Id = user.Id,
                    //UserName = user.UserName,
                    Telephone= user.PhoneNumber,
                    Email = user.Email,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Role = userRoles
                };
                usersWithRoles.Add(userDto);
            }

            return Ok(usersWithRoles);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(string id)
        {
            var user = await _userManager.FindByIdAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost]
        public async Task<IActionResult> Create(RegisterModel model)
        {
            var user = new ApplicationUser
            {
                Email = model.Email,
                UserName = model.Email,
                PhoneNumber = model.Telephone,
                FirstName = model.FirstName,
                LastName = model.LastName,

            };
          //  var user = new ApplicationUser { UserName = model.UserName, Email = model.Email };
            var result = await _userManager.CreateAsync(user, model.Password);
            if (result.Succeeded)
            {
                await _userManager.AddToRoleAsync(user, model.Role);
                return Ok(user);
            }
            return BadRequest(result.Errors);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, UpdateUserModel model)
        {
            var user = await _userManager.FindByIdAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            user.FirstName = model.FirstName;
            user.LastName = model.LastName;
            user.PhoneNumber = model.Telephone;
            user.Email = model.Email;
            var result = await _userManager.UpdateAsync(user);
            if (result.Succeeded)
            {
                return Ok(user);
            }
            return BadRequest(result.Errors);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var user = await _userManager.FindByIdAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            var result = await _userManager.DeleteAsync(user);
            if (result.Succeeded)
            {
                return NoContent();
            }
            return BadRequest(result.Errors);
        }
        [HttpGet("Gestionnaire")]
        public async Task<ActionResult<IEnumerable<GetUserWithRoles>>> GetGesrtionnaire()
        {
            var users = await _userManager.GetUsersInRoleAsync("Gestionnaire");

            var usersWithRoles = new List<GetUserWithRoles>();

            foreach (var user in users)
            {
                var userRoles = await _userManager.GetRolesAsync(user);
                var userDto = new GetUserWithRoles
                {
                    Id = user.Id,
                    //UserName = user.UserName,
                    Telephone = user.PhoneNumber,
                    Email = user.Email,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Role = userRoles
                };
                usersWithRoles.Add(userDto);
            }

            return Ok(usersWithRoles);
        }
   


        [HttpGet("NombreUsers")]
        public int nombreUsers()
        {
            // return _user.nombreUsers();
            return 6;
        }
      
    }

}
