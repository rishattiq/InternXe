using ECommerceApp.Data;
using ECommerceApp.Models;
using Microsoft.EntityFrameworkCore;

namespace ECommerceApp.Services
{
    public class ProductService
    {
        private readonly ECommerceContext _context;

        public ProductService(ECommerceContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Product>> GetBestSellers()
        {
            return await _context.Products.Where(p => p.Rating == 5).ToListAsync();
        }

        public async Task<IEnumerable<Product>> GetNewArrivals()
        {
            return await _context.Products.OrderByDescending(p => p.CreatedAt).Take(10).ToListAsync();
        }

        public async Task<IEnumerable<Product>> GetOnSale()
        {
            return await _context.Products.Where(p => p.Sale).ToListAsync();
        }

        public async Task<IEnumerable<Product>> GetProductsByCategory(string category)
        {
            return await _context.Products.Where(p => p.Category == category).ToListAsync();
        }

        public async Task<Product> GetProductByName(string name)
        {
            return await _context.Products.FirstOrDefaultAsync(p => p.Name.Contains(name));
        }

        public async Task<IEnumerable<Product>> GetAllProducts()
        {
            return await _context.Products.ToListAsync();
        }

        public async Task<Product> GetProductById(int id)
        {
            return await _context.Products.FindAsync(id);
        }

        public async Task AddProduct(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateProduct(Product product)
        {
            _context.Entry(product).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product != null)
            {
                _context.Products.Remove(product);
                await _context.SaveChangesAsync();
            }
        }
    }
}
