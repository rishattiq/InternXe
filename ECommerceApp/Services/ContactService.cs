using ECommerceApp.Data;
using ECommerceApp.Models;
using Microsoft.EntityFrameworkCore;

namespace ECommerceApp.Services
{
    public class ContactService
    {
        private readonly ECommerceContext _context;

        public ContactService(ECommerceContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<ContactMessage>> GetAllMessages()
        {
            return await _context.ContactMessages.ToListAsync();
        }

        public async Task AddContactMessage(ContactMessage message)
        {
            _context.ContactMessages.Add(message);
            await _context.SaveChangesAsync();
        }
    }
}
