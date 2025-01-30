using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Ecommerce.Infrastructure.Context;

public class AppDbContextFactory(IConfiguration configuration) : IDesignTimeDbContextFactory<AppDbContext>
{
    public AppDbContext CreateDbContext(string[] args)
    {
        string connectionstr = configuration.GetConnectionString("Mysql") ?? throw new Exception("The connection string for MySQL was not found.");
        var optionsBuilder = new DbContextOptionsBuilder<AppDbContext>();
        optionsBuilder.UseMySql(connectionstr, ServerVersion.AutoDetect(connectionstr));

        return new AppDbContext(optionsBuilder.Options);
    }

}

