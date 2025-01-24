using Ecommerce.Domain.Entities;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore;

namespace Ecommerce.Infrastructure.Context;

public class AppDbContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<Product> Products { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<CategoryProduct> CategoriesProducts { get; set; }
    public DbSet<ProductState> ProductStates { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<CategoryProduct>()
            .HasKey(pc => new { pc.ProductId, pc.CategoryId });

        modelBuilder.Entity<CategoryProduct>()
            .HasOne(pc => pc.Product)
            .WithMany(p => p.ProductCategories)
            .HasForeignKey(pc => pc.ProductId);

        modelBuilder.Entity<CategoryProduct>()
            .HasOne(pc => pc.Category)
            .WithMany(c => c.CategoryProducts)
            .HasForeignKey(pc => pc.CategoryId);
    }
}

public class AppDbContextFactory : IDesignTimeDbContextFactory<AppDbContext>
{
    public AppDbContext CreateDbContext(string[] args)
    {
        var optionsBuilder = new DbContextOptionsBuilder<AppDbContext>();
        optionsBuilder.UseMySql("Server=localhost;port=3306;Database=ecommercesandbox;User=root;password=admin;", ServerVersion.AutoDetect("Server=localhost;port=3306;Database=ecommercesandbox;User=root;password=admin;"));

        return new AppDbContext(optionsBuilder.Options);
    }

}
