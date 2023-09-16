using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Shared;
using WebApplication1.Interfaces;
using WebApplication1.Models;
using WebApplication1.Repository;
using Microsoft.AspNetCore.Identity;
using System.Configuration;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReassureurController : ControllerBase
    {
        private readonly IReassureurRepository _reassureurRepository;
        private readonly IMapper _mapper;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> _userManager;
        public ReassureurController(IReassureurRepository reassureurRepository, IMapper mapper, SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            _reassureurRepository = reassureurRepository;
            _mapper = mapper;
            _signInManager = signInManager;
            _userManager = userManager;
            _roleManager = roleManager;
        }
        [HttpGet]
        public IActionResult GetReassureurs()
        {
            var reassureurs = _mapper.Map<List<GetReassureurModel>>(_reassureurRepository.GetReassureurs());
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(reassureurs);
        }
        [HttpGet("ReassureurWithCompte")]
        public IActionResult GetReassureursWithComptes()
        {
            var reassureurs = _reassureurRepository.getCompteReas();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(reassureurs);
        }
        [HttpGet("{id}")]
        public IActionResult GetReassureur(string id)
        {
            if (!_reassureurRepository.ReassureurExists(id))
                return NotFound();
            var reassureur = _mapper.Map<ReassureurDto>(_reassureurRepository.GetReassureurById(id));
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(reassureur);
        }
        [HttpPost]
        public async Task<IActionResult> AjoutReassureur(ReassureurDto reassureur)
        {
            var user = new ApplicationUser
            {
                Id = Guid.NewGuid().ToString(),
                Email = reassureur.Email,
                UserName = reassureur.Email,
                PhoneNumber = reassureur.Telephone,
                FirstName= reassureur.Nom,
                LastName= reassureur.Nom,

            };
            var result = await _userManager.CreateAsync(user, reassureur.Password);

            if (result.Succeeded)
            {
                await _userManager.AddToRoleAsync(user, "Reassureur");
                return Ok(_reassureurRepository.AjouteReassureurAsync(reassureur));

            }

            return BadRequest();
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> ModifierReassureur(ReassureurDto reassureurDto, string id)
        {
            var reas = _reassureurRepository.ModifierReassureur(reassureurDto, id);

            if (reas == null)
            {
                return BadRequest(ModelState);
            }
            return Ok(reassureurDto);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReassureur([FromRoute] string id)
        {
            var test = _reassureurRepository.SupprimeReassureur(id);
            if (test == false)
            {
                return BadRequest(ModelState);
            }
            return Ok();
        }
    }
}
