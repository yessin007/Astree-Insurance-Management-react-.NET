using AutoMapper;
using WebApplication1.Shared;
using WebApplication1.Interfaces;
using WebApplication1.Models;
namespace WebApplication1.Repository
{
    public class CompteBancaireRepository : ICompteBancaireRepository
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;
        public CompteBancaireRepository(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public CompteBancaire AjouteCompteBancaireAstree(CompteBancaireAstreeDto compteBancaireAstree)
        {
            //var   parametrageAstree= _context.ParametrageAstrees.Where(p => p.Id == compteBancaireAstree.ParametrageAstreeId).FirstOrDefault();
            var compte = new CompteBancaire
            {
                Id = Guid.NewGuid().ToString(),
                NumeroCompte = compteBancaireAstree.NumeroCompte,
                Adresse = compteBancaireAstree.Adresse,
                Agence = compteBancaireAstree.Agence,
                Banque = compteBancaireAstree.Banque,
                IBAN = compteBancaireAstree.IBAN,
                RIB = compteBancaireAstree.RIB,
                //ParametrageAstreeId = compteBancaireAstree.ParametrageAstreeId,
                //ParametrageAstree = parametrageAstree
            };

            _context.Add(compte);
            _context.SaveChanges();
            return compte;
        }

        public CompteBancaire AjouteCompteBancaireReas(CompteBancaireReasDto compteBancaireReas)
        {
            var reas = _context.Reassureurs.Where(r => r.ReassureurId == compteBancaireReas.ReassureurId).FirstOrDefault();
            var compte = new CompteBancaire
            {
                Id = Guid.NewGuid().ToString(),
                NumeroCompte = compteBancaireReas.NumeroCompte,
                Adresse = compteBancaireReas.Adresse,
                Agence = compteBancaireReas.Agence,
                Banque = compteBancaireReas.Banque,
                IBAN = compteBancaireReas.IBAN,
                RIB = compteBancaireReas.RIB,
                ReassureurId = compteBancaireReas.ReassureurId,
                Reassureur = reas
            };

            _context.Add(compte);
            _context.SaveChanges();
            return compte;
        }

        public bool CompteBancaireExists(string id)
        {
            return _context.CompteBancaires.Any(p => p.Id == id);
        }

        public ParametrageAstree GetCompteAstrees(string id)
        {
            //return _context.CompteBancaires.OrderBy(p => p.Id == id).FirstOrDefault().ParametrageAstree;
            return null;
        }

        public CompteBancaire GetCompteBancaireById(string id)
        {
            return _context.CompteBancaires.Where(p => p.Id == id).FirstOrDefault();
        }

        public Reassureur GetCompteReassureur(string id)
        {
            return GetCompteBancaireById(id).Reassureur;
        }

        public ICollection<CompteBancaire> GetComptesBancaire()
        {
            return _context.CompteBancaires.OrderBy(x => x.Id).ToList();
        }
        
      public ICollection<CompteBancaire> GetComptesBancaireAstree()
        {
            //return _context.CompteBancaires.Where(c=>c.ParametrageAstreeId!=null).OrderBy(x => x.Id).ToList();
            return null;
        }

        public ICollection<CompteBancaire> GetComptesBancaireByReas(string reasId)
        {
            return _context.CompteBancaires.Where(c => c.ReassureurId == reasId).OrderBy(x => x.Id).ToList();
        }

        public ICollection<CompteBancaire> GetComptesBancaireReas()
        {
            return _context.CompteBancaires.Where(c => c.ReassureurId != null).OrderBy(x => x.Id).ToList();
        }

        public CompteBancaire ModifierCompteBancaireAstree(CompteBancaireAstreeDto compteBancaireAstree, string id)
        {
            var astree = GetCompteBancaireById(id);
            if (astree == null)
            {
                return null;
            }
            astree.NumeroCompte= compteBancaireAstree.NumeroCompte;
            astree.Adresse = compteBancaireAstree.Adresse;
            astree.RIB = compteBancaireAstree.RIB;
            astree.IBAN = compteBancaireAstree.IBAN;
            astree.Banque = compteBancaireAstree.Banque;
            astree.Agence = compteBancaireAstree.Agence;
            _context.CompteBancaires.Update(astree);
            var test = Save();
            if (test)
            {
                return astree;
            };
            return null;
        }

        public CompteBancaire ModifierCompteBancaireReas(CompteBancaireReasDto compteBancaireReas, string id)
        {
            var reas = GetCompteBancaireById(id);
            if (reas == null)
            {
                return null;
            }
            reas.NumeroCompte = compteBancaireReas.NumeroCompte;
            reas.Adresse = compteBancaireReas.Adresse;
            reas.RIB = compteBancaireReas.RIB;
            reas.IBAN = compteBancaireReas.IBAN;
            reas.Banque = compteBancaireReas.Banque;
            reas.Agence = compteBancaireReas.Agence;
            _context.CompteBancaires.Update(reas);
            var test = Save();
            if (test)
            {
                return reas;
            };
            return null;
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }

        public bool SupprimeCompteBancaire(string id)
        {
            var compte = GetCompteBancaireById(id);
            if (compte == null)
            {
                return false;
            }
            _context.CompteBancaires.Remove(compte);
            _context.SaveChanges();
            return true;
        }
    }
}
