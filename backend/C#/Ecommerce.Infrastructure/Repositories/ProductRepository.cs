using Ecommerce.Domain.Entities;
using Ecommerce.Domain.Interfaces;
using Ecommerce.Infrastructure.Context;

namespace Ecommerce.Infrastructure.Repositories;

public class ProductRepository(AppDbContext AppContext) : IProductRepository
{
    private readonly AppDbContext _context = AppContext;

    public Task<IEnumerable<Product>> GetProductsAsync()
    {
        throw new NotImplementedException();
    }

    public Task<Product> GetByIdAsync(int? id)
    {
        throw new NotImplementedException();
    }

    public async Task<Product> CreateAsync(Product product)
    {
        _context.Add(product);

        await _context.SaveChangesAsync();
       
        return product;
    }

    public Task<Product> UpdateAsync(Product product)
    {
        throw new NotImplementedException();
    }

    public Task<Product> RemoveAsync(Product product)
    {
        throw new NotImplementedException();
    }

}
