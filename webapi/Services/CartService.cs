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
            // Check if the product exists
            var product = await _context.Products.FindAsync(productId);
            if (product == null)
            {
                throw new ArgumentException("Product not found.");
            }

            // Check if there is enough stock
            if (quantity > product.Quantity)
            {
                throw new InvalidOperationException("Insufficient stock available.");
            }

            // Check if the cart item already exists for the customer and product
            var cartItem = await _context.Carts
                .FirstOrDefaultAsync(c => c.CustomerId == customerId && c.ProductId == productId);

            if (cartItem != null)
            {
                // Check if the updated quantity will exceed the stock
                if (cartItem.Quantity + quantity > product.Quantity)
                {
                    throw new InvalidOperationException("Adding this quantity will exceed available stock.");
                }

                cartItem.Quantity += quantity; // Increase the quantity
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

            // Update the product stock
            product.Quantity -= quantity;

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
