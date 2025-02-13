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
    public string Name { get; set; }

    [Required(ErrorMessage = "Enter the price")]
    [Column(TypeName = "decimal(18,2)")]
    [DisplayFormat(DataFormatString = "{0:C2}")]
    [DataType(DataType.Currency)]
    public decimal Price { get; set; }

    public IList<string> HexColor { get; set; }

    public SizeEnum Size { get; set; }

    [Range(0, 5)]
    public byte Stars { get; set; }

    public string FeaturedImagePath { get; set; } = string.Empty;

    public IList<string>? SecondaryImagesPath { get; set; } = [];

    public ProductStateDTO? ProductState { get; set; }
}
