namespace Ecommerce.Domain.Entities;

public sealed class ProductState
{
    public int ProductStateId { get; private set; }
    public bool Sale { get; private set; }
    public bool NewProduct { get; private set; }
    public bool TopProduct { get; private set; }

   public Product Product { get; set; }
}
