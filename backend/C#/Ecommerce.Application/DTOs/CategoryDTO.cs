using Ecommerce.Domain.Entities;

namespace Ecommerce.Application.DTOs;

public class CategoryDTO
{
    public Guid CategoryId { get; private set; }
    public string Name { get; private set; } = string.Empty;
}
