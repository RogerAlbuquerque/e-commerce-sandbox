using Ecommerce.Application.DTOs;

namespace Ecommerce.Application.Interfaces;
public interface ICategoryService
{
    Task<IEnumerable<CategoryDTO>> GetAllCategories();
    Task<CategoryDTO> GetById(Guid? id);
    Task Add(CategoryDTO categoryDto);
    Task Update(CategoryDTO categoryDto);
    Task Remove(Guid? id);
}
