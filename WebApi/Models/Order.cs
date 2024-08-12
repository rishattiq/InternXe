using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class Order
    {
        [Key]
        public int Id { get; set; }


        [Required]
        public int UserId { get; set; }

        [Required]
        public string? InvoiceId { get; set; }

        [Required]
        public DateTime DateTime { get; set; }

        [Required]
        [Range(0, double.MaxValue)]
        public double GrandTotal { get; set; }

        public ICollection<OrderItem>? OrderItems { get; set; }
    }
}