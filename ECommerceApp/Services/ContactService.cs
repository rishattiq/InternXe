using ECommerceApp.Data;
using ECommerceApp.Models;

namespace ECommerceApp.Services
{
    public class ContactService
    {
        private readonly ECommerceContext _context;

        public ContactService(ECommerceContext context)
        {
            _context = context;
        }

        public async Task AddContactMessage(ContactMessage message)
        {
            _context.ContactMessages.Add(message);
            await _context.SaveChangesAsync();
        }
    }
}
