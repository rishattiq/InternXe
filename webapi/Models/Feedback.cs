namespace webapi.Models
{
    public class Feedback
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string PhoneNumbers { get; set; }
        public string FeedbackText { get; set; }
        public int Rating { get; set; }
    }
}
