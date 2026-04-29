namespace Ecommerce.Domain.Entities;

public sealed class Category
{
    public Guid CategoryId { get; private set; }
    public string Name { get; private set; } = string.Empty;
    public ICollection<CategoryProduct>? CategoryProducts { get; set; }

    private Category() { }

    public Category(Guid _categoryId, string _name) 
    {
        if (_categoryId == Guid.Empty)
            throw new ArgumentException("_categoryId cannot be empty");

        if (string.IsNullOrWhiteSpace(_name))
            throw new ArgumentException("Name is required.");

        CategoryId = _categoryId;
        Name = _name;
    }

}
