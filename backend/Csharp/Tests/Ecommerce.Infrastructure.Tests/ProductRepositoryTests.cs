using Ecommerce.Infrastructure.Tests.Builders;
using Ecommerce.Infrastructure.Repositories;

namespace Ecommerce.Infrastructure.Tests;

public class ProductRepositoryTests
{
    [Fact]
    public async Task GetProductsAsync_returns_all_products()
    {
        await using var ctx = AppDbContextTestFactory.CreateInMemoryContext();
        var a = new ProductBuilder().Build();
        var b = new ProductBuilder().Build();
        ctx.Products.AddRange(a, b);
        await ctx.SaveChangesAsync();

        var sut = new ProductRepository(ctx);
        var list = (await sut.GetProductsAsync()).ToList();

        Assert.Equal(2, list.Count);
    }

    [Fact]
    public async Task GetByIdAsync_returns_product_when_found()
    {
        await using var ctx = AppDbContextTestFactory.CreateInMemoryContext();
        var product = new ProductBuilder().Build();
        ctx.Products.Add(product);
        await ctx.SaveChangesAsync();

        var sut = new ProductRepository(ctx);
        var found = await sut.GetByIdAsync(product.ProductId);

        Assert.Equal(product.ProductId, found.ProductId);
    }

    [Fact]
    public async Task GetByIdAsync_throws_when_missing()
    {
        await using var ctx = AppDbContextTestFactory.CreateInMemoryContext();
        var sut = new ProductRepository(ctx);

        await Assert.ThrowsAsync<KeyNotFoundException>(() => sut.GetByIdAsync(Guid.NewGuid()));
    }

    [Fact]
    public async Task CreateAsync_persists_product()
    {
        await using var ctx = AppDbContextTestFactory.CreateInMemoryContext();
        var sut = new ProductRepository(ctx);
        var product = new ProductBuilder().Build();

        await sut.CreateAsync(product);

        Assert.Single(ctx.Products);
    }

    [Fact]
    public async Task UpdateAsync_modifies_product()
    {
        const string sharedDb = "product-repo-update";
        var id = Guid.NewGuid();

        await using (var ctx = AppDbContextTestFactory.CreateInMemoryContext(sharedDb))
        {
            var product = new ProductBuilder().WithProductId(id).WithName("old").Build();
            ctx.Products.Add(product);
            await ctx.SaveChangesAsync();
        }

        await using (var ctx = AppDbContextTestFactory.CreateInMemoryContext(sharedDb))
        {
            var updated = new ProductBuilder().WithProductId(id).WithName("updated").Build();
            var sut = new ProductRepository(ctx);
            await sut.UpdateAsync(updated);
        }

        await using (var ctx = AppDbContextTestFactory.CreateInMemoryContext(sharedDb))
        {
            var sut = new ProductRepository(ctx);
            var again = await sut.GetByIdAsync(id);
            Assert.Equal("updated", again.Name);
        }
    }

    [Fact]
    public async Task RemoveAsync_deletes_product()
    {
        await using var ctx = AppDbContextTestFactory.CreateInMemoryContext();
        var product = new ProductBuilder().Build();
        ctx.Products.Add(product);
        await ctx.SaveChangesAsync();

        var sut = new ProductRepository(ctx);
        await sut.RemoveAsync(product);

        Assert.Empty(ctx.Products);
    }
}
