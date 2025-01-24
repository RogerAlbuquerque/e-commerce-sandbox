namespace Ecommerce.Domain.Entities;

public sealed class Product
{
    public Guid ProductId { get; private set; } = Guid.NewGuid();
    public string Name { get; private set; } = string.Empty;
    public decimal Price { get; private set; }
    public IList<string> HexColor { get; private set; } = [];
    public string? Size { get; private set; }       // Need to be ENUM
    public int Stars {  get; private set; }         // Need to be less integer type
    public string FeaturedImagePath { get; private set; } = string.Empty;
    public IList<string>? SecondaryImagesPath { get; private set; } = [];
    public DateTime RegisterDate { get; private set; }

    public required ICollection<CategoryProduct> ProductCategories { get; set; }

    public int ProductStateId { get; set; }
    public ProductState? ProductState { get; set; }

}
