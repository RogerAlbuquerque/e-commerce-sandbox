using AutoMapper;
using Ecommerce.Application.DTOs;
using Ecommerce.Application.Interfaces;
using Ecommerce.Domain.Entities;
using Ecommerce.Domain.Interfaces;

namespace Ecommerce.Application.Services;

public class ProductService(IProductRepository productRepository, IMapper mapper) : IProductService
{
    private readonly IProductRepository _productRepository = productRepository;
    private readonly IMapper _mapper = mapper;
    public async Task<IEnumerable<ProductDTO>> GetProducts()
    {
        var productsEntity = await _productRepository.GetProductsAsync();
        return _mapper.Map<IEnumerable<ProductDTO>>(productsEntity);
    }

    public async Task<ProductDTO> GetById(Guid? id)
    {
        var productEntity = await _productRepository.GetByIdAsync(id);
        return _mapper.Map<ProductDTO>(productEntity);
    }
    public async Task Add(ProductDTO productDto)
    {
        var productEntity = _mapper.Map<Product>(productDto);
        await _productRepository.CreateAsync(productEntity);
    }

    public async Task Update(ProductDTO productDto)
    {
        var productEntity = _mapper.Map<Product>(productDto);
        await _productRepository.UpdateAsync(productEntity);
    }

    public async Task Remove(Guid? id)
    {
        var productEntity = _productRepository.GetByIdAsync(id).Result;
        await _productRepository.RemoveAsync(productEntity);
    }

}
