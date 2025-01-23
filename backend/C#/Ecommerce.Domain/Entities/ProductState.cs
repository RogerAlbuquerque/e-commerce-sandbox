namespace Ecommerce.Domain.Entities;

public sealed class ProductState
{
    public int ProductStateId { get; set; }
    public bool Sale { get; set; }
    public bool NewProduct { get; set; }
    public bool TopProduct { get; set; }

   public Product Product { get; set; }
}
