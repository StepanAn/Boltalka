using ModelsDTO;
using Repository.Interfaces;

namespace Repository
{
    class Data
    {
        public Data(IRepository<PostDTO> posts)
        {
            Posts = posts;
        }
        public IRepository<PostDTO> Posts { get; }
    }
}
