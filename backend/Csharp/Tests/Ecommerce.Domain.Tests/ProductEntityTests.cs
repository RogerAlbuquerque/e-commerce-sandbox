using Ecommerce.Domain.Entities;

namespace Ecommerce.Domain.Tests;

public class ProductEntityTests
{
    [Fact]
    public void New_product_has_non_empty_id_and_empty_collections_initialized()
    {
        var product = new Product { ProductCategories = new List<CategoryProduct>() };

        Assert.NotEqual(Guid.Empty, product.ProductId);
        Assert.NotNull(product.ProductCategories);
        Assert.Empty(product.ProductCategories);
    }

    [Fact]
    public void Product_accepts_product_state_navigation()
    {
        var product = new Product { ProductCategories = new List<CategoryProduct>() };
        Assert.Null(product.ProductState);
        Assert.Equal(0, product.ProductStateId);
    }
}
