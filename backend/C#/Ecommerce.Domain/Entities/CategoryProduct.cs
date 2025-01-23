namespace Ecommerce.Domain.Entities;

public class CategoryProduct
{
    public Guid CategoryId { get; set; }
    public Guid ProductId { get; set; }
    public Category Category { get; set; }
    public Product Product { get; set; }
    public DateTime CreatedAt { get; set; }
}
