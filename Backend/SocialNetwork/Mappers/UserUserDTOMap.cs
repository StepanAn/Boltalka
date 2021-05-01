using AutoMapper;
using Models;
using ModelsDTO;

namespace Mapper
{
    public class UserUserDTOMap : Profile
    {
        public UserUserDTOMap()
        {
            CreateMap<User, UserDTO>()
                .ReverseMap();
        }
    }
}
