using ECommerceApp.Data;
using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class CustomerController : ControllerBase
{
    private readonly ECommerceContext _context;

    public CustomerController(ECommerceContext context)
    {
        _context = context;
    }

    // Register API
    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] Customer customer)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        // Check if the username already exists
        var existingCustomer = _context.Customers.SingleOrDefault(c => c.Username == customer.Username);
        if (existingCustomer != null)
        {
            return BadRequest("Username is already taken.");
        }

        // Save the new customer
        _context.Customers.Add(customer);
        await _context.SaveChangesAsync();

        return Ok("Registration successful.");
    }

    // Login API
    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginModel login)
    {
        var customer = _context.Customers.SingleOrDefault(c => c.Username == login.Username && c.Password == login.Password);

        if (customer == null)
        {
            return Unauthorized("Invalid username or password.");
        }

        // Successful login
        return Ok("Login successful.");
    }
}
