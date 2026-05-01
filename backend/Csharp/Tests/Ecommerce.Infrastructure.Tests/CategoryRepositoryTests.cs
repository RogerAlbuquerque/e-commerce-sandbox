
using Ecommerce.Infrastructure.Repositories;
using Ecommerce.Infrastructure.Tests.Builders;

namespace Ecommerce.Infrastructure.Tests;

public class CategoryRepositoryTests
{
    [Fact]
    public async Task GetCategoriesAsync_returns_all()
    {
        await using var ctx = AppDbContextTestFactory.CreateInMemoryContext();
        ctx.Categories.AddRange(
            new CategoryBuilder().WithName("a").Build(),
            new CategoryBuilder().WithName("b").Build());
        await ctx.SaveChangesAsync();

        var sut = new CategoryRepository(ctx);
        var list = (await sut.GetCategoriesAsync()).ToList();

        Assert.Equal(2, list.Count);
    }

    [Fact]
    public async Task GetByIdAsync_returns_category_when_found()
    {
        var id = Guid.NewGuid();
        await using var ctx = AppDbContextTestFactory.CreateInMemoryContext();
        var cat = new CategoryBuilder().WithCategoryId(id).WithName("books").Build();
        ctx.Categories.Add(cat);
        await ctx.SaveChangesAsync();

        var sut = new CategoryRepository(ctx);
        var found = await sut.GetByIdAsync(id);

        Assert.Equal(id, found.CategoryId);
        Assert.Equal("books", found.Name);
    }

    [Fact]
    public async Task GetByIdAsync_throws_when_missing()
    {
        await using var ctx = AppDbContextTestFactory.CreateInMemoryContext();
        var sut = new CategoryRepository(ctx);

        await Assert.ThrowsAsync<KeyNotFoundException>(() => sut.GetByIdAsync(Guid.NewGuid()));
    }
}