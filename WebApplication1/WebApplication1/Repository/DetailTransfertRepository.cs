using AutoMapper;
using System;
using WebApplication1.Interfaces;
using WebApplication1.Models;

namespace WebApplication1.Repository
{
    public class DetailTransfertRepository : IDetailTransfertRepository
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;
        public DetailTransfertRepository(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public bool DetailTransfertExists(string id)
        {
            return _context.DetailTransferts.Any(a => a.Id == id);

        }

        public ICollection<DetailTransfert> GetAll()
        {
            return _context.DetailTransferts.OrderBy(x => x.Id).ToList();
        }

        public DetailTransfert GetDetailTransfert(string id)
        {
            return _context.DetailTransferts.Where(a => a.Id == id).FirstOrDefault();
        }

        public DetailTransfert ModifierDetailTransfert(DetailTransfert detailTransfert)
        {
            var dt = GetDetailTransfert(detailTransfert.Id);
            if (dt == null)
            {
                return null;
            }
            dt.Code = detailTransfert.Code;
            dt.Nationalite = detailTransfert.Nationalite;
            dt.Adresse = detailTransfert.Adresse;
            dt.PaysTransfer = detailTransfert.PaysTransfer;
            dt.CodeSwift = detailTransfert.CodeSwift;
            dt.CodeBic = detailTransfert.CodeBic;
            dt.Banc = detailTransfert.Banc;
            dt.AdresseBanc = detailTransfert.AdresseBanc;
            dt.Aff_Suivie_Pai = detailTransfert.Aff_Suivie_Pai;
            dt.Ref_Lettre_Reass = detailTransfert.Ref_Lettre_Reass;
            dt.Ref_Lettre_Bt = detailTransfert.Ref_Lettre_Bt;
            dt.MontantDt = detailTransfert.MontantDt;
            dt.MontantDev = detailTransfert.MontantDev;
            dt.VirementEn = detailTransfert.VirementEn;
            dt.RefBancAstree = detailTransfert.RefBancAstree;
            dt.Motif = detailTransfert.Motif;
            dt.MotifDev = detailTransfert.MotifDev;
            _context.DetailTransferts.Update(dt);
            _context.SaveChanges();
            return dt;
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }

        public bool SupprimerDetailTransfert(string id)
        {
            var dt = GetDetailTransfert(id);
            if (dt == null)
            {
                return false;
            }
            _context.DetailTransferts.Remove(dt);
            _context.SaveChanges();
            return true;
        }
    }
}
