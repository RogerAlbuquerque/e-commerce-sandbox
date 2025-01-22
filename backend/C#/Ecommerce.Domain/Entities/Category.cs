namespace Ecommerce.Domain.Entities;

public class Category
{
    public int CategoryId { get; set; }
    public string Name { get; private set; } = string.Empty;
    public ICollection<CategoryProduct> CategoryProducts { get; set; }
}
