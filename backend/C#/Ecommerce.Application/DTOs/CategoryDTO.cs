using System.ComponentModel.DataAnnotations;

namespace Ecommerce.Application.DTOs;

public class CategoryDTO
{
    public Guid CategoryId { get; private set; }
    [Required(ErrorMessage = "Enter the category name")]
    [MinLength(3)]
    [MaxLength(100)]
    public string Name { get; private set; } = string.Empty;
}
