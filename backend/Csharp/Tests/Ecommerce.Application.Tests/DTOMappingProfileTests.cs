using AutoMapper;
using Ecommerce.Application.DTOMappings;

public class DTOMappingProfileTests
{
    [Fact]
    public void DTOMappingProfile_configuration_is_valid()
    {
        var config = new MapperConfiguration(cfg => cfg.AddProfile<DTOMappingProfile>());
        config.AssertConfigurationIsValid();
    }
}
