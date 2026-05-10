using Ecommerce.Application.DTOs;
using Ecommerce.Domain.Enums;

namespace Ecommerce.Api.Tests.Builders;

internal sealed class ProductDtoBuilder
{
    private Guid _productId = Guid.NewGuid();
    private string _name = "abc";
    private decimal _price = 1m;
    private IList<string> _hexColor = ["#000000"];
    private SizeEnum _size = SizeEnum.Small;
    private byte _stars = 0;
    private string _featuredImagePath = string.Empty;
    private IList<string> _secondaryImagesPath = [];
    private ProductStateDTO _productState = null;

    public ProductDtoBuilder WithProductId(Guid id)
    {
        _productId = id;
        return this;
    }

    public ProductDtoBuilder WithName(string name)
    {
        _name = name;
        return this;
    }

    public ProductDtoBuilder WithPrice(decimal price)
    {
        _price = price;
        return this;
    }

    public ProductDtoBuilder WithHexColor(IList<string>? hexColor)
    {
        _hexColor = hexColor;
        return this;
    }

    public ProductDtoBuilder WithSize(SizeEnum size)
    {
        _size = size;
        return this;
    }

    public ProductDtoBuilder WithStars(byte stars)
    {
        _stars = stars;
        return this;
    }

    public ProductDtoBuilder WithFeaturedImagePath(string path)
    {
        _featuredImagePath = path;
        return this;
    }

    public ProductDtoBuilder WithSecondaryImages(IList<string>? images)
    {
        _secondaryImagesPath = images;
        return this;
    }

    public ProductDtoBuilder WithProductState(ProductStateDTO? state)
    {
        _productState = state;
        return this;
    }

    public ProductDTO Build()
    {
        return new ProductDTO
        {
            ProductId = _productId, 
            Name = _name,
            Price = _price,
            HexColor = _hexColor,
            Size = _size,
            Stars = _stars,
            FeaturedImagePath = _featuredImagePath,
            SecondaryImagesPath = _secondaryImagesPath,
            ProductState = _productState
        };
    }
}