using AutoMapper;
using System.Reflection.Metadata;
using WebApplication1.Interfaces;
using WebApplication1.Models;

namespace WebApplication1.Repository
{
    public class AvisDebitRepository : IAvisDebitRepository
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;
        public AvisDebitRepository(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public bool AvisDebitExists(string id)
        {
            return _context.AvisDebits.Any(a => a.Id == id);

        }

        public ICollection<AvisDebit> GetAll()
        {
            return _context.AvisDebits.OrderBy(x => x.Id).ToList();
        }

        public AvisDebit GetAvisDebit(string id)
        {
            return _context.AvisDebits.Where(a => a.Id == id).FirstOrDefault();
        }

        public AvisDebit ModifierAvisDebit(AvisDebit avisDebit)
        {
            var a = GetAvisDebit(avisDebit.Id);
            if (a == null)
            {
                return null;
            }
            a.Code = avisDebit.Code;
            a.ReassureurName = avisDebit.ReassureurName;
            a.Lib_Reglement = avisDebit.Lib_Reglement;
            a.Montant = avisDebit.Montant;
            a.ReagtAccept = avisDebit.ReagtAccept;
            a.Obs = avisDebit.Obs;
            a.Exercice = avisDebit.Exercice;
            a.CompteBancaire = avisDebit.CompteBancaire;
            _context.AvisDebits.Update(a);
            _context.SaveChanges();
            return a;
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }

        public bool SupprimerAvisDebit(string id)
        {
            var av = GetAvisDebit(id);
            if (av == null)
            {
                return false;
            }
            _context.AvisDebits.Remove(av);
            _context.SaveChanges();
            return true;
        }
    }
}
