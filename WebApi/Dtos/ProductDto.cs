using System.ComponentModel.DataAnnotations;

namespace WebApi.Dtos
{
    public class ProductDto
    {
        [Required]
        [StringLength(100)]
        public string? Name { get; set; }

        [Required]
        [Range(0, double.MaxValue)]
        public double UnitPrice { get; set; }

        [Required]
        [Range(0, int.MaxValue)]
        public int StockQuantity { get; set; }

        public string? Description { get; set; }
    }
}