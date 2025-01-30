using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;

namespace Ecommerce.Infrastructure.Context;

public static class DependencyInjectionAPI
{
    public static IServiceCollection AddInfrastructureAPI(this IServiceCollection services, IConfiguration configuration)
    {
        string connectionstr = configuration.GetConnectionString("Mysql") ?? throw new Exception("The connection string for MySQL was not found.");
        services.AddDbContext<AppDbContext>(options => options.UseMySql(connectionstr, ServerVersion.AutoDetect(connectionstr)));
        return services;
    }
}
