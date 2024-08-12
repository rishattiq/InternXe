using System.ComponentModel.DataAnnotations;

namespace WebApi.Dtos
{
    public class OrderItemDto
    {
        [Required]
        public int ProductId { get; set; }

        [Required]
        [Range(1, int.MaxValue)]
        public int Quantity { get; set; }

        [Required]
        [Range(0, double.MaxValue)]
        public double TotalPrice { get; set; }
    }
}