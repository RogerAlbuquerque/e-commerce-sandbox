using Ecommerce.Domain.Entities;

namespace Ecommerce.Domain.Tests;

public class ProductStateEntityTests
{
    [Fact]
    public void Default_instance_has_zeroed_flags_and_null_product()
    {
        var state = new ProductState();

        Assert.Equal(0, state.ProductStateId);
        Assert.False(state.Sale);
        Assert.False(state.NewProduct);
        Assert.False(state.TopProduct);
        Assert.Null(state.Product);
    }
}
