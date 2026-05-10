using Ecommerce.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;

namespace Ecommerce.Infrastructure.Tests;

internal static class AppDbContextTestFactory
{
    public static AppDbContext CreateInMemoryContext(string? databaseName = null)
    {
        var name = databaseName ?? Guid.NewGuid().ToString();
        var options = new DbContextOptionsBuilder<AppDbContext>()
            .UseInMemoryDatabase(name)
            .Options;

        return new AppDbContext(options);
    }
}
