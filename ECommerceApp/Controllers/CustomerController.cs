using ECommerceApp.Data;
using ECommerceApp.Services;
using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class CustomerController : ControllerBase
{
    private readonly ECommerceContext _context;
    private readonly CustomerService _customerService;


    public CustomerController(ECommerceContext context, CustomerService customerService)
    {
        _context = context;
        _customerService = customerService;

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

    // Get all customers API
    [HttpGet("getallcustomers")]
    public async Task<ActionResult<IEnumerable<Customer>>> GetAllCustomers()
    {
        return Ok(await _customerService.GetAllCustomers());
    }

    // Get customer by ID API
    [HttpGet("getcustomerbyid/{id}")]
    public async Task<ActionResult<Customer>> GetCustomerById(int id)
    {
        var customer = await _customerService.GetCustomerById(id);
        if (customer == null)
        {
            return NotFound();
        }

        return Ok(customer);
    }

    // delete customer by ID API
    [HttpDelete("deletecustomerbyid/{id}")]
    public async Task<ActionResult> DeleteCustomer(int id)
    {
        await _customerService.DeleteCustomer(id);
        return NoContent();
    }
}
