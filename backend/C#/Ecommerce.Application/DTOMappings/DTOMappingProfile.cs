using AutoMapper;
using Ecommerce.Application.DTOs;
using Ecommerce.Domain.Entities;
namespace Ecommerce.Application.DTOMappings;

public class DTOMappingProfile : Profile
{
    DTOMappingProfile()
    {
        CreateMap<Category, CategoryDTO>().ReverseMap();
        CreateMap<Product, ProductDTO>().ReverseMap();
    }
}
