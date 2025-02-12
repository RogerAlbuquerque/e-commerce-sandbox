using Ecommerce.Domain.Entities;
using Ecommerce.Domain.Interfaces;
using Ecommerce.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;

namespace Ecommerce.Infrastructure.Repositories;

public class CategoryRepository(AppDbContext AppContext) : ICategoryRepository
{
    private readonly AppDbContext _context = AppContext;

    public async Task<IEnumerable<Category>> GetCategoriesAsync()
    {
        return await _context.Categories.ToListAsync();
    }

    public async Task<Category> GetByIdAsync(Guid? id)
    {
        return await _context.Categories.FindAsync(id) ?? throw new NotImplementedException();
    }


    public async Task<Category> CreateAsync(Category category)
    {
        _context.Add(category);

        await _context.SaveChangesAsync();

        return category;
    }

    public async Task<Category> UpdateAsync(Category category)
    {
        _context.Update(category);
        await _context.SaveChangesAsync();
        return category;
    }

    public async Task<Category> RemoveAsync(Category category)
    {
        _context.Remove(category);
        await _context.SaveChangesAsync();
        return category;
    }

}
