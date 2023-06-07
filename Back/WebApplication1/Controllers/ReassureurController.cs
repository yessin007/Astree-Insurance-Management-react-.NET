using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;
using WebApplication1.Shared;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReassureurController : ControllerBase
    {
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ApplicationDbContext _context;
        public ReassureurController(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager, ApplicationDbContext context)
        {
            _roleManager = roleManager;
            _userManager = userManager;
            _context = context;
        }

        [HttpGet]
        public IActionResult GetReassureurs()
        {
            List<Reassureur> reassureurs = _context.Reassureur.Include(t => t.CompteBancaires)
             .ToList();

            //var compteBancaire = await _context.CompteBancaires.ToListAsync();
            return Ok(reassureurs);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var reassureur = _context.Reassureur.Where(t => t.Id == id)
                 .Include(t => t.CompteBancaires)
                 .AsQueryable().First();
            //  var compte = await _context.CompteBancaires.FindAsync(id);
            if (reassureur == null)
            {
                return NotFound();
            }
            return Ok(reassureur);
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateReassureurModel model)
        { 

                      var reassureur = new Reassureur
                  {
                    Email = model.Email,
                    Nationalite = model.Nationalite,
                    Adresse = model.Adresse,
                    paysTransfer = model.paysTransfer,
                    CodeSwift = model.CodeSwift,
                    CodeBic = model.CodeBic,
                    MotPasse=model.MotPasse,
                    Role=model.Role,
                      };
                _context.Reassureur.Add(reassureur);
                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateException)
                {
                    if (RessureurExists(reassureur.Id))
                    {
                        return Conflict();
                    }
                    else
                    {
                        throw;
                    }
                }

                return Ok(reassureur);
            


        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutCompte(int id, Reassureur reassureur)
        {
            if (id != reassureur.Id)
            {
                return BadRequest();
            }

            _context.Entry(reassureur).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RessureurExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(reassureur);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Reassureur>> DeleteCompte(int id)
        {
            var reassureur = await _context.Reassureur.FindAsync(id);
            if (reassureur == null)
            {
                return NotFound();
            }

            _context.Reassureur.Remove(reassureur);
            await _context.SaveChangesAsync();

            return reassureur;
        }


        private bool RessureurExists(int id)
        {
            return _context.Reassureur.Any(e => e.Id == id);
        }
    }
}
