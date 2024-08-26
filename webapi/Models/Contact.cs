
namespace webapi.Models
{
    public class Contact
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Message { get; set; }
        public DateTime DateOfMessage { get; set; }
        public string Status { get; set; } = "pending"; // Default status is pending
    }
}
