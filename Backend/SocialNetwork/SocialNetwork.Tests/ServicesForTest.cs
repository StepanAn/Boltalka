using AutoMapper;
using Mapper;
using Microsoft.EntityFrameworkCore;
using Repository.Infrastructure;

namespace SocialNetwork.Tests
{
    class ServicesForTest
    {
        public static AutoMapper.Mapper InitializeAutomapper()
        {
            var config = new MapperConfiguration(cfg => {
                cfg.AddProfile<PostBLPostMap>();
            });
            AutoMapper.Mapper mapper = new(config);
            return mapper;
        }
        public static ApplicationContext InitializeContext()
        {
            DbContextOptions<ApplicationContext> options = new();
            options.UseSqlServer();
        }
    }
}
