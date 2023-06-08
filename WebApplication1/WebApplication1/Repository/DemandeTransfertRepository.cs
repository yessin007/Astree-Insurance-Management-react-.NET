using AutoMapper;
using Azure;
using NuGet.Packaging.Signing;
using System.Numerics;
using System.Reflection.Metadata;
using System.Text.RegularExpressions;
using WebApplication1.Interfaces;
using WebApplication1.Models;
using WebApplication1.Shared;

namespace WebApplication1.Repository
{
    public class DemandeTransfertRepository : IDemandeTransfertRepository
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;
        public DemandeTransfertRepository(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public DemandeTransfert AjouteDemandeTransfert(DemandesTransfertPostModel demandeTransfert)
        {
            var demande = _mapper.Map<DemandeTransfert>(demandeTransfert);
            
            demande.Id = Guid.NewGuid().ToString();
            demande.Reassureur = _context.Reassureurs.Where(r => r.ReassureurId == demande.ReassureurId).FirstOrDefault();
            demande.User = _context.ApplicationUsers.Where(u => u.Id == demande.UserId).FirstOrDefault();
            demande.CompteBancaire = _context.CompteBancaires.Where(u => u.Id == demande.CompteBancaireId).FirstOrDefault();
            SessionReassureur sessionReassureur = new SessionReassureur();
            sessionReassureur.Id= Guid.NewGuid().ToString();
            sessionReassureur.DemandeTransfertId= demande.Id;
            sessionReassureur.TypeTraite = demande.Nature;
            _context.Add(demande);
            _context.SaveChanges();
            sessionReassureur.DemandeTransfert = demande;
            _context.SessionReassureurs.Add(sessionReassureur);
            _context.SaveChanges();
            return demande;
        }

        public bool DemandeTransfertExists(string id)
        {
            return _context.DemandeTransferts.Any(d => d.Id == id);
        }

        public ICollection<DemandeTransfertGetModel> GetDemandesTransfert()
        {
            ICollection<DemandeTransfertGetModel> demandes = new List<DemandeTransfertGetModel>();
            var demande =  _context.DemandeTransferts.OrderBy(x => x.Id).ToList();
            if(demande.Count > 0)
            {
                foreach (var d in demande)
                {
                    var demandeDto = new DemandeTransfertGetModel
                    {
                        Id = d.Id,
                        Certificat = d.Certificat,
                        date = d.date,
                        Nature = d.Nature,
                        Type = d.Type,
                        Etat = d.Etat,
                        Libelle = d.Libelle,
                        Montant = d.Montant,
                        typeMontant = d.typeMontant,
                        timeStamp = d.timeStamp,
                        UserName = _context.ApplicationUsers.Where(i => i.Id == d.UserId).FirstOrDefault().FirstName,
                        //RIB = d.CompteBancaire.RIB,
                        //IBAN = d.CompteBancaire.IBAN,
                        ReassureurName = _context.Reassureurs.Where(i => i.ReassureurId == d.ReassureurId).FirstOrDefault().Nom

                    };
                     demandes.Add(demandeDto);
                }
           
               

            }
            return demandes;
        }

        public DemandeTransfertGetModel GetDemandeTransfertById(string id)
        {
            var d =  _context.DemandeTransferts.Where(i=> i.Id == id).FirstOrDefault();
            if (d == null)
            {
                return null;
            }
            var demandeDto = new DemandeTransfertGetModel
            {
                Id = d.Id,
                Certificat = d.Certificat,
                date = d.date,
                Nature = d.Nature,
                Type = d.Type,
                Etat = d.Etat,
                Libelle = d.Libelle,
                Montant = d.Montant,
                typeMontant = d.typeMontant,
                timeStamp = d.timeStamp,
                UserName = _context.ApplicationUsers.Where(i => i.Id == d.UserId).FirstOrDefault().FirstName,
                //RIB = d.CompteBancaire.RIB,
                //IBAN = d.CompteBancaire.IBAN,
                ReassureurName = _context.Reassureurs.Where(i => i.ReassureurId == d.ReassureurId).FirstOrDefault().Nom

            };
            return demandeDto;
        }

        public Demande GetDemandeTransfertByLibelle(string libelle)
        {
           var d =   _context.DemandeTransferts.Where(d => d.Libelle == libelle).FirstOrDefault();
            if (d == null)
            {
                return null;
            }
            var compteBancaire = _context.CompteBancaires.Where(i => i.Id == d.CompteBancaireId).FirstOrDefault();
            var user = _context.ApplicationUsers.Where(i => i.Id == d.UserId).FirstOrDefault();
            var reas = _context.Reassureurs.Where(i => i.ReassureurId == d.ReassureurId).FirstOrDefault();
            var demandeDto = new Demande
            {
                Id = d.Id,
                date = d.date,
                Libelle = d.Libelle,
                Somme = d.Montant,
                UserName = user.FirstName,
                //RIB = d.CompteBancaire.RIB,
                Iban = compteBancaire.IBAN,
                NumeroCompte = compteBancaire.NumeroCompte,
                CodeSwift= reas.CodeSwift,
                CodeBic = reas.codeBic,
                Bank = compteBancaire.Banque,
                ReassureurName = reas.Nom,

            };
            return demandeDto;
        }

        public ICollection<DemandeTransfert> GetReassureurDemande(string id)
        {
            var d = _context.DemandeTransferts.Where(i => i.ReassureurId == id).ToList();
            return d;

        }

        public ICollection<DemandeTransfert> GetUserDemande(string userid)
        {
            var d = _context.DemandeTransferts.Where(i => i.UserId == userid).ToList();
            return d;
        }

        public DemandeTransfert ModifierDemandeTransfert(DemandesTransfertPostModel demandeTransfert, string id)
        {
            var demande = _context.DemandeTransferts.Where(i => i.Id == id).FirstOrDefault();
            if (demande == null)
            {
                return null;
            }
            demande.Certificat = demandeTransfert.Certificat;
            demande.date = demandeTransfert.date;
            demande.Nature = demandeTransfert.Nature;
            demande.Type = demandeTransfert.Type;
            demande.Etat = demandeTransfert.Etat;
            demande.Libelle = demandeTransfert.Libelle;
            demande.Montant = demandeTransfert.Montant;
            demande.typeMontant = demandeTransfert.typeMontant;
            demande.timeStamp = demandeTransfert.timeStamp;
            demande.UserId= demandeTransfert.UserId;
            demande.ReassureurId= demandeTransfert.ReassureurId;
            demande.CompteBancaireId = demandeTransfert.CompteBancaireId;
            _context.DemandeTransferts.Update(demande);
            var sessionReassureur = _context.SessionReassureurs.Where(r=>r.DemandeTransfertId==id).FirstOrDefault();
            if (sessionReassureur != null)
            {
                sessionReassureur.DemandeTransfertId = demande.Id;
                sessionReassureur.TypeTraite = demande.Nature;
                sessionReassureur.DemandeTransfert = demande;
                _context.SessionReassureurs.Update(sessionReassureur);
                _context.SaveChanges();
            }
            
            var test = Save();
            if (test)
            {
                return demande;
            };
            return null;
        }

        public DemandeTransfert ModifierEtat(string etat, string id)
        {
            var demande = _context.DemandeTransferts.Where(i => i.Id == id).FirstOrDefault();
            if (demande == null)
            {
                return null;
            }
            demande.Etat = etat;
            
            _context.DemandeTransferts.Update(demande);

            var test = Save();
            if (test)
            {
                return demande;
            };
            return null;
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }

        public bool SupprimeDemandeTransfer(string id)
        {
            var demande = _context.DemandeTransferts.Where(i => i.Id == id).FirstOrDefault();
            if (demande == null)
            {
                return false;
            }
            _context.DemandeTransferts.Remove(demande);
            _context.SaveChanges();
            return true;
        }
    }
}
