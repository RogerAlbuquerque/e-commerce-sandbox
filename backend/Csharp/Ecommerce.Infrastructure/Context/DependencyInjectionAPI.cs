using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Ecommerce.Domain.Interfaces;
using Ecommerce.Infrastructure.Repositories;
using Ecommerce.Application.Interfaces;
using Ecommerce.Application.Services;
using Ecommerce.Application.DTOMappings;

namespace Ecommerce.Infrastructure.Context;

public static class DependencyInjectionAPI
{
    public static IServiceCollection AddInfrastructureAPI(this IServiceCollection services, IConfiguration configuration)
    {
        string connectionstr = configuration.GetConnectionString("Mysql")!
            .Replace("${DB_HOST}", Environment.GetEnvironmentVariable("DB_HOST"))
            .Replace("${DB_PORT}", Environment.GetEnvironmentVariable("DB_PORT"))
            .Replace("${DB_NAME}", Environment.GetEnvironmentVariable("DB_NAME"))
            .Replace("${DB_USER}", Environment.GetEnvironmentVariable("DB_USER"))
            .Replace("${DB_PASSWORD}", Environment.GetEnvironmentVariable("DB_PASSWORD")) ?? throw new Exception("The connection string for MySQL was not found.");
        services.AddDbContext<AppDbContext>(options => options.UseMySql(connectionstr, ServerVersion.AutoDetect(connectionstr)));

        services.AddScoped<ICategoryRepository, CategoryRepository>();
        services.AddScoped<IProductRepository, ProductRepository>();
        services.AddScoped<ICategoryService, CategoryService>();
        services.AddScoped<IProductService, ProductService>();

        services.AddAutoMapper(typeof(DTOMappingProfile));
        return services;
    }
}
