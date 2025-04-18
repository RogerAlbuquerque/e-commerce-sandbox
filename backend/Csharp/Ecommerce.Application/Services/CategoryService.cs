using AutoMapper;
using Ecommerce.Application.DTOs;
using Ecommerce.Application.Interfaces;
using Ecommerce.Domain.Entities;
using Ecommerce.Domain.Interfaces;

namespace Ecommerce.Application.Services;

public class CategoryService (ICategoryRepository categoryRepository, IMapper mapper) : ICategoryService
{
    private readonly ICategoryRepository _categoryRepository = categoryRepository;
    private readonly IMapper _mapper = mapper;
    public async Task<IEnumerable<CategoryDTO>> GetAllCategories()
    {
        var categoriesEntity = await _categoryRepository.GetCategoriesAsync();
        return _mapper.Map<IEnumerable<CategoryDTO>>(categoriesEntity);
    }

    public async Task<CategoryDTO> GetById(Guid? id)
    {
        var categoryEntity = await _categoryRepository.GetByIdAsync(id);
        return _mapper.Map<CategoryDTO>(categoryEntity);
    }
    public async Task Add(CategoryDTO categoryDto)
    {
        var categoryEntity = _mapper.Map<Category>(categoryDto);
        await _categoryRepository.CreateAsync(categoryEntity);
    }

    public async Task Update(CategoryDTO categoryDto)
    {
        var categoryEntity = _mapper.Map<Category>(categoryDto);
        await _categoryRepository.UpdateAsync(categoryEntity);
    }

    public async Task Remove(Guid? id)
    {
        var categoryEntity = _categoryRepository.GetByIdAsync(id).Result;
        await _categoryRepository.RemoveAsync(categoryEntity);
    }

}
