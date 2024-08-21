using System.ComponentModel.DataAnnotations;

namespace ECommerceApp.Models
{
    public class ContactMessage
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Message { get; set; }

        public bool AgreeToTerms { get; set; }

        public DateTime SentAt { get; set; } = DateTime.Now;
    }
}
