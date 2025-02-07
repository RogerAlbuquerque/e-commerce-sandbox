using Ecommerce.Domain.Entities;
using Ecommerce.Domain.Enums;

namespace Ecommerce.Application.DTOs;

public class ProductDTO
{
    public Guid ProductId { get; private set; } = Guid.NewGuid();
    public string Name { get; private set; } = string.Empty;
    public decimal Price { get; private set; }
    public IList<string> HexColor { get; private set; } = [];
    public SizeEnum Size { get; private set; }
    public byte Stars { get; private set; }
    public string FeaturedImagePath { get; private set; } = string.Empty;
    public IList<string>? SecondaryImagesPath { get; private set; } = [];

    public ProductStateDTO? ProductState { get; set; }

}
