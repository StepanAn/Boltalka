using ModelsDTO;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Repository.Interfaces;

namespace Repository.Infrastructure
{
    public static class ServicesInitializer
    {
        public static void AddRepository(this IServiceCollection services, string defaultConnection)
        {
            services.AddDbContext<ApplicationContext>(options =>
            options.UseSqlServer(defaultConnection));
            services.AddIdentity<Models.User, IdentityRole>(opts => {
                opts.Password.RequireNonAlphanumeric = false;
            })
                .AddEntityFrameworkStores<ApplicationContext>();
            services.AddTransient<ApplicationContext>();
            services.AddTransient<IRepository<PostDTO>, PostRepository>();
            services.AddScoped<Data>();
        }
    }
}
