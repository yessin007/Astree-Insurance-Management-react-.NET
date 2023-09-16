using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NuGet.Versioning;
using System.Data;
using WebApplication1.Models;
using WebApplication1.Shared;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompteBancaireController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ApplicationDbContext _context;
        public CompteBancaireController(UserManager<ApplicationUser> userManager, ApplicationDbContext context)
        {
            _context = context;
            _userManager = userManager;
        }

        // GET: /products
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            List<CompteBancaire> compteBancaires = _context.CompteBancaires.Include(t => t.IdReassureurNavigation)
               .ToList();
          
            //var compteBancaire = await _context.CompteBancaires.ToListAsync();
            return Ok(compteBancaires);
        }
       
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var compte = _context.CompteBancaires.Where(t => t.Id == id)
                 .Include(t => t.IdReassureurNavigation)
                 .AsQueryable();
          //  var compte = await _context.CompteBancaires.FindAsync(id);
            if (compte == null)
            {
                return NotFound();
            }
            return Ok(compte);
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateCompteBabcaireModel model)
        {
            if (model.IdReassureur != null)
            {
                var user = await _context.Reassureur.FindAsync(model.IdReassureur);
                var compte = new CompteBancaire
                {
                    NumeroCompte = model.NumeroCompte,
                    Adresse = model.Adresse,
                    Rib = model.Rib,
                    Iban = model.Iban,
                    Banque = model.Banque,
                    Agence = model.Agence,
                    IdReassureur = model.IdReassureur,
                    IdReassureurNavigation = user,
                };
                _context.CompteBancaires.Add(compte);
                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateException)
                {
                    if (CompteBancaireExists(compte.Id))
                    {
                        return Conflict();
                    }
                    else
                    {
                        throw;
                    }
                }

                return Ok(compte);
            }
            else
            {
                var compte = new CompteBancaire
                {
                    NumeroCompte = model.NumeroCompte,
                    Adresse = model.Adresse,
                    Rib = model.Rib,
                    Iban = model.Iban,
                    Banque = model.Banque,
                    Agence = model.Agence,
                    IdReassureur= model.IdReassureur,
                   
                };
                _context.CompteBancaires.Add(compte);
                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateException)
                {
                    if (CompteBancaireExists(compte.Id))
                    {
                        return Conflict();
                    }
                    else
                    {
                        throw;
                    }
                }

                return Ok(compte);
            }
          

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutCompte(int id, CompteBancaire compte)
        {
            if (id != compte.Id)
            {
                return BadRequest();
            }

            _context.Entry(compte).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CompteBancaireExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(compte);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<CompteBancaire>> DeleteCompte(int id)
        {
            var compte = await _context.CompteBancaires.FindAsync(id);
            if (compte == null)
            {
                return NotFound();
            }

            _context.CompteBancaires.Remove(compte);
            await _context.SaveChangesAsync();
           
            return compte;
        }


        private bool CompteBancaireExists(int id)
        {
            return _context.CompteBancaires.Any(e => e.Id == id);
        }

    }
}
