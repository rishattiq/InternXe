using WebApi.Dtos;
using WebApi.Models;
using WebApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
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

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cart>>> GetCarts()
        {
            var carts = await _cartService.GetCartsAsync();
            return Ok(carts);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Cart>> GetCart(int id)
        {
            var cart = await _cartService.GetCartByIdAsync(id);

            if (cart == null)
            {
                return NotFound();
            }

            return Ok(cart);
        }

        [HttpPost]
        public async Task<ActionResult<Cart>> AddToCart(CartDto cartDto)
        {
            var cart = await _cartService.AddToCartAsync(cartDto);
            return CreatedAtAction(nameof(GetCart), new { id = cart.Id }, cart);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCart(int id, CartDto cartDto)
        {
            try
            {
                await _cartService.UpdateCartAsync(id, cartDto);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCart(int id)
        {
            try
            {
                await _cartService.DeleteCartAsync(id);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }

            return NoContent();
        }

        [HttpGet("calculateTotal")]
        public async Task<ActionResult<double>> CalculateGrandTotal()
        {
            var total = await _cartService.CalculateGrandTotalAsync();
            return Ok(total);
        }
    }
}