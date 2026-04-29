using System.Text.Json;
using Ecommerce.Domain.Entities;

namespace Ecommerce.Infrastructure.Tests.Builders;

internal sealed class ProductBuilder
{
    private Guid _productId = Guid.NewGuid();
    private string _name = "product";
    private decimal _price;

    public ProductBuilder WithProductId(Guid productId)
    {
        _productId = productId;
        return this;
    }

    public ProductBuilder WithName(string name)
    {
        _name = name;
        return this;
    }

    public ProductBuilder WithPrice(decimal price)
    {
        _price = price;
        return this;
    }

    public Product Build()
    {
        return new Product(_productId, _name, _price)
        {
            ProductCategories = new List<CategoryProduct>() // Required Element
        };

    }
}
