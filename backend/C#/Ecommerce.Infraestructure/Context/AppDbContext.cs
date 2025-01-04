using Ecommerce.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Configuration;

namespace Ecommerce.Infrastructure.Context;

public class AppDbContext(IConfiguration configuration, DbContextOptions options) : DbContext(options)
{
    private readonly IConfiguration _configuration = configuration;

    public DbSet<Product> Products { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        // Configuring an especific error on Ecommerce.Exception project and call here if connection string is null 
        var connectionString = _configuration.GetConnectionString("Mysql") ?? throw new ArgumentException(null);

        optionsBuilder.UseMySQL(connectionString);
    }
}
