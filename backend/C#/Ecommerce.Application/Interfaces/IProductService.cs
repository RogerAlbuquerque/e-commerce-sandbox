using Ecommerce.Application.DTOs;

namespace Ecommerce.Application.Interfaces;
public interface IProductService
{
    Task<IEnumerable<ProductDTO>> GetProducts();
    Task<ProductDTO> GetById(Guid? id);
    Task Add(ProductDTO productDto);
    Task Update(ProductDTO productDto);
    Task Remove(Guid? id);
}
