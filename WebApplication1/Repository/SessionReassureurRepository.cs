using AutoMapper;
using System;
using System.Numerics;
using System.Reflection.Metadata;
using WebApplication1.Interfaces;
using WebApplication1.Models;
using WebApplication1.Shared;

namespace WebApplication1.Repository
{
    public class SessionReassureurRepository : ISessionReassureurRepository
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;
        public SessionReassureurRepository(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public ConvModelGet AjouteConv(ConvModelPost conv)
        {
            var convGet = _context.SessionReassureurs.Where(c => c.Id == conv.Id & c.TypeTraite == "Conventionnel").FirstOrDefault();
            var convModel = _mapper.Map<SessionReassureur>(conv);
            if (convModel == null) {
                return null;
            }
            convGet.Reference = conv.Reference;
            convGet.Code = conv.Code;
            convGet.Effet = conv.Effet;
            convGet.Risque = conv.Risque;
            convGet.Exercice = conv.Exercice;
            convGet.Recours = conv.Recours;
            convGet.Commission = conv.Commission;
            convGet.Sinistre = conv.Sinistre;
            convGet.RrcConstitue = conv.RrcConstitue;
            convGet.RssConstitue = conv.RssConstitue;
            convGet.PB = conv.PB;
            convGet.Aed = conv.Aed;
            convGet.Solde = conv.Solde;
            convGet.DateAuDebit = conv.DateAuDebit;
            convGet.Num = conv.Num;
            convGet.Taux = conv.Taux;
            convGet.Monnay = conv.Monnay;
            convGet.RefTransfert = conv.RefTransfert;
            convGet.Devise = conv.Devise;
            convGet.Assure = conv.Assure;
            convGet.Bordereau = conv.Bordereau;
            var demande = _context.DemandeTransferts.Where(x => x.Id == convGet.DemandeTransfertId).FirstOrDefault();
            var reas = _context.Reassureurs.Where(r => r.ReassureurId == demande.ReassureurId).FirstOrDefault();
            var user = _context.ApplicationUsers.Where(u => u.Id == demande.UserId).FirstOrDefault(); 
            var compte = _context.CompteBancaires.Where(c => c.Id == demande.CompteBancaireId).FirstOrDefault();
            // convGet.DemandeTransfert = _context.DemandeTransferts.Where(d => d.Id == convGet.DemandeTransfertId).FirstOrDefault();
            // convModel.DemandeTransfertId = convGet.DemandeTransfertId;
            //convModel.DemandeTransfert = convGet.DemandeTransfert;
            //convModel.TypeTraite = convGet.TypeTraite;
            //convGet.DemandeTransfert.Reassureur = _context.Reassureurs.Where(d => d.ReassureurId == convGet.DemandeTransfert.ReassureurId).FirstOrDefault();
            _context.Update(convGet);
            var avis = _context.AvisDebits.Where(c => c.Code == convGet.Code & c.ReassureurName == reas.Nom & c.Lib_Reglement == demande.Libelle& c.Montant== demande.Montant & c.Obs == user.LastName + "" + user.FirstName & c.Exercice == convGet.Exercice & c.CompteBancaire == compte.NumeroCompte).FirstOrDefault();
            if(avis == null)
            {
                AvisDebit ad = new AvisDebit
                {
                    Id = Guid.NewGuid().ToString(),
                    Code = convGet.Code,
                    ReassureurName = reas.Nom,
                    Lib_Reglement = demande.Libelle,
                    Montant = demande.Montant,
                    ReagtAccept = "",
                    Obs = user.LastName + " " + user.FirstName,
                    Exercice = convGet.Exercice,
                    CompteBancaire = compte.NumeroCompte
                };
                _context.AvisDebits.Add(ad);
            }
            else
            {
                avis.Code = convGet.Code;
                avis.ReassureurName = reas.Nom;
                avis.Lib_Reglement = demande.Libelle;
                avis.Montant = demande.Montant;
                avis.ReagtAccept = "";
                avis.Obs = user.LastName + " " + user.FirstName;
                avis.Exercice = convGet.Exercice;
                avis.CompteBancaire = compte.NumeroCompte;
                _context.AvisDebits.Update(avis);
            }
            /*
            var MontantType = demande.typeMontant;
            double MontantDt = 0;
            double MontantDev = 0;
            if (MontantType == "DT")
            {
                MontantDt = demande.Montant;
                MontantDev = MontantDt * 3.42;
            }
            else {
              MontantDev = demande.Montant;
                MontantDt = MontantDev / 3.42;
            }
            DetailTransfert dt = new DetailTransfert
            {   Id = Guid.NewGuid().ToString(),
                Code = reas.Code,
                Nationalite = reas.Nationalite,
                Adresse= reas.Adresse,
                PaysTransfer = reas.PaysTransfer,
                CodeSwift = reas.CodeSwift,
                CodeBic = reas.codeBic,
                Banc = "",
                AdresseBanc = "",
                Aff_Suivie_Pai = demande.Libelle,
                Ref_Lettre_Reass = "",
                Ref_Lettre_Bt = "",
                MontantDt = MontantDt,
                MontantDev = MontantDev,
                VirementEn = MontantType,
                RefBancAstree  = compte.NumeroCompte,
                Motif = "",
                MotifDev = "" };
               _context.DetailTransferts.Add(dt);*/
            var Models = _mapper.Map<ConvModelGet>(convModel);
            _context.SaveChanges();
            return Models;
        }

        public FacModelGet AjouteFac(FacModelPost fac)
        {
            var facModel = _mapper.Map<SessionReassureur>(fac);
            var facGet = _context.SessionReassureurs.Where(s => s.Id == fac.Id &s.TypeTraite == "Facultative").FirstOrDefault();
            if (facGet == null)
            {
                return null;
            }
            facGet.Reference = fac.Reference;
            facGet.Code = fac.Code;
            facGet.Effet = fac.Effet;
            facGet.Risque = fac.Risque;
            facGet.Exercice = fac.Exercice;
            facGet.Recours = fac.Recours;
            facGet.Commission = fac.Commission;
            facGet.Sinistre = fac.Sinistre;
            facGet.RrcConstitue = fac.RrcConstitue;
            facGet.RssConstitue = fac.RssConstitue;
            facGet.PB = fac.PB;
            facGet.Aed = fac.Aed;
            facGet.Solde = fac.Solde;
            facGet.DateAuDebit = fac.DateAuDebit;
            facGet.Num = fac.Num;
            facGet.Taux = fac.Taux;
            facGet.Monnay = fac.Monnay;
            facGet.RefTransfert = fac.RefTransfert;
            facGet.Devise = fac.Devise;
            facGet.PrimesCode = fac.PrimesCode;
            facGet.Rrcli = fac.Rrcli;
            facGet.Rsslib= fac.Rsslib;
            facGet.Intere = fac.Intere;

            // facModel.DemandeTransfertId = facGet.DemandeTransfertId;
            //facModel.DemandeTransfert = facGet.DemandeTransfert;
            //facModel.TypeTraite = facGet.TypeTraite;
            var Models = _mapper.Map<FacModelGet>(facModel);
            _context.SessionReassureurs.Update(facGet);
            var demande = _context.DemandeTransferts.Where(x => x.Id == facGet.DemandeTransfertId).FirstOrDefault();
            var reas = _context.Reassureurs.Where(r => r.ReassureurId == demande.ReassureurId).FirstOrDefault();
            var user = _context.ApplicationUsers.Where(u => u.Id == demande.UserId).FirstOrDefault();
            var compte = _context.CompteBancaires.Where(c => c.Id == demande.CompteBancaireId).FirstOrDefault();
            var avis = _context.AvisDebits.Where(c => c.Code == facGet.Code & c.ReassureurName == reas.Nom & c.Lib_Reglement == demande.Libelle & c.Montant == demande.Montant & c.Obs == user.LastName + "" + user.FirstName & c.Exercice == facGet.Exercice & c.CompteBancaire == compte.NumeroCompte).FirstOrDefault();
            if (avis == null)
            {
                AvisDebit ad = new AvisDebit
                {
                    Id = Guid.NewGuid().ToString(),
                    Code = facGet.Code,
                    ReassureurName = reas.Nom,
                    Lib_Reglement = demande.Libelle,
                    Montant = demande.Montant,
                    ReagtAccept = "",
                    Obs = user.LastName + " " + user.FirstName,
                    Exercice = facGet.Exercice,
                    CompteBancaire = compte.NumeroCompte
                };
                _context.AvisDebits.Add(ad);
            }
            else
            {
                avis.Code = facGet.Code;
                avis.ReassureurName = reas.Nom;
                avis.Lib_Reglement = demande.Libelle;
                avis.Montant = demande.Montant;
                avis.ReagtAccept = "";
                avis.Obs = user.LastName + " " + user.FirstName;
                avis.Exercice = facGet.Exercice;
                avis.CompteBancaire = compte.NumeroCompte;
                _context.AvisDebits.Update(avis);
            }
            _context.SaveChanges();
            return Models;

        }

        public ICollection<ConvModelGet> GetConvs()
        {
            var convs = _context.SessionReassureurs.Where(f => f.TypeTraite == "Conventionnel").OrderBy(f => f.Id).ToList();
            ICollection<ConvModelGet> model = new List<ConvModelGet>();
            foreach (var conv in convs)
            {
                conv.DemandeTransfert = _context.DemandeTransferts.Where(f => f.Id == conv.DemandeTransfertId).FirstOrDefault();
                model.Add(_mapper.Map<ConvModelGet>(conv));
            }
            return model;
        }

        public ConvModelGet GetConvsByID(string id)
        {
            var conv = _context.SessionReassureurs.Where(c=>c.Id==id & c.TypeTraite== "Conventionnel").FirstOrDefault();
            conv.DemandeTransfert = _context.DemandeTransferts.Where(f => f.Id == conv.DemandeTransfertId).FirstOrDefault();
            var model = _mapper.Map<ConvModelGet>(conv);
            return model;
        }

        public FacModelGet GetFacByID(string id)
        {
            var fac = _context.SessionReassureurs.Where(c => c.Id == id & c.TypeTraite == "Facultative").FirstOrDefault();
            fac.DemandeTransfert = _context.DemandeTransferts.Where(f => f.Id == fac.DemandeTransfertId).FirstOrDefault();
            var model = _mapper.Map<FacModelGet>(fac);
            return model;
        }

        public ICollection<FacModelGet> GetFacs()
        {
           var facs = _context.SessionReassureurs.Where(f => f.TypeTraite == "Facultative").OrderBy(f => f.Id).ToList();
            ICollection<FacModelGet> model = new List<FacModelGet>();
            foreach (var fac in facs)
            {
                fac.DemandeTransfert = _context.DemandeTransferts.Where(f => f.Id == fac.DemandeTransfertId).FirstOrDefault();

                model.Add(_mapper.Map<FacModelGet>(fac));
            }
            return model;
        }

        public SessionGetModel GetSessionByID(string id)
        {
            var session = _context.SessionReassureurs.Where(c => c.Id == id ).FirstOrDefault();
            var d = _context.DemandeTransferts.Where(f => f.Id == session.DemandeTransfertId).FirstOrDefault();
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
            
            var model = _mapper.Map<SessionGetModel>(session);
            model.DemandeTransfert= demandeDto;
            return model;
        }

        public ICollection<SessionGetModel> GetSessionReassureurs()
        {
            var session = _context.SessionReassureurs.OrderBy(f => f.Id).ToList();
            ICollection<SessionGetModel> model = new List<SessionGetModel>();
            foreach (var s in session)
            {
                s.DemandeTransfert = _context.DemandeTransferts.Where(f => f.Id == s.DemandeTransfertId).FirstOrDefault();
                var demandeDto = new DemandeTransfertGetModel
                {
                    Id = s.DemandeTransfert.Id,
                    Certificat = s.DemandeTransfert.Certificat,
                    date = s.DemandeTransfert.date,
                    Nature = s.DemandeTransfert.Nature,
                    Type = s.DemandeTransfert.Type,
                    Etat = s.DemandeTransfert.Etat,
                    Libelle = s.DemandeTransfert.Libelle,
                    Montant = s.DemandeTransfert.Montant,
                    typeMontant = s.DemandeTransfert.typeMontant,
                    timeStamp = s.DemandeTransfert.timeStamp,
                    UserName = _context.ApplicationUsers.Where(i => i.Id == s.DemandeTransfert.UserId).FirstOrDefault().FirstName,
                    ReassureurName = _context.Reassureurs.Where(i => i.ReassureurId == s.DemandeTransfert.ReassureurId).FirstOrDefault().Nom

                };

                
                var sessionDto = _mapper.Map<SessionGetModel>(s);
                sessionDto.DemandeTransfert = demandeDto;
                model.Add(sessionDto);
            }
            return model;
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }

        public bool SessionReassureursExists(string id)
        {
            return _context.SessionReassureurs.Any(p => p.Id == id);
        }

        public bool SupprimerSessionReassureur(string id)
        {
            var session = _context.SessionReassureurs.Where(s=>s.Id == id).FirstOrDefault();
            if (session == null)
            {
                return false;
            }
            _context.SessionReassureurs.Remove(session);
            _context.SaveChanges();
            return true;
        }
    }
    }
