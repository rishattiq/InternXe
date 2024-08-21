using webapi.Data;
using webapi.Models;
using Microsoft.EntityFrameworkCore;

namespace webapi.Services
{
    public class CartService
    {
        private readonly ApplicationDbContext _context;

        public CartService(ApplicationDbContext context)
        {
            _context = context;
        }

        // Add item to cart
        public async Task AddToCartAsync(int customerId, int productId, int quantity)
        {
            var cartItem = await _context.Carts
                .FirstOrDefaultAsync(c => c.CustomerId == customerId && c.ProductId == productId);

            if (cartItem != null)
            {
                cartItem.Quantity += quantity; // If item already in cart, increase the quantity
            }
            else
            {
                cartItem = new Cart
                {
                    CustomerId = customerId,
                    ProductId = productId,
                    Quantity = quantity
                };
                _context.Carts.Add(cartItem);
            }

            await _context.SaveChangesAsync();
        }

        // Get all carts by customer ID
        public async Task<List<Cart>> GetCartsByCustomerIdAsync(int customerId)
        {
            return await _context.Carts
                .Where(c => c.CustomerId == customerId)
                .Include(c => c.Product) // Include product details
                .ToListAsync();
        }

        // Delete item from cart
        public async Task DeleteItemFromCartAsync(int cartId)
        {
            var cartItem = await _context.Carts.FindAsync(cartId);
            if (cartItem != null)
            {
                _context.Carts.Remove(cartItem);
                await _context.SaveChangesAsync();
            }
        }
    }
}
