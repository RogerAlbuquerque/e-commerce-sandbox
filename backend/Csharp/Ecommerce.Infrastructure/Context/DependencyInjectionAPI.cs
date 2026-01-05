using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Ecommerce.Domain.Interfaces;
using Ecommerce.Infrastructure.Repositories;
using Ecommerce.Application.Interfaces;
using Ecommerce.Application.Services;
using Ecommerce.Application.DTOMappings;
using EFCore.NamingConventions;
using Npgsql;

namespace Ecommerce.Infrastructure.Context;

public static class DependencyInjectionAPI
{
    public static IServiceCollection AddInfrastructureAPI(this IServiceCollection services, IConfiguration configuration)
    {

//         services.AddDbContext<AppDbContext>(options => options.UseMySql(connectionstr, ServerVersion.AutoDetect(connectionstr)));
//
         var conString = configuration.GetConnectionString("Postgres");
	 var dataSourceBuilder = new NpgsqlDataSourceBuilder(conString);
	 dataSourceBuilder.EnableDynamicJson();
	 var dataSource = dataSourceBuilder.Build();

	services.AddDbContext<AppDbContext>(options =>options.UseNpgsql(dataSource).UseSnakeCaseNamingConvention());

        services.AddScoped<ICategoryRepository, CategoryRepository>();
        services.AddScoped<IProductRepository, ProductRepository>();
        services.AddScoped<ICategoryService, CategoryService>();
        services.AddScoped<IProductService, ProductService>();

        services.AddAutoMapper(typeof(DTOMappingProfile));
        return services;
    }
}
