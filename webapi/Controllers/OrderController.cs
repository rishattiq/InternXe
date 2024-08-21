using webapi.Models;
using webapi.Services;
using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly OrderService _orderService;

        public OrderController(OrderService orderService)
        {
            _orderService = orderService;
        }

        // GET: api/order/getordersbycustomerid/{customerId}
        [HttpGet("getordersbycustomerid/{customerId}")]
        public async Task<IActionResult> GetOrdersByCustomerId(int customerId)
        {
            var orders = await _orderService.GetOrdersByCustomerIdAsync(customerId);
            return Ok(orders);
        }

        // GET: api/order/getallorders
        [HttpGet("getallorders")]
        public async Task<IActionResult> GetAllOrders()
        {
            var orders = await _orderService.GetAllOrdersAsync();
            return Ok(orders);
        }

        // POST: api/order/createorder
        [HttpPost("createorder")]
        public async Task<IActionResult> CreateOrder([FromBody] CreateOrderRequest request)
        {
            await _orderService.CreateOrderAsync(request);
            return Ok();
        }

        // DELETE: api/order/deleteorderbyid/{orderId}
        [HttpDelete("deleteorderbyid/{orderId}")]
        public async Task<IActionResult> DeleteOrderById(int orderId)
        {
            await _orderService.DeleteOrderByIdAsync(orderId);
            return Ok();
        }
    }
}
