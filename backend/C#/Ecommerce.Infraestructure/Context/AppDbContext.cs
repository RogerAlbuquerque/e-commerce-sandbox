using Ecommerce.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Ecommerce.Infrastructure.Context;

public class AppDbContext(IConfiguration configuration, DbContextOptions options) : DbContext(options)
{
    public DbSet<Product> Products { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<CategoryProduct> CategoriesProducts { get; set; }
    public DbSet<ProductState> ProductStates { get; set; }
}
