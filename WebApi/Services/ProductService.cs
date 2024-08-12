
using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Models;
using WebApi.Dtos;


namespace WebApi.Services
{
    public class ProductService
    {
        private readonly WebApiContext _context;

        public ProductService(WebApiContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Product>> GetProductsAsync()
        {
            return await _context.Products.ToListAsync();
        }

        public async Task<Product> GetProductByIdAsync(int id)
        {
            return await _context.Products.FindAsync(id) ?? throw new Exception("Product not found");
        }

        public async Task<Product> CreateProductAsync(ProductDto productDto)
        {
            var product = new Product
            {
                Name = productDto.Name,
                UnitPrice = productDto.UnitPrice,
                StockQuantity = productDto.StockQuantity,
                Description = productDto.Description
            };

            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return product;
        }

        public async Task UpdateProductAsync(int id, ProductDto productDto)
        {
            var product = await _context.Products.FindAsync(id);

            if (product == null)
            {
                throw new Exception("Product not found");
            }

            product.Name = productDto.Name;
            product.UnitPrice = productDto.UnitPrice;
            product.StockQuantity = productDto.StockQuantity;
            product.Description = productDto.Description;

            _context.Products.Update(product);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteProductAsync(int id)
        {
            var product = await _context.Products.FindAsync(id);

            if (product == null)
            {
                throw new Exception("Product not found");
            }

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();
        }
    }
}