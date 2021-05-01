using AutoMapper;
using ModelsDTO;
using Models;

namespace Mapper
{
    public class PostBLPostMap : Profile
    {
        public PostBLPostMap()
        {
            CreateMap<Post, PostDTO>()
                .ReverseMap();
        }
    }
}
