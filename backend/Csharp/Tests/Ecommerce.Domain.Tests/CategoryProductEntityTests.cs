using Ecommerce.Domain.Entities;

namespace Ecommerce.Domain.Tests;

public class CategoryProductEntityTests
{
    [Fact]
    public void Default_instance_has_empty_keys_and_null_navigations()
    {
        var link = new CategoryProduct();

        Assert.Equal(Guid.Empty, link.CategoryId);
        Assert.Equal(Guid.Empty, link.ProductId);
        Assert.Null(link.Category);
        Assert.Null(link.Product);
        Assert.Equal(default, link.CreatedAt);
    }
}
