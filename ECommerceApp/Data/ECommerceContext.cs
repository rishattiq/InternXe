using ECommerceApp.Models;
using Microsoft.EntityFrameworkCore;

namespace ECommerceApp.Data
{
    public class ECommerceContext : DbContext
    {
        public ECommerceContext(DbContextOptions<ECommerceContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }
        public DbSet<ContactMessage> ContactMessages { get; set; }
        public DbSet<Customer> Customers { get; set; }

    }
}