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
    public class DetailTransfertController : ControllerBase
    {
        private readonly IDetailTransfertRepository _repository;
        private readonly IMapper _mapper;
        public DetailTransfertController(IDetailTransfertRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }
        [HttpGet]
        public IActionResult GetDetailTransferts()
        {
            var dt = _repository.GetAll();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(dt);
        }
        [HttpGet("{id}")]
        public IActionResult GetDetailTransfert(string id)
        {
            if (!_repository.DetailTransfertExists(id))
                return NotFound();
            var dt = _repository.GetDetailTransfert(id);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(dt);
        }
       
        [HttpPut("{id}")]
        public async Task<IActionResult> ModifierDetailTransfert(DetailTransfert dt)
        {

            if (_repository.ModifierDetailTransfert(dt) == null)
            {
                return BadRequest(ModelState);
            }
            return Ok(dt);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDetailTransfert([FromRoute] string id)
        {
            var test = _repository.SupprimerDetailTransfert(id);
            if (test == false)
            {
                return BadRequest(ModelState);
            }
            return Ok();
        }
    }
}
