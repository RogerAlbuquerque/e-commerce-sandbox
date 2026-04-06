using Ecommerce.Application.DTOs;
using Ecommerce.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Ecommerce.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CategoriesController(ICategoryService categoryService) : ControllerBase
{

    private readonly ICategoryService _categoryService = categoryService;

    [HttpGet]
    public async Task<ActionResult<IEnumerable<CategoryDTO>>> GetCategories()
    {
        var categories = await _categoryService.GetAllCategories();

        return Ok(categories);
    }

    [HttpGet("{id}", Name = "GetCategoryById")]
    public async Task<ActionResult<CategoryDTO>> GetCategoryById(Guid id)
    {
        try
        {
            var category = await _categoryService.GetById(id);
            return Ok(category);
        }
        catch (KeyNotFoundException)
        {
            return NotFound();
        }
    }

    [HttpPost]
    public async Task<ActionResult> CreateNewCategory([FromBody] CategoryDTO categoryDto)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        await _categoryService.Add(categoryDto);

        return new CreatedAtRouteResult("GetCategoryById", new { id = categoryDto.CategoryId, categoryDto });
    }

    [HttpPut("{id}")]
    public async Task<ActionResult> UpdateOneCategory(Guid id, [FromBody] CategoryDTO categoryDto)
    {
        if (id.ToString() != categoryDto.CategoryId.ToString())
        {
            return BadRequest();
        }

        try
        {
            await _categoryService.Update(categoryDto);
            return Ok(categoryDto);
        }
        catch (KeyNotFoundException)
        {
            return NotFound();
        }
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<CategoryDTO>> Delete(Guid id)
    {
        CategoryDTO categoryDto;
        try
        {
            categoryDto = await _categoryService.GetById(id);
        }
        catch (KeyNotFoundException)
        {
            return NotFound();
        }

        await _categoryService.Remove(id);
        return Ok(categoryDto);
    }
}
