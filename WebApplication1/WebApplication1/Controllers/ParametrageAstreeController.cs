using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Shared;
using WebApplication1.Interfaces;
using WebApplication1.Models;
using WebApplication1.Repository;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ParametrageAstreeController : ControllerBase
    {
        private readonly IParametrageAstreeRepository _parametrageAstree;
        private readonly IMapper _mapper;
        public ParametrageAstreeController(IParametrageAstreeRepository parametrageAstree, IMapper mapper)
        {
            _parametrageAstree = parametrageAstree;
            _mapper = mapper;
        }
        [HttpGet]
        public IActionResult GetParametrageAstrees()
        {
            var astree = _parametrageAstree.GetParametrageAstrees();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(astree);
        }
        [HttpGet("{id}")]
        public IActionResult GetParametrageAstree(string id)
        {
            if (!_parametrageAstree.ParametrageAstreeExists(id))
                return NotFound();
            var astree = _mapper.Map<ParametrageAstreeDto>(_parametrageAstree.GetParametrageAstreeById(id));
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(astree);
        }
        [HttpPost]
        public async Task<IActionResult> AjoutParametrageAstree(ParametrageAstreeDto astree)
        {

            return Ok(_parametrageAstree.AjouteParametrageAstree(astree));
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> ModifierParametrageAstree(ParametrageAstreeDto astreeDto, string id)
        {

            if (_parametrageAstree.ModifierParametrageAstree(astreeDto, id) == null)
            {
                return BadRequest(ModelState);
            }
            return Ok(astreeDto);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteParametrageAstree([FromRoute] string id)
        {
            var test = _parametrageAstree.SupprimeParametrageAstree(id);
            if (test == false)
            {
                return BadRequest(ModelState);
            }
            return Ok();
        }
        [Route("api/[controller]/Compte/{id}")]
        [HttpGet]
        public IActionResult GetCompteAstree(string id)
        {
            if (!_parametrageAstree.ParametrageAstreeExists(id))
                return NotFound();
            var compte = _parametrageAstree.GetCompteAstrees(id);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(compte);
        }
        /*[Route("api/[controller]/Users/{id}")]
        [HttpGet]
        public IActionResult GetUsersAstree(string id)
        {
            if (!_parametrageAstree.ParametrageAstreeExists(id))
                return NotFound();
            var users = _parametrageAstree.GetUserAstrees(id);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(users);
        }*/
    }
}
