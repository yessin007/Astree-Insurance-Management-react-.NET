using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NuGet.Protocol.Core.Types;
using WebApplication1.Interfaces;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AvisDebitController : ControllerBase
    {
        private readonly IAvisDebitRepository _repository;
        private readonly IMapper _mapper;
        public AvisDebitController(IAvisDebitRepository avisDebitRepository,IMapper mapper)
        {
            _repository = avisDebitRepository;
            _mapper=mapper;
        }
        [HttpGet]
        public IActionResult GetAvisDebits()
        {
            var dt = _repository.GetAll();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(dt);
        }
        [HttpGet("{id}")]
        public IActionResult GetAvisDebit(string id)
        {
            if (!_repository.AvisDebitExists(id))
                return NotFound();
            var dt = _repository.GetAvisDebit(id);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(dt);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> ModifierAvisDebit(AvisDebit dt)
        {

            if (_repository.ModifierAvisDebit(dt) == null)
            {
                return BadRequest(ModelState);
            }
            return Ok(dt);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAvisDebit([FromRoute] string id)
        {
            var test = _repository.SupprimerAvisDebit(id);
            if (test == false)
            {
                return BadRequest(ModelState);
            }
            return Ok();
        }
    }
}
