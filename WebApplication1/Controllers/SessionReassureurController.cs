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
    public class SessionReassureurController : ControllerBase
    {
        private readonly ISessionReassureurRepository _sessionReassureurRepository;
        private readonly IMapper _mapper;
        public SessionReassureurController(ISessionReassureurRepository sessionReassureurRepository, IMapper mapper)
        {
            _sessionReassureurRepository = sessionReassureurRepository;
            _mapper = mapper;
        }
        [HttpGet]
        public async Task<IActionResult> GetSessionReassureur()
        {
            var session = _sessionReassureurRepository.GetSessionReassureurs();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            return Ok(session);
        }
        [HttpGet("Fac")]
        public async Task<IActionResult> GetFacs()
        {
            var session = _sessionReassureurRepository.GetFacs();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(session);
        }
        [HttpGet("Conv")]
        public async Task<IActionResult> GetCons()
        {
            var session = _sessionReassureurRepository.GetConvs();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(session);
        }
        [HttpGet("Session/{id}")]
        public async Task<IActionResult> GetSessionById(string id)
        {
            var session = _sessionReassureurRepository.GetSessionByID(id);

            if (session == null)
                return NotFound();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(session);
        }
        [HttpGet("Fac/{id}")]
        public async Task<IActionResult> GetFac(string id)
        {
            if (_sessionReassureurRepository.GetFacByID(id)==null)
                return NotFound();
            var session = _sessionReassureurRepository.GetFacByID(id);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(session);
        }
        [HttpGet("Conv/{id}")]
        public async Task<IActionResult>  GetCon(string id)
        {
            if (_sessionReassureurRepository.GetConvsByID(id)==null)
                return NotFound();
            var session = _sessionReassureurRepository.GetConvsByID(id);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(session);
        }
        [HttpPost("Fac")]
        public async Task<IActionResult> AjoutFac(FacModelPost fac)
        {

            return Ok(_sessionReassureurRepository.AjouteFac(fac));
        }
        [HttpPost("Conv")]
        public async Task<IActionResult> AjoutConv(ConvModelPost conv)
        {

            return Ok(_sessionReassureurRepository.AjouteConv(conv));
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSessionReassureur([FromRoute] string id)
        {
            var test = _sessionReassureurRepository.SupprimerSessionReassureur(id);
            if (test == false)
            {
                return BadRequest(ModelState);
            }
            return Ok();
        }
    }
}
