
using Ecommerce.Domain.Enums;

namespace Ecommerce.Domain.Entities;

public sealed class Product
{
    public Guid ProductId { get; private set; } = Guid.NewGuid();
    public string Name { get; private set; } = string.Empty;
    public decimal Price { get; private set; }
    public IList<string> HexColor { get; private set; } = [];
    public SizeEnum Size{ get; private set; }      
    public byte Stars {  get; private set; }         
    public string FeaturedImagePath { get; private set; } = string.Empty;
    public IList<string>? SecondaryImagesPath { get; private set; } = [];
    public DateTime RegisterDate { get; private set; }

    public required ICollection<CategoryProduct> ProductCategories { get; set; }

    public int ProductStateId { get; set; }
    public ProductState? ProductState { get; set; }

}
