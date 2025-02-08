using Ecommerce.Application.DTOs;
using Ecommerce.Application.Interfaces;

namespace Ecommerce.Application.Services;

public class ProductService : IProductService
{
    public Task<IEnumerable<ProductDTO>> GetProdutos()
    {
        throw new NotImplementedException();
    }

    public Task<ProductDTO> GetById(int? id)
    {
        throw new NotImplementedException();
    }
    public Task Add(ProductDTO productDto)
    {
        throw new NotImplementedException();
    }

    public Task Update(ProductDTO productDto)
    {
        throw new NotImplementedException();
    }

    public Task Remove(int? id)
    {
        throw new NotImplementedException();
    }

}
