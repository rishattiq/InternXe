using System.ComponentModel.DataAnnotations;

namespace WebApi.Dtos
{
    public class CartDto
    {
        [Required]
        public int ProductId { get; set; }

        [Required]
        [Range(1, int.MaxValue)]
        public int Quantity { get; set; }
    }
}