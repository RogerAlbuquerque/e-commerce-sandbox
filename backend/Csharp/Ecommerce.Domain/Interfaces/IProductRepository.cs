using Ecommerce.Domain.Entities;

namespace Ecommerce.Domain.Interfaces;

public interface IProductRepository
{
    Task<IEnumerable<Product>> GetProductsAsync();
    Task<Product> GetByIdAsync(Guid? id);
    Task<Product> CreateAsync(Product product);
    Task<Product> UpdateAsync(Product product);
    Task<Product> RemoveAsync(Product product);

}
