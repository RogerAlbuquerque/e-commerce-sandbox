namespace Ecommerce.Domain.Entities.ProductSubEntitiesType;

public sealed class ImagesPath
{
    public string FeaturedImagePath { get; set; } = string.Empty;
    public IList<string>? SecondaryImagesPath { get; set; }

}
