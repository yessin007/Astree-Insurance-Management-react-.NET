using AutoMapper;
using DinkToPdf;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Reflection.Metadata;
using WebApplication1.Interfaces;
using WebApplication1.Models;
using WebApplication1.Shared;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DemandeTransfertController : ControllerBase
    {
        private readonly IDemandeTransfertRepository _demandeTransfert;
        private readonly IMapper _mapper;
        public DemandeTransfertController(IDemandeTransfertRepository demandeTransfert, IMapper mapper)
        {
            _demandeTransfert = demandeTransfert;
            _mapper = mapper;
        }
        [HttpGet]
        public IActionResult GetDemandeTransferts()
        {
            var demandeTransfert = _demandeTransfert.GetDemandesTransfert();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(demandeTransfert);
        }
        [HttpGet("{id}")]
        public IActionResult GetDemandeTransfertById(string id)
        {
            if (!_demandeTransfert.DemandeTransfertExists(id))
                return NotFound();
            var demande = _demandeTransfert.GetDemandeTransfertById(id);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(demande);
        }
        [HttpGet("Lettre/{libelle}")]
        public IActionResult GetDemandeTransfertByLibelle(string libelle)
        {
            
            var demande = _demandeTransfert.GetDemandeTransfertByLibelle(libelle);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(demande);
        }
        [HttpPost]
        public async Task<IActionResult> AjoutParametrageAstree(DemandesTransfertPostModel demande)
        {

            return Ok(_demandeTransfert.AjouteDemandeTransfert(demande));
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> ModifierParametrageAstree(DemandesTransfertPostModel demande, string id)
        {

            if (_demandeTransfert.ModifierDemandeTransfert(demande, id) == null)
            {
                return BadRequest(ModelState);
            }
            return Ok(demande);
        }
        [Route("UpdateByetat/{id}/{etat}")]
        [HttpPut]
        public async Task<IActionResult> UpdateByEtat( string id, string etat)
        {
            var demande = _demandeTransfert.ModifierEtat(etat, id);

            if (demande == null)
            {
                return BadRequest(ModelState);
            }
            return Ok(demande);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteParametrageAstree([FromRoute] string id)
        {
            var test = _demandeTransfert.SupprimeDemandeTransfer(id);
            if (test == false)
            {
                return BadRequest(ModelState);
            }
            return Ok();
        }
        [Route("api/[controller]/User/{UserId}")]
        [HttpGet]
        public IActionResult GetUsersDemande(string id)
        {
            if (!_demandeTransfert.DemandeTransfertExists(id))
                return NotFound();
            var user = _demandeTransfert.GetUserDemande(id);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(user);
        }
        [Route("api/[controller]/User/{ReasId}")]
        [HttpGet]
        public IActionResult GetReasDemande(string id)
        {
            if (!_demandeTransfert.DemandeTransfertExists(id))
                return NotFound();
            var reas = _demandeTransfert.GetReassureurDemande(id);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(reas);
        }

        [HttpPost("generate-pdf")]
        public IActionResult GeneratePdf([FromBody] string data)
        {
            var doc = new HtmlToPdfDocument()
            {
                GlobalSettings = {
            ColorMode = ColorMode.Color,
            Orientation = Orientation.Portrait,
            PaperSize = PaperKind.A4,
        },
                Objects = {
            new ObjectSettings()
            {
                HtmlContent = data,
            }
        }
            };

            var converter = new SynchronizedConverter(new PdfTools());
            var pdfBytes = converter.Convert(doc);

            // Save the PDF file C:\Users\user\Desktop\Front\Front\public
            var fileName = "C:/Users/user/Desktop/Front/Front/public/document.pdf";
            var filePath = Path.Combine(Path.GetTempPath(), fileName);
            System.IO.File.WriteAllBytes(filePath, pdfBytes);

            // Return the URL or file data of the generated PDF
            var fileUrl = $"http://localhost:5169/api/DemandeTransfert/generate-pdf/{fileName}";
            return Ok(fileUrl);
        }
    }
}
