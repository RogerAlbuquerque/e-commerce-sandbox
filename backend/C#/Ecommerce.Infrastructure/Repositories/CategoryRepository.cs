using Ecommerce.Domain.Entities;
using Ecommerce.Domain.Interfaces;
using Ecommerce.Infrastructure.Context;

namespace Ecommerce.Infrastructure.Repositories;

public class CategoryRepository(AppDbContext AppContext) : ICategoryRepository
{
    private readonly AppDbContext _context = AppContext;

    public Task<IEnumerable<Category>> GetCategoriesAsync()
    {
        throw new NotImplementedException();
    }
    public Task<Category> GetByIdAsync(int? id)
    {
        throw new NotImplementedException();
    }

    public Task<Category> CreateAsync(Category category)
    {
        throw new NotImplementedException();
    }
    public Task<Category> UpdateAsync(Category category)
    {
        throw new NotImplementedException();
    }

    public Task<Category> RemoveAsync(Category category)
    {
        throw new NotImplementedException();
    }

}
