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

    [Fact]
    public async Task CreateNewCategory_returns_BadRequest_when_model_invalid()
    {
        var mock = new Mock<ICategoryService>();
        var controller = new CategoriesController(mock.Object);
        controller.ModelState.AddModelError("Name", "invalid");

        var dto = new CategoryDtoBuilder().Build();
        var response = await controller.CreateNewCategory(dto);

        Assert.IsType<BadRequestObjectResult>(response);
        mock.Verify(s => s.Add(It.IsAny<CategoryDTO>()), Times.Never);
    }

    [Fact]
    public async Task CreateNewCategory_returns_CreatedAtRoute_when_valid()
    {
        var mock = new Mock<ICategoryService>();
        var controller = new CategoriesController(mock.Object);
        var id = Guid.NewGuid();
        var dto = new CategoryDtoBuilder().WithCategoryId(id).Build();

        var response = await controller.CreateNewCategory(dto);

        var created = Assert.IsType<CreatedAtRouteResult>(response);
        Assert.Equal(StatusCodes.Status201Created, created.StatusCode);
        mock.Verify(s => s.Add(dto), Times.Once);
    }

    [Fact]
    public async Task UpdateOneCategory_returns_BadRequest_when_ids_differ()
    {
        var mock = new Mock<ICategoryService>();
        var controller = new CategoriesController(mock.Object);
        var routeId = Guid.NewGuid();
        var dto = new CategoryDtoBuilder().WithCategoryId(Guid.NewGuid()).Build();

        var response = await controller.UpdateOneCategory(routeId, dto);

        Assert.IsType<BadRequestResult>(response);
        mock.Verify(s => s.Update(It.IsAny<CategoryDTO>()), Times.Never);
    }

    [Fact]
    public async Task UpdateOneCategory_returns_Ok_when_success()
    {
        var mock = new Mock<ICategoryService>();
        var controller = new CategoriesController(mock.Object);
        var id = Guid.NewGuid();
        var dto = new CategoryDtoBuilder().WithCategoryId(id).WithName("abcd").Build();

        var response = await controller.UpdateOneCategory(id, dto);

        var ok = Assert.IsType<OkObjectResult>(response);
        Assert.Same(dto, ok.Value);
        mock.Verify(s => s.Update(dto), Times.Once);
    }

    [Fact]
    public async Task UpdateOneCategory_returns_NotFound_when_service_throws()
    {
        var mock = new Mock<ICategoryService>();
        mock.Setup(s => s.Update(It.IsAny<CategoryDTO>())).ThrowsAsync(new KeyNotFoundException());

        var controller = new CategoriesController(mock.Object);
        var id = Guid.NewGuid();
        var dto = new CategoryDtoBuilder().WithCategoryId(id).Build();

        var response = await controller.UpdateOneCategory(id, dto);

        Assert.IsType<NotFoundResult>(response);
    }

    [Fact]
    public async Task Delete_returns_NotFound_when_category_missing()
    {
        var id = Guid.NewGuid();
        var mock = new Mock<ICategoryService>();
        mock.Setup(s => s.GetById(id)).ThrowsAsync(new KeyNotFoundException());

        var controller = new CategoriesController(mock.Object);
        var response = await controller.Delete(id);

        Assert.IsType<NotFoundResult>(response.Result);
        mock.Verify(s => s.Remove(It.IsAny<Guid?>()), Times.Never);
    }

    [Fact]
    public async Task Delete_returns_Ok_when_removed()
    {
        var id = Guid.NewGuid();
        var dto = new CategoryDtoBuilder().WithCategoryId(id).Build();

        var mock = new Mock<ICategoryService>();
        mock.Setup(s => s.GetById(id)).ReturnsAsync(dto);

        var controller = new CategoriesController(mock.Object);
        var response = await controller.Delete(id);

        var ok = Assert.IsType<OkObjectResult>(response.Result);
        Assert.Same(dto, ok.Value);
        mock.Verify(s => s.Remove(id), Times.Once);
    }
}