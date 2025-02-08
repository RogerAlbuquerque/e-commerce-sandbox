using Ecommerce.Domain.Enums;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Ecommerce.Application.DTOs;

public class ProductDTO
{
    public Guid ProductId { get; private set; } = Guid.NewGuid();

    [Required(ErrorMessage = "Name is required")]
    [MinLength(3)]
    [MaxLength(100)]
    public string Name { get; private set; } = string.Empty;

    [Required(ErrorMessage = "Enter the price")]
    [Column(TypeName = "decimal(18,2)")]
    [DisplayFormat(DataFormatString = "{0:C2}")]
    [DataType(DataType.Currency)]
    public decimal Price { get; private set; }

    public IList<string> HexColor { get; private set; } = [];

    public SizeEnum Size { get; private set; }

    [Range(0, 5)]
    public byte Stars { get; private set; }

    public string FeaturedImagePath { get; private set; } = string.Empty;

    public IList<string>? SecondaryImagesPath { get; private set; } = [];

    public ProductStateDTO? ProductState { get; set; }

}
