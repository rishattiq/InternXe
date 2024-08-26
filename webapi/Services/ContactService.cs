using webapi.Data;
using webapi.Models;
using Microsoft.EntityFrameworkCore;

namespace webapi.Services
{
    public class ContactService
    {
        private readonly ApplicationDbContext _context;

        public ContactService(ApplicationDbContext context)
        {
            _context = context;
        }

        // Get all messages
        public async Task<List<Contact>> GetAllMessagesAsync()
        {
            return await _context.Contacts.ToListAsync();
        }

        // Add a message
        public async Task AddMessageAsync(Contact contact)
        {
            contact.DateOfMessage = DateTime.Now;
            _context.Contacts.Add(contact);
            await _context.SaveChangesAsync();
        }

        // Update message status
        public async Task UpdateMessageStatusAsync(int id, string status)
        {
            var contact = await _context.Contacts.FindAsync(id);
            if (contact != null)
            {
                contact.Status = status;
                await _context.SaveChangesAsync();
            }
        }
    }
}
