using Microsoft.Extensions.DependencyInjection;
using Repository.Infrastructure;

namespace SocialNetworkBLL.Infrastructure
{
    public static class AppBuilder
    {
        public static void AddFunctional(this IServiceCollection services, string defaultConnection)
        {
            services.AddRepository(defaultConnection);
        }
    }
}
