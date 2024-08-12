using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace ECommerceApp.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        [Column(TypeName = "decimal(18,2)")]
        [Range(0.01, 999999.99, ErrorMessage = "Price must be between 0.01 and 999999.99")]
        public decimal Price { get; set; }

        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public int Quantity { get; set; }


        [Range(1, 5, ErrorMessage = "Rating must be between 1 and 5")]
        public int Rating { get; set; }
        public string Comments { get; set; }
        public string Category { get; set; }
        public bool Sale { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
