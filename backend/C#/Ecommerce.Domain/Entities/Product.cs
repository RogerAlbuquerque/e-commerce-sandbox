using Ecommerce.Domain.Entities.ProductSubEntitiesType;

namespace Ecommerce.Domain.Entities;

public sealed class Product
{
    public Guid ProductId { get; private set; } = Guid.NewGuid();
    public string Name { get; private set; } = string.Empty;
    public decimal Price { get; private set; }
    public int Stars {  get; private set; }
    public string? Size { get; private set; }
    public IList<string> Color { get; private set; } = [];
    public IList<string> ProductCategories { get; private set; } = [];
    public ImagesPath ImagesPath { get; private set; } = new ImagesPath();
    public ProductState ProductState { get; set; } = new ProductState();
    public DateTime RegisterDate { get; private set; }

}
