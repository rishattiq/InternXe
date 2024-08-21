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
            await _cartService.AddToCartAsync(request.CustomerId, request.ProductId, request.Quantity);
            return Ok();
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
            await _cartService.DeleteItemFromCartAsync(cartId);
            return Ok();
        }
    }

    public class AddToCartRequest
    {
        public int CustomerId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
    }
}
