using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Models;
using ModelsDTO;
using System.Threading.Tasks;

namespace SocialNetworkBLL.AccountControl
{
    class SignManager
    {
        private readonly SignInManager<User> signInManager;
        private readonly UserManager<User> userManager;
        private readonly IMapper mapper;
        public SignManager(SignInManager<User> signInManager, UserManager<User> userManager, IMapper mapper)
        {
            this.signInManager = signInManager;
            this.userManager = userManager;
            this.mapper = mapper;
        }
        public async Task<bool> SignInAsync(string email, string password)
        {
            var user = await userManager.FindByEmailAsync(email);
            if(user != null)
            {
                var result = await signInManager.CheckPasswordSignInAsync(user, password, false);
                if (result.Succeeded)
                {
                    return true;
                }
            }
            return false;
        }
        public async Task<bool> ChekIn(UserDTO userDTO)
        {
            User user = new();
            mapper.Map(userDTO, user);
            if (await CheckEmail(userDTO.Email))
            {
                var result = await userManager.CreateAsync(user, userDTO.Password);
                if (result.Succeeded)
                {
                    return true;
                }
            }
            return false;

        }
        private async Task<bool> CheckEmail(string email)
        {
            var user = await userManager.FindByEmailAsync(email);
            if(user != null)
            {
                return false;
            }
            return true;
        }
    }
}
