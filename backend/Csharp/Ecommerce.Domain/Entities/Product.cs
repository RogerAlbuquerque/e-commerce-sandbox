
using Ecommerce.Domain.Enums;
using System.Collections;
using System.Xml.Linq;

namespace Ecommerce.Domain.Entities;

public sealed class Product
{
    public Guid ProductId { get; private set; } = Guid.NewGuid();
    public string Name { get; private set; } = string.Empty;
    public decimal Price { get; private set; }
    public IList<string> HexColor { get; private set; } = [];
    public String? Size { get; private set; }
    public byte Stars { get; private set; }
    public string FeaturedImagePath { get; private set; } = string.Empty;
    public IList<string>? SecondaryImagesPath { get; private set; } = [];
    public DateTime RegisterDate { get; private set; }

    public required ICollection<CategoryProduct> ProductCategories { get; set; }

    public int ProductStateId { get; set; }
    public ProductState? ProductState { get; set; }

    private Product() { }

    public Product(Guid _productId, string _name, decimal _price)
    {
        if (_productId == Guid.Empty)
            throw new ArgumentException("ProductId cannot be empty");

        if (string.IsNullOrWhiteSpace(_name))
            throw new ArgumentException("Name is required.");

        if (_price <= 0)
            throw new ArgumentException("Price must be greater than zero.");


        ProductId = _productId;
        Name = _name;
        Price = _price;
        HexColor = Array.Empty<string>();
        Stars = (byte)0;
        FeaturedImagePath = "";
        SecondaryImagesPath = Array.Empty<string>();
        RegisterDate = DateTime.UnixEpoch;
        ProductCategories = new List<CategoryProduct>();
        ProductStateId = 0;
    }
}
