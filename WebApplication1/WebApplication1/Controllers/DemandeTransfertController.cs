using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using WebApplication1.Models;
using WebApplication1.Shared;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DemandeTransfertController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ApplicationDbContext _context;
        public DemandeTransfertController(UserManager<ApplicationUser> userManager, ApplicationDbContext context)
        {
            _context = context;
            _userManager = userManager;
        }

        // GET: /products
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            List<DemandeTransfert> demandeTransferts = _context.DemandeTransferts
                .Include(t => t.IdCompteReassureurNavigation)
                .Include(t => t.IdCompteReassureurNavigation)
                .Include(t => t.IdCompteAstreeNavigation)
               .ToList();

            //var compteBancaire = await _context.CompteBancaires.ToListAsync();
            return Ok(demandeTransferts);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {

            var demandeTransfert =  _context.DemandeTransferts.Where(t=>t.Id==id)
                .Include(t => t.IdCompteReassureurNavigation)
                .Include(t => t.IdCompteReassureurNavigation)
                .Include(t => t.IdCompteAstreeNavigation)
                .AsQueryable();
            if (demandeTransfert == null)
            {
                return NotFound();
            }
            return Ok(demandeTransfert);
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateDemandeDeTransfertModel model)
        {
          
                var reass = await _userManager.FindByIdAsync(model.Reassureur);
                var compteReass = await _context.CompteBancaires.FindAsync(model.CompteReassureur);
                 var compteAstree = await _context.CompteBancaires.FindAsync(model.CompteAstree);
             var demandeTransfert = new DemandeTransfert
                {
                 Libelle = model.Libelle,
                 Montant = model.Montant,
                 Devis = model.Devis,
                 Nature = model.Nature,
                 Obs = model.Obs,
                 Virement = model.Virement,
                 Date = model.Date,
                 IdReassureur = model.Reassureur,

                 IdCompteReassureur = model.CompteReassureur,
                 IdCompteAstree = model.CompteAstree,

                 IdReassureurNavigation = reass,
                 IdCompteReassureurNavigation = compteReass,
                 IdCompteAstreeNavigation = compteAstree,




             };
                _context.DemandeTransferts.Add(demandeTransfert);
                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateException)
                {
                    if (DemandeTransfertExists(demandeTransfert.Id))
                    {
                        return Conflict();
                    }
                    else
                    {
                        throw;
                    }
                }

                return Ok(demandeTransfert);
            
           


        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutCompte(int id, DemandeTransfert demande)
        {
            if (id != demande.Id)
            {
                return BadRequest();
            }

            _context.Entry(demande).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DemandeTransfertExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(demande);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<DemandeTransfert>> DeleteCompte(int id)
        {
            var demande = await _context.DemandeTransferts.FindAsync(id);
            if (demande == null)
            {
                return NotFound();
            }

            _context.DemandeTransferts.Remove(demande);
            await _context.SaveChangesAsync();

            return demande;
        }


        private bool DemandeTransfertExists(int id)
        {
            return _context.DemandeTransferts.Any(e => e.Id == id);
        }


    }
}
