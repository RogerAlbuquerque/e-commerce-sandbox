namespace Ecommerce.Application.DTOs;

public class ProductStateDTO
{
    public int ProductStateId { get; private set; }
    public bool Sale { get; private set; }
    public bool NewProduct { get; private set; }
    public bool TopProduct { get; private set; }
}
