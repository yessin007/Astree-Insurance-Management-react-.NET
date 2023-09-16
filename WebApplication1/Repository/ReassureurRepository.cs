using AutoMapper;
using Microsoft.AspNetCore.Identity;
using WebApplication1.Shared;
using WebApplication1.Interfaces;
using WebApplication1.Models;
using System.Reflection.Metadata;
using System.Security.Cryptography.Xml;
using System.Security.Policy;

namespace WebApplication1.Repository
{
    public class ReassureurRepository : IReassureurRepository
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;
        public ReassureurRepository(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
         
        }

        public Reassureur AjouteReassureurAsync(ReassureurDto reassureurDto)
        {
            var reassureur = _mapper.Map<Reassureur>(reassureurDto);
            reassureur.ReassureurId = Guid.NewGuid().ToString();
            _context.Add(reassureur);
            _context.SaveChanges();
            return reassureur;
        }

        public ICollection<GetReassureurCompteModel> getCompteReas()
        {
            var reas = GetReassureurs();
            var reassureurs = new List<GetReassureurCompteModel>();
            foreach (var r in reas)
            {
                var user = new GetReassureurCompteModel
                {
                    ReassureurId = r.ReassureurId,
                    Email = r.Email,
                    Telephone = r.Telephone,
                    Password = r.Password,
                    Nom = r.Nom,
                    Code = r.Code,
                    Nationalite = r.Nationalite,
                    Adresse = r.Adresse,
                    PaysTransfer = r.PaysTransfer,
                    CodeSwift = r.CodeSwift,
                    codeBic = r.codeBic,
                    CompteBancaires = _context.CompteBancaires.Where(c => c.ReassureurId == r.ReassureurId).OrderBy(x => x.Id).ToList()
                };
                reassureurs.Add(user); 
            }
            return reassureurs;
        }

        public Reassureur GetReassureurById(string id)
        {
            return _context.Reassureurs.Where(p => p.ReassureurId == id).FirstOrDefault();
        }

        public ICollection<Reassureur> GetReassureurs()
        {
            return _context.Reassureurs.OrderBy(x => x.ReassureurId).ToList();
        }

        public Reassureur ModifierReassureur(ReassureurDto reassureurDto, string id)
        {
            var reassureurGet = GetReassureurById(id);
            if (reassureurGet == null)
            {
                return null;
            }
            reassureurGet.Email= reassureurDto.Email;
            reassureurGet.Telephone= reassureurDto.Telephone;
            reassureurGet.Password= reassureurDto.Password;
            reassureurGet.Code = reassureurDto.Code;
            reassureurGet.Nom = reassureurDto.Nom;
            reassureurGet.Adresse = reassureurDto.Adresse;
            reassureurGet.codeBic = reassureurDto.codeBic;
            reassureurGet.CodeSwift = reassureurDto.CodeSwift;
            reassureurGet.Nationalite = reassureurDto.Nationalite;
            reassureurGet.PaysTransfer= reassureurDto.PaysTransfer;
            _context.Reassureurs.Update(reassureurGet);
            _context.SaveChanges();
                return reassureurGet;
        }

        public bool ReassureurExists(string id)
        {
            return _context.Reassureurs.Any(p => p.ReassureurId == id);
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;

        }

        public bool SupprimeReassureur(string id)
        {
            var reassureur = GetReassureurById(id);
            if (reassureur == null)
            {
                return false;
            }
            var comptebancaire = _context.CompteBancaires.Where(c => c.ReassureurId == id).ToList();
            foreach (var c in comptebancaire)
            {
                c.ReassureurId = null;
                c.Reassureur = null;
                _context.CompteBancaires.Update(c);
            }
            _context.Reassureurs.Remove(reassureur);
            _context.SaveChanges();
            return true;
        }
    }
}
