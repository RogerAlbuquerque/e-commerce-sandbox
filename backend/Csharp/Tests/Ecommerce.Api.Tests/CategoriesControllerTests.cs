using Ecommerce.Api.Controllers;
using Ecommerce.Api.Tests.Builders;
using Ecommerce.Application.DTOs;
using Ecommerce.Application.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Moq;

namespace Ecommerce.Api.Tests;
public class categoriesControllerTests
{
    [Fact]
    public async Task GetCategories_returns_Ok_with_payload()
    {
        var list = new List<CategoryDTO> { new CategoryDtoBuilder().Build() };
        var mock = new Mock<ICategoryService>();
        mock.Setup(s => s.GetAllCategories()).ReturnsAsync(list);

        var controller = new CategoriesController(mock.Object);
        var response = await controller.GetCategories();

        var ok = Assert.IsType<OkObjectResult>(response.Result);
        Assert.Same(list, ok.Value);
    }

    [Fact]
    public async Task GetCategoryById_returns_Ok_when_found()
    {
        var id = Guid.NewGuid();
        var dto = new CategoryDtoBuilder().WithCategoryId(id).Build();

        var mock = new Mock<ICategoryService>();
        mock.Setup(s => s.GetById(id)).ReturnsAsync(dto);

        var controller = new CategoriesController(mock.Object);
        var response = await controller.GetCategoryById(id);

        var ok = Assert.IsType<OkObjectResult>(response.Result);
        Assert.Same(dto, ok.Value);
    }

    [Fact]
    public async Task GetCategoryById_returns_NotFound_when_missing()
    {
        var id = Guid.NewGuid();
        var mock = new Mock<ICategoryService>();
        mock.Setup(s => s.GetById(id)).ThrowsAsync(new KeyNotFoundException());

        var controller = new CategoriesController(mock.Object);
        var response = await controller.GetCategoryById(id);

        Assert.IsType<NotFoundResult>(response.Result);
    }

}