using WebApplication1.Models;

namespace WebApplication1.Interfaces
{
    public interface IDetailTransfertRepository
    {
        ICollection<DetailTransfert> GetAll();
        DetailTransfert GetDetailTransfert(string id);
        bool SupprimerDetailTransfert(string id);
        DetailTransfert ModifierDetailTransfert(DetailTransfert detailTransfert);
        bool DetailTransfertExists(string id);
        bool Save();
    }
}
