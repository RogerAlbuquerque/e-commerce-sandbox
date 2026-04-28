using Ecommerce.Domain.Enums;

namespace Ecommerce.Domain.Tests;

public class SizeEnumTests
{
    [Theory]
    [InlineData(SizeEnum.Small, 0)]
    [InlineData(SizeEnum.Medium, 1)]
    [InlineData(SizeEnum.Large, 2)]
    [InlineData(SizeEnum.ExtraLarge, 3)]
    public void SizeEnum_has_expected_numeric_values(SizeEnum value, int expected)
    {
        Assert.Equal(expected, (int)value);
    }

    [Fact]
    public void SizeEnum_has_four_members()
    {
        var names = Enum.GetNames<SizeEnum>();
        Assert.Equal(4, names.Length);
    }
}
