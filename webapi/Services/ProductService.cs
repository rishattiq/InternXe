using webapi.Data;
using webapi.Models;
using Microsoft.EntityFrameworkCore;

namespace webapi.Services
{
    public class ProductService
    {
        private readonly ApplicationDbContext _context;

        public ProductService(ApplicationDbContext context)
        {
            _context = context;
        }

        // Best Sellers - Products with a rating of 5
        public async Task<List<Product>> GetBestSellersAsync() =>
            await _context.Products.Where(p => p.Rating == 5).ToListAsync();

        // New Arrivals - Products added in the last 30 days
        public async Task<List<Product>> GetNewArrivalsAsync() =>
            await _context.Products
                .Where(p => p.CreatedAt >= DateTime.Now.AddDays(-30))
                .OrderByDescending(p => p.CreatedAt)
                .ToListAsync();

        // On Sale - Products with the Sale attribute set to true
        public async Task<List<Product>> GetOnSaleAsync() =>
            await _context.Products.Where(p => p.Sale).ToListAsync();

        // Products by Category
        public async Task<List<Product>> GetProductByCategoryAsync(string category) =>
            await _context.Products.Where(p => p.Category.ToLower() == category.ToLower()).ToListAsync();

        // All Products
        public async Task<List<Product>> GetAllProductsAsync() =>
            await _context.Products.ToListAsync();

        // Get Product by ID
        public async Task<Product> GetProductByIdAsync(int id) =>
            await _context.Products.FindAsync(id);

        // Search Product by Name
        public async Task<List<Product>> SearchProductByNameAsync(string name) =>
            await _context.Products.Where(p => p.Name.Contains(name)).ToListAsync();

        // Add a new Product
        public async Task AddProductAsync(Product product)
        {
            product.CreatedAt = DateTime.Now;
            _context.Products.Add(product);
            await _context.SaveChangesAsync();
        }

        // Update Product by ID
        public async Task<Product?> UpdateProductDetailsAsync(int id, Product updatedProduct)
        {
            var existingProduct = await _context.Products.FindAsync(id);

            if (existingProduct == null)
                return null;

            // Update the fields only if new values are provided
            if (!string.IsNullOrWhiteSpace(updatedProduct.Name))
                existingProduct.Name = updatedProduct.Name;

            if (!string.IsNullOrWhiteSpace(updatedProduct.Description))
                existingProduct.Description = updatedProduct.Description;

            if (!string.IsNullOrWhiteSpace(updatedProduct.ImageUrl))
                existingProduct.ImageUrl = updatedProduct.ImageUrl;

            if (updatedProduct.Price > 0)
                existingProduct.Price = updatedProduct.Price;

            if (updatedProduct.Quantity.HasValue && updatedProduct.Quantity.Value >= 0)
                existingProduct.Quantity = updatedProduct.Quantity.Value;

            if (updatedProduct.Rating.HasValue && updatedProduct.Rating.Value >= 1 && updatedProduct.Rating.Value <= 5)
                existingProduct.Rating = updatedProduct.Rating.Value;

            if (!string.IsNullOrWhiteSpace(updatedProduct.Comments))
                existingProduct.Comments = updatedProduct.Comments;

            if (!string.IsNullOrWhiteSpace(updatedProduct.Category))
                existingProduct.Category = updatedProduct.Category;

            existingProduct.Sale = updatedProduct.Sale;

            // Save changes to the database
            _context.Products.Update(existingProduct);
            await _context.SaveChangesAsync();

            return existingProduct;
        }


        // Delete Product by ID
        public async Task DeleteProductAsync(int id)
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
