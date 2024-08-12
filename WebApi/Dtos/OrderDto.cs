using System.ComponentModel.DataAnnotations;

namespace WebApi.Dtos
{
    public class OrderDto
    {
        [Required]
        public int UserId { get; set; }

        [Required]
        public string? InvoiceId { get; set; }

        [Required]
        public DateTime DateTime { get; set; }

        [Required]
        [Range(0, double.MaxValue)]
        public double GrandTotal { get; set; }

        public ICollection<OrderItemDto>? OrderItems { get; set; }
    }
}