using ECommerceApp.Data;
using Microsoft.EntityFrameworkCore;

namespace ECommerceApp.Services
{
    public class CustomerService
    {
        private readonly ECommerceContext _context;

        public CustomerService(ECommerceContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Customer>> GetAllProducts()
        {
            return await _context.Customers.ToListAsync();
        }
        public async Task DeleteCustomer(int id)
        {
            var customer = await _context.Customers.FindAsync(id);
            if (customer != null)
            {
                _context.Customers.Remove(customer);
                await _context.SaveChangesAsync();
            }
        }
    }
}