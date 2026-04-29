using System.Text.Json;
using Ecommerce.Domain.Entities;

namespace Ecommerce.Infrastructure.Tests.Builders;

internal sealed class CategoryBuilder
{
    private Guid _categoryId = Guid.NewGuid();
    private string _name = "category";

    public CategoryBuilder WithCategoryId(Guid categoryId)
    {
        _categoryId = categoryId;
        return this;
    }

    public CategoryBuilder WithName(string name)
    {
        _name = name;
        return this;
    }

    public Category Build()
    {
        return new Category(_categoryId, _name);
    }
}
