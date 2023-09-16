using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Interfaces;
using WebApplication1.Models;
using WebApplication1.Shared;


namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompteBancaireController : ControllerBase
    {
        private readonly ICompteBancaireRepository _compteBancaireRepository;
        private readonly IMapper _mapper;
        public CompteBancaireController(ICompteBancaireRepository compteBancaireRepository, IMapper mapper)
        {
            _compteBancaireRepository = compteBancaireRepository;
            _mapper = mapper;
        }
        [HttpGet]
        public IActionResult GetCompteBancaire()
        {
            var compte = _compteBancaireRepository.GetComptesBancaire();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(compte);
        }
        [HttpGet("CompteAstree")]
        public IActionResult GetCompteBancaireAstree()
        {
            var compte = _compteBancaireRepository.GetComptesBancaireAstree();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(compte);
        }
        [HttpGet("CompteBancaireReas")]
        public IActionResult GetCompteBancaireReas()
        {
            var compte = _compteBancaireRepository.GetComptesBancaireReas();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(compte);
        }
        [HttpGet("CompteBancaireReass/{id}")]
        public IActionResult GetCompteBancaireByReas(string id)
        {
            var compte = _compteBancaireRepository.GetComptesBancaireByReas(id);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(compte);
        }
        [HttpGet("{id}")]
        public IActionResult GetCompteBancaire(string id)
        {
            if (!_compteBancaireRepository.CompteBancaireExists(id))
                return NotFound();
            var compte= _compteBancaireRepository.GetCompteBancaireById(id);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(compte);
        }
        [HttpPost]
        public async Task<IActionResult> AjoutCompteBancaireAstree(CompteBancaireAstreeDto astree)
        {

            return Ok(_compteBancaireRepository.AjouteCompteBancaireAstree(astree));
        }
        [HttpPost("CompteBancaireReas")]
        public async Task<IActionResult> AjoutCompteBancaireReas(CompteBancaireReasDto Comptereas)
        {

            return Ok(_compteBancaireRepository.AjouteCompteBancaireReas(Comptereas));
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> ModifierCompteBancaireAstree(CompteBancaire astreeDto, string id)
        {

            if (_compteBancaireRepository.ModifierCompteBancaireAstree(astreeDto, id) == null)
            {
                return BadRequest(ModelState);
            }
            return Ok(astreeDto);
        }
        [HttpPut("CompteBancaireReas/{id}")]
        public async Task<IActionResult> ModifierCompteBancaireReas(CompteBancaireReasDto reasDto, string id)
        {

            if (_compteBancaireRepository.ModifierCompteBancaireReas(reasDto, id) == null)
            {
                return BadRequest(ModelState);
            }
            return Ok(reasDto);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCompteBancaireAstree([FromRoute] string id)
        {
            var test = _compteBancaireRepository.SupprimeCompteBancaire(id);
            if (test == false)
            {
                return BadRequest(ModelState);
            }
            return Ok();
        }
        [HttpGet("NombreCB")]
        public int NombreCompteBancaire()
        {
            return _compteBancaireRepository.NombreCompteBancaire();
        }
    }
}
