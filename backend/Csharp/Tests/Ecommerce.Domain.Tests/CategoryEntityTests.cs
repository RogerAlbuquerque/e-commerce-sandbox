using Ecommerce.Domain.Entities;

namespace Ecommerce.Domain.Tests;

public class CategoryEntityTests
{
    [Fact]
    public void New_category_has_default_key_and_null_products_collection()
    {
        var category = new Category();

        Assert.Equal(Guid.Empty, category.CategoryId);
        Assert.Equal(string.Empty, category.Name);
        Assert.Null(category.CategoryProducts);
    }
}
