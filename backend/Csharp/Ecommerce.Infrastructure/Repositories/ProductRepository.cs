using Ecommerce.Domain.Entities;
using Ecommerce.Domain.Interfaces;
using Ecommerce.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;

namespace Ecommerce.Infrastructure.Repositories;

public class ProductRepository(AppDbContext AppContext) : IProductRepository
{
    private readonly AppDbContext _context = AppContext;

    public async Task<IEnumerable<Product>> GetProductsAsync()
    {
        return await _context.Products.ToListAsync();
    }

    public async Task<Product> GetByIdAsync(Guid? id)
    {
        var product = await _context.Products.Include(c => c.ProductCategories).SingleOrDefaultAsync(p => p.ProductId == id);

        if (product == null)
        {
            throw new NotImplementedException();
        }

        return product;
    }


    public async Task<Product> CreateAsync(Product product)
    {
        Console.WriteLine("---------------------------------------------------------------------------------------");
        Console.WriteLine(product.Stars);
        Console.WriteLine("---------------------------------------------------------------------------------------");
        _context.Add(product);

        await _context.SaveChangesAsync();
       
        return product;
    }

    public async Task<Product> UpdateAsync(Product product)
    {
        _context.Update(product);
        await _context.SaveChangesAsync();
        return product;
    }

    public async Task<Product> RemoveAsync(Product product)
    {
        _context.Remove(product);
        await _context.SaveChangesAsync();
        return product;
    }


}
