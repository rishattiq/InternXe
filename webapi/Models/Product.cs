using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal Price { get; set; }
        public string? Description { get; set; }
        public string? ImageUrl { get; set; }
        public int? Quantity { get; set; }
        public int? Rating { get; set; } // Should be between 1 and 5
        public string? Comments { get; set; }
        public string Category { get; set; }
        public bool Sale { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
