using System.Threading.Tasks;

namespace Repository.Interfaces
{
    interface IRepository<T> where T : class
    {
        Task<T> GetByIdAsync(int id);
        Task UpdateAsync(T obj);
        Task RemoveByIdAsync(int id);
        Task AddAsync(T obj);

    }
}
