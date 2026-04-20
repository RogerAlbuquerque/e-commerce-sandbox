using Ecommerce.Application.DTOs;

namespace Ecommerce.Api.Tests.Builders;

internal sealed class CategoryDtoBuilder
{
    private Guid _categoryId = Guid.NewGuid();
    private string _name = "abc";

    public CategoryDtoBuilder WithCategoryId(Guid categoryId)
    {
        _categoryId = categoryId;
        return this;
    }

    public CategoryDtoBuilder WithName(string name)
    {
        _name = name;
        return this;
    }

    public CategoryDTO Build()
    {
        return new CategoryDTO
        {
            CategoryId = _categoryId,
            Name = _name
        };
    }
}