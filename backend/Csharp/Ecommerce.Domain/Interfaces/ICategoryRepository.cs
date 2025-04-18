using Ecommerce.Domain.Entities;

namespace Ecommerce.Domain.Interfaces;
public interface ICategoryRepository
{
    Task<IEnumerable<Category>> GetCategoriesAsync();
    Task<Category> GetByIdAsync(Guid? id);
    Task<Category> CreateAsync(Category category);
    Task<Category> UpdateAsync(Category category);
    Task<Category> RemoveAsync(Category category);
}
