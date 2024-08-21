using System.ComponentModel.DataAnnotations;

public class Customer
{
    public int Id { get; set; }

    [Required]
    public string Username { get; set; }

    [Required]
    [DataType(DataType.Password)]
    public string Password { get; set; }

    [Required]
    [DataType(DataType.Password)]
    [Compare("Password", ErrorMessage = "Passwords do not match.")]
    public string ConfirmPassword { get; set; }

    [Required]
    [EmailAddress]
    public string Email { get; set; }
}
