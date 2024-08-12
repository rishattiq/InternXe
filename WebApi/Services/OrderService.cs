
using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Models;
using WebApi.Dtos;


namespace WebApi.Services
{
    public class OrderService
    {
        private readonly WebApiContext _context;

        public OrderService(WebApiContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Order>> GetOrdersAsync()
        {
            return await _context.Orders.Include(o => o.OrderItems).ThenInclude(oi => oi.Product).ToListAsync();
        }

        public async Task<Order> GetOrderByIdAsync(int id)
        {
            return await _context.Orders.Include(o => o.OrderItems).ThenInclude(oi => oi.Product).FirstOrDefaultAsync(o => o.Id == id);
        }

        public async Task<Order> CreateOrderAsync(OrderDto orderDto)
        {
            var order = new Order
            {
                UserId = orderDto.UserId,
                InvoiceId = orderDto.InvoiceId,
                DateTime = orderDto.DateTime,
                GrandTotal = orderDto.GrandTotal,
                OrderItems = orderDto.OrderItems.Select(oi => new OrderItem
                {
                    ProductId = oi.ProductId,
                    Quantity = oi.Quantity,
                    TotalPrice = oi.TotalPrice
                }).ToList()
            };

            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            return order;
        }

        public async Task UpdateOrderAsync(int id, OrderDto orderDto)
        {
            var order = await _context.Orders.Include(o => o.OrderItems).FirstOrDefaultAsync(o => o.Id == id);

            if (order == null)
            {
                throw new Exception("Order not found");
            }

            order.UserId = orderDto.UserId;
            order.InvoiceId = orderDto.InvoiceId;
            order.DateTime = orderDto.DateTime;
            order.GrandTotal = orderDto.GrandTotal;
            order.OrderItems = orderDto.OrderItems.Select(oi => new OrderItem
            {
                ProductId = oi.ProductId,
                Quantity = oi.Quantity,
                TotalPrice = oi.TotalPrice
            }).ToList();

            _context.Orders.Update(order);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteOrderAsync(int id)
        {
            var order = await _context.Orders.FindAsync(id);

            if (order == null)
            {
                throw new Exception("Order not found");
            }

            _context.Orders.Remove(order);
            await _context.SaveChangesAsync();
        }
    }
}