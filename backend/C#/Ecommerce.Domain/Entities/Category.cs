namespace Ecommerce.Domain.Entities;

public sealed class Category
{
    public Guid CategoryId { get; private set; }
    public string Name { get; private set; } = string.Empty;
    public ICollection<CategoryProduct> CategoryProducts { get; set; }
}
