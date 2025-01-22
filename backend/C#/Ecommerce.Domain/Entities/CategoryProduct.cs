namespace Ecommerce.Domain.Entities;

public class CategoryProduct
{
    public int CategoryId { get; set; }
    public int ProductId { get; set; }
    public Category Category { get; set; }
    public Product Product { get; set; }
    public DateTime CreatedAt { get; set; }
}
