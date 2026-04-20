using Ecommerce.Api.Controllers;
using Ecommerce.Api.Tests.Builders;
using Ecommerce.Application.DTOs;
using Ecommerce.Application.Interfaces;
using Microsoft.AspNetCore.Http;
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

        Assert.IsType<NotFoundResult>(response.Result);
    }

    [Fact]
    public async Task CreatNewProduct_returns_BadRequest_when_model_invalid()
    {
        var mock = new Mock<IProductService>();
        var controller = new ProductsController(mock.Object);
        controller.ModelState.AddModelError("Name", "invalid");

        var dto = new ProductDtoBuilder().Build();
        var response = await controller.CreatNewProduct(dto);

        Assert.IsType<BadRequestObjectResult>(response);
        mock.Verify(s => s.Add(It.IsAny<ProductDTO>()), Times.Never);
    }

    [Fact]
    public async Task CreatNewProduct_returns_CreatedAtRoute_when_valid()
    {
        var mock = new Mock<IProductService>();
        var controller = new ProductsController(mock.Object);
        var id = Guid.NewGuid();
        var dto = new ProductDtoBuilder().WithProductId(id).Build();

        var response = await controller.CreatNewProduct(dto);

        var created = Assert.IsType<CreatedAtRouteResult>(response);
        Assert.Equal(StatusCodes.Status201Created, created.StatusCode);
        mock.Verify(s => s.Add(dto), Times.Once);
    }

    [Fact]
    public async Task UpdateOneProduct_returns_BadRequest_when_ids_differ()
    {
        var mock = new Mock<IProductService>();
        var controller = new ProductsController(mock.Object);
        var routeId = Guid.NewGuid();
        var dto = new ProductDtoBuilder().WithProductId(Guid.NewGuid()).Build();

        var response = await controller.UpdateOneProduct(routeId, dto);

        Assert.IsType<BadRequestResult>(response);
        mock.Verify(s => s.Update(It.IsAny<ProductDTO>()), Times.Never);
    }

    [Fact]
    public async Task UpdateOneProduct_returns_Ok_when_success()
    {
        var mock = new Mock<IProductService>();
        var controller = new ProductsController(mock.Object);
        var id = Guid.NewGuid();
        var dto = new ProductDtoBuilder().WithProductId(id).WithName("abcd").WithPrice(3m).Build();

        var response = await controller.UpdateOneProduct(id, dto);

        var ok = Assert.IsType<OkObjectResult>(response);
        Assert.Same(dto, ok.Value);
        mock.Verify(s => s.Update(dto), Times.Once);
    }


    [Fact]
    public async Task UpdateOneProduct_returns_NotFound_when_service_throws()
    {
        var mock = new Mock<IProductService>();
        mock.Setup(s => s.Update(It.IsAny<ProductDTO>())).ThrowsAsync(new KeyNotFoundException());

        var controller = new ProductsController(mock.Object);
        var id = Guid.NewGuid();
        var dto = new ProductDtoBuilder().WithProductId(id).Build();

        var response = await controller.UpdateOneProduct(id, dto);

        Assert.IsType<NotFoundResult>(response);
    }

    [Fact]
    public async Task Delete_returns_NotFound_when_product_missing()
    {
        var id = Guid.NewGuid();
        var mock = new Mock<IProductService>();
        mock.Setup(s => s.GetById(id)).ThrowsAsync(new KeyNotFoundException());

        var controller = new ProductsController(mock.Object);
        var response = await controller.Delete(id);

        Assert.IsType<NotFoundResult>(response.Result);
        mock.Verify(s => s.Remove(It.IsAny<Guid?>()), Times.Never);
    }


    [Fact]
    public async Task Delete_returns_Ok_when_removed()
    {
        var id = Guid.NewGuid();
        var dto = new ProductDtoBuilder().WithProductId(id).Build();

        var mock = new Mock<IProductService>();
        mock.Setup(s => s.GetById(id)).ReturnsAsync(dto);

        var controller = new ProductsController(mock.Object);
        var response = await controller.Delete(id);

        var ok = Assert.IsType<OkObjectResult>(response.Result);
        Assert.Same(dto, ok.Value);
        mock.Verify(s => s.Remove(id), Times.Once);
    }
}