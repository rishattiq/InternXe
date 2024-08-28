using webapi.Models;
using webapi.Services;
using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CartController : ControllerBase
    {
        private readonly CartService _cartService;

        public CartController(CartService cartService)
        {
            _cartService = cartService;
        }

        // POST: api/cart/addtocart
        [HttpPost("addtocart")]
        public async Task<IActionResult> AddToCart(AddToCartRequest request)
        {
            try
            {
                await _cartService.AddToCartAsync(request.CustomerId, request.ProductId, request.Quantity);
                return Ok(new { Message = "Product added to cart successfully." });
            }
            catch (ArgumentException ex)
            {
                return BadRequest(new { Error = ex.Message });
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { Error = ex.Message });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Error = ex.Message });
            }
        }

        // GET: api/cart/getcartsbycustomerid/{customerId}
        [HttpGet("getcartsbycustomerid/{customerId}")]
        public async Task<IActionResult> GetCartsByCustomerId(int customerId)
        {
            var carts = await _cartService.GetCartsByCustomerIdAsync(customerId);
            return Ok(carts);
        }

        // DELETE: api/cart/deleteitemfromcart/{cartId}
        [HttpDelete("deleteitemfromcart/{cartId}")]
        public async Task<IActionResult> DeleteItemFromCart(int cartId)
        {
            try
            {
                bool isDeleted = await _cartService.DeleteItemFromCartAsync(cartId);

                if (isDeleted)
                {
                    return Ok(new { message = "Item deleted successfully from the cart." });
                }
                else
                {
                    return NotFound(new { message = "Cart item not found." });
                }
            }
            catch (Exception ex)
            {
                // Log the exception (logging mechanism not shown here)
                return StatusCode(500, new { message = "An error occurred while deleting the item.", error = ex.Message });
            }
        }
    }

    public class AddToCartRequest
    {
        public int CustomerId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
    }
}
