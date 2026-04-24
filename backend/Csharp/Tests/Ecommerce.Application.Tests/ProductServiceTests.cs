using AutoMapper;
using Ecommerce.Application.DTOs;
using Ecommerce.Application.Services;
using Ecommerce.Domain.Entities;
using Ecommerce.Domain.Interfaces;
using Moq;

namespace Ecommerce.Application.Tests;

public class ProductServiceTests
{
    private static Product SampleProduct() =>
       new() { ProductCategories = new List<CategoryProduct>() };

    [Fact]
    public async Task GetProducts_calls_repository_and_maps_result()
    {
        var entities = new List<Product> { SampleProduct() };
        var expectedDtos = new List<ProductDTO> { new() { Name = "A", Price = 10m } };

        var repo = new Mock<IProductRepository>();
        repo.Setup(r => r.GetProductsAsync()).ReturnsAsync(entities);

        var mapper = new Mock<IMapper>();
        mapper.Setup(m => m.Map<IEnumerable<ProductDTO>>(entities)).Returns(expectedDtos);

        var sut = new ProductService(repo.Object, mapper.Object);
        var result = await sut.GetProducts();

        Assert.Same(expectedDtos, result);
        repo.Verify(r => r.GetProductsAsync(), Times.Once);
        mapper.Verify(m => m.Map<IEnumerable<ProductDTO>>(entities), Times.Once);
    }


    [Fact]
    public async Task GetById_calls_repository_and_maps()
    {
        var id = Guid.NewGuid();
        var entity = SampleProduct();
        var dto = new ProductDTO { Name = "B", Price = 5m };

        var repo = new Mock<IProductRepository>();
        repo.Setup(r => r.GetByIdAsync(id)).ReturnsAsync(entity);

        var mapper = new Mock<IMapper>();
        mapper.Setup(m => m.Map<ProductDTO>(entity)).Returns(dto);

        var sut = new ProductService(repo.Object, mapper.Object);
        var result = await sut.GetById(id);

        Assert.Same(dto, result);
        repo.Verify(r => r.GetByIdAsync(id), Times.Once);
    }


    [Fact]
    public async Task Add_maps_dto_and_creates_in_repository()
    {
        var dto = new ProductDTO { Name = "C", Price = 1m };
        var entity = SampleProduct();

        var repo = new Mock<IProductRepository>();
        var mapper = new Mock<IMapper>();
        mapper.Setup(m => m.Map<Product>(dto)).Returns(entity);

        var sut = new ProductService(repo.Object, mapper.Object);
        await sut.Add(dto);

        mapper.Verify(m => m.Map<Product>(dto), Times.Once);
        repo.Verify(r => r.CreateAsync(entity), Times.Once);
    }


    [Fact]
    public async Task Update_maps_dto_and_updates_repository()
    {
        var dto = new ProductDTO { Name = "D", Price = 2m };
        var entity = SampleProduct();

        var repo = new Mock<IProductRepository>();
        var mapper = new Mock<IMapper>();
        mapper.Setup(m => m.Map<Product>(dto)).Returns(entity);

        var sut = new ProductService(repo.Object, mapper.Object);
        await sut.Update(dto);

        repo.Verify(r => r.UpdateAsync(entity), Times.Once);
    }

    [Fact]
    public async Task Remove_fetches_entity_then_deletes()
    {
        var id = Guid.NewGuid();
        var entity = SampleProduct();

        var repo = new Mock<IProductRepository>();
        repo.Setup(r => r.GetByIdAsync(id)).ReturnsAsync(entity);

        var mapper = new Mock<IMapper>();
        var sut = new ProductService(repo.Object, mapper.Object);

        await sut.Remove(id);

        repo.Verify(r => r.GetByIdAsync(id), Times.Once);
        repo.Verify(r => r.RemoveAsync(entity), Times.Once);
    }
}