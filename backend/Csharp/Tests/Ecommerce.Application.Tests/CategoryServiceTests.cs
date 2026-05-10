
using AutoMapper;
using Ecommerce.Application.DTOs;
using Ecommerce.Application.Services;
using Ecommerce.Domain.Entities;
using Ecommerce.Domain.Interfaces;
using Moq;

namespace Ecommerce.Application.Tests;

public class CategoryServiceTests
{
    [Fact]
    public async Task GetAllCategories_calls_repository_and_maps()
    {
        var entities = new List<Category> { new() };
        var dtos = new List<CategoryDTO> { new() { Name = "Cat" } };

        var repo = new Mock<ICategoryRepository>();
        repo.Setup(r => r.GetCategoriesAsync()).ReturnsAsync(entities);

        var mapper = new Mock<IMapper>();
        mapper.Setup(m => m.Map<IEnumerable<CategoryDTO>>(entities)).Returns(dtos);

        var sut = new CategoryService(repo.Object, mapper.Object);
        var result = await sut.GetAllCategories();

        Assert.Same(dtos, result);
        repo.Verify(r => r.GetCategoriesAsync(), Times.Once);
    }


    [Fact]
    public async Task GetById_maps_entity()
    {
        var id = Guid.NewGuid();
        var entity = new Category();
        var dto = new CategoryDTO { Name = "X" };

        var repo = new Mock<ICategoryRepository>();
        repo.Setup(r => r.GetByIdAsync(id)).ReturnsAsync(entity);

        var mapper = new Mock<IMapper>();
        mapper.Setup(m => m.Map<CategoryDTO>(entity)).Returns(dto);

        var sut = new CategoryService(repo.Object, mapper.Object);
        var result = await sut.GetById(id);

        Assert.Same(dto, result);
    }

    [Fact]
    public async Task Add_maps_and_creates()
    {
        var dto = new CategoryDTO { Name = "New" };
        var entity = new Category();

        var repo = new Mock<ICategoryRepository>();
        var mapper = new Mock<IMapper>();
        mapper.Setup(m => m.Map<Category>(dto)).Returns(entity);

        var sut = new CategoryService(repo.Object, mapper.Object);
        await sut.Add(dto);

        repo.Verify(r => r.CreateAsync(entity), Times.Once);
    }

    [Fact]
    public async Task Update_maps_and_updates()
    {
        var dto = new CategoryDTO { Name = "Up" };
        var entity = new Category();

        var repo = new Mock<ICategoryRepository>();
        var mapper = new Mock<IMapper>();
        mapper.Setup(m => m.Map<Category>(dto)).Returns(entity);

        var sut = new CategoryService(repo.Object, mapper.Object);
        await sut.Update(dto);

        repo.Verify(r => r.UpdateAsync(entity), Times.Once);
    }

    [Fact]
    public async Task Remove_fetches_then_deletes()
    {
        var id = Guid.NewGuid();
        var entity = new Category();

        var repo = new Mock<ICategoryRepository>();
        repo.Setup(r => r.GetByIdAsync(id)).ReturnsAsync(entity);

        var mapper = new Mock<IMapper>();
        var sut = new CategoryService(repo.Object, mapper.Object);

        await sut.Remove(id);

        repo.Verify(r => r.RemoveAsync(entity), Times.Once);
    }
}