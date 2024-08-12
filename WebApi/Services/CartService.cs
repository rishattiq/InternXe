using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Models;
using WebApi.Dtos;

namespace WebApi.Services
{
    public class CartService
    {
        private readonly WebApiContext _context;

        public CartService(WebApiContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Cart>> GetCartsAsync()
        {
            return await _context.Carts.Include(c => c.Product).ToListAsync();
        }

        public async Task<Cart> GetCartByIdAsync(int id)
        {
            return await _context.Carts.Include(c => c.Product).FirstOrDefaultAsync(c => c.Id == id);
        }

        public async Task<Cart> AddToCartAsync(CartDto cartDto)
        {
            var cart = new Cart
            {
                ProductId = cartDto.ProductId,
                Quantity = cartDto.Quantity
            };

            _context.Carts.Add(cart);
            await _context.SaveChangesAsync();

            return cart;
        }

        public async Task UpdateCartAsync(int id, CartDto cartDto)
        {
            var cart = await _context.Carts.FindAsync(id);

            if (cart == null)
            {
                throw new Exception("Cart not found");
            }

            cart.ProductId = cartDto.ProductId;
            cart.Quantity = cartDto.Quantity;

            _context.Carts.Update(cart);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteCartAsync(int id)
        {
            var cart = await _context.Carts.FindAsync(id);

            if (cart == null)
            {
                throw new Exception("Cart not found");
            }

            _context.Carts.Remove(cart);
            await _context.SaveChangesAsync();
        }

        public async Task<double> CalculateGrandTotalAsync()
        {
            var cartItems = await _context.Carts.Include(c => c.Product).ToListAsync();
            return cartItems.Sum(c => c.Quantity * c.Product.UnitPrice);
        }
    }
}