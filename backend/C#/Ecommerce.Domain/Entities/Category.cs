namespace Ecommerce.Domain.Entities;

public class Category
{
    public Guid CategoryId { get; set; }
    public string Name { get; private set; } = string.Empty;
    public ICollection<CategoryProduct> CategoryProducts { get; set; }
}
