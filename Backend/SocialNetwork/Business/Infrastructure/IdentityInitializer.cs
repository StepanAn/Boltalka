using Microsoft.AspNetCore.Identity;
using Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using ModelsDTO;
using AutoMapper;
using Mapper;

namespace SocialNetwork.BLL.Infrastructure
{
    public class IdentityInitializer
    {
        private class Config
        {
            public List<UserDTO> Users { get; set; }
        }
        public async Task InitializeAsync(UserManager<User> userManager)
        {
            var users = GetUsers().Users;
            var readyUsers = UserDTOtoUser(users);
            for(var i = 0; i < readyUsers.Count; ++i)
            {
                if (await userManager.FindByEmailAsync(readyUsers[i].Email) == null)
                {
                    var result = await userManager.CreateAsync(readyUsers[i], users[i].Password);
                }
            }
        }
        private List<User> UserDTOtoUser(List<UserDTO> users)
        {
            var config = new MapperConfiguration(cfg => {
                cfg.AddProfile<UserUserDTOMap>();
            });
            var mapper = config.CreateMapper();
            List<User> readyUsers = new();
            foreach(var user in users)
            {
                var userReady = new User();
                mapper.Map(user, userReady);
                userReady.UserName = user.Email;
                readyUsers.Add(userReady);
            }
            return readyUsers;
        }
        private Config GetUsers()
        {
            var builder = new ConfigurationBuilder().AddJsonFile("initialdb.json");
            var configer = builder.Build();
            var config = new Config();
            configer.Bind(config);
            return config;
        }
    }
}
