using webapi.Data;
using webapi.Models;
using Microsoft.EntityFrameworkCore;
using webapi.DTOs;


namespace webapi.Services
{
    public class OrderService
    {
        private readonly ApplicationDbContext _context;
        private readonly CartService _cartService;

        public OrderService(ApplicationDbContext context, CartService cartService)
        {
            _context = context;
            _cartService = cartService;
        }

        // Get orders by customer ID
        public async Task<List<Order>> GetOrdersByCustomerIdAsync(int customerId)
        {
            return await _context.Orders
                .Where(o => o.CustomerId == customerId)
                .Include(o => o.OrderItems) // Include order items
                .ThenInclude(oi => oi.Product) // Include product details
                .ToListAsync();
        }

        // Get all orders (for admin)
        public async Task<List<OrderResponseDto>> GetAllOrdersAsync()
        {
            var orders = await _context.Orders
                .Include(o => o.OrderItems)
                .ThenInclude(oi => oi.Product)
                .ToListAsync();

            var orderDtos = orders.Select(o => new OrderResponseDto
            {
                OrderId = o.Id,
                CustomerUsername = _context.Customers.FirstOrDefault(c => c.Id == o.CustomerId)?.Username,
                OrderDate = o.OrderDate,
                GrandTotal = o.GrandTotal,
                OrderItems = o.OrderItems.Select(oi => new OrderItemDto
                {
                    ProductName = oi.Product.Name,
                    Price = oi.Price,
                    Quantity = oi.Quantity
                }).ToList()
            }).ToList();

            return orderDtos;
        }

        // Create order
        public async Task CreateOrderAsync(CreateOrderRequest request)
        {
            var carts = await _cartService.GetCartsByCustomerIdAsync(request.CustomerId);

            if (carts.Count == 0)
                throw new InvalidOperationException("Cart is empty");

            var order = new Order
            {
                CustomerId = request.CustomerId,
                OrderDate = DateTime.Now,
                FirstName = request.FirstName,
                LastName = request.LastName,
                Email = request.Email,
                PhoneNumber = request.PhoneNumber,
                ShippingAddress = request.ShippingAddress,
                GrandTotal = carts.Sum(c => c.Product.Price * c.Quantity),
                OrderItems = carts.Select(c => new OrderItem
                {
                    ProductId = c.ProductId,
                    Quantity = c.Quantity,
                    Price = c.Product.Price
                }).ToList()
            };

            _context.Orders.Add(order);

            // Clear the cart
            foreach (var cart in carts)
            {
                _context.Carts.Remove(cart);
            }

            await _context.SaveChangesAsync();
        }

        // Delete order by ID
        public async Task DeleteOrderByIdAsync(int orderId)
        {
            var order = await _context.Orders.FindAsync(orderId);
            if (order != null)
            {
                _context.Orders.Remove(order);
                await _context.SaveChangesAsync();
            }
        }
    }
}
