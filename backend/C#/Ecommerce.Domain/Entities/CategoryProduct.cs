namespace Ecommerce.Domain.Entities;

public sealed class CategoryProduct
{
    public Guid CategoryId { get; private set; }
    public Guid ProductId { get; private set; }
    public Category Category { get; private set; }
    public Product Product { get; private set; }
    public DateTime CreatedAt { get; private set; }
}
