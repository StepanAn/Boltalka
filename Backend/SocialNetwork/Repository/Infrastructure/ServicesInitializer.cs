using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Models;

namespace Repository.Infrastructure
{
    public static class ServicesInitializer
    {
        public static void AddRepository(this IServiceCollection services, string defaultConnection)
        {
            services.AddDbContext<ApplicationContext>(options =>
            options.UseSqlServer(defaultConnection));
            services.AddIdentity<User, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationContext>();
            services.AddTransient<ApplicationContext>();
        }
    }
}
