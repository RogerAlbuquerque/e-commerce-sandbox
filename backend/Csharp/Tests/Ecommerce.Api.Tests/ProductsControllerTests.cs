using Ecommerce.Api.Controllers;
using Ecommerce.Api.Tests.Builders;
using Ecommerce.Application.DTOs;
using Ecommerce.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Moq;

namespace Ecommerce.Api.Tests;

public class ProductsControllerTests
{
    [Fact]
    public async Task GetAllProducts_returns_Ok_With_payload()
    {
        var list = new List<ProductDTO> { new ProductDtoBuilder().Build() };
        var mock = new Mock<IProductService>();
        mock.Setup(s => s.GetProducts()).ReturnsAsync(list);

        var controller = new ProductsController(mock.Object);
        var response = await controller.GetAllProducts();

        var ok = Assert.IsType<OkObjectResult>(response.Result);
        Assert.Same(list, ok.Value);
    }

    [Fact]
    public async Task GetProductsById_returns_Ok_when_found()
    {
        var id = Guid.NewGuid();
        var dto = new ProductDtoBuilder().WithProductId(id).Build();

        var mock = new Mock<IProductService>();
        mock.Setup(s => s.GetById(id)).ReturnsAsync(dto);

        var controller = new ProductsController(mock.Object);
        var response = await controller.GetProductsById(id);

        var ok = Assert.IsType<OkObjectResult>(response.Result);
        Assert.Same(dto, ok.Value);
    }

    [Fact]
    public async Task GetProductsById_returns_NotFound_when_missing()
    {
        var id = Guid.NewGuid();
        var mock = new Mock<IProductService>();
        mock.Setup(s => s.GetById(id)).ThrowsAsync(new KeyNotFoundException());

        var controller = new ProductsController(mock.Object);
        var response = await controller.GetProductsById(id);

        Assert.IsType<NotFoundResult>(respone.Result);
    }
}