using ECommerceApp.Models;
using ECommerceApp.Services;
using Microsoft.AspNetCore.Mvc;

namespace ECommerceApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly ProductService _productService;

        public ProductsController(ProductService productService)
        {
            _productService = productService;
        }

        // Landing Page APIs
        [HttpGet("bestsellers")]
        public async Task<ActionResult<IEnumerable<Product>>> GetBestSellers()
        {
            return Ok(await _productService.GetBestSellers());
        }

        [HttpGet("newarrivals")]
        public async Task<ActionResult<IEnumerable<Product>>> GetNewArrivals()
        {
            return Ok(await _productService.GetNewArrivals());
        }

        [HttpGet("onsale")]
        public async Task<ActionResult<IEnumerable<Product>>> GetOnSale()
        {
            return Ok(await _productService.GetOnSale());
        }

        // Product Page APIs
        [HttpGet("category/{category}")]
        public async Task<ActionResult<IEnumerable<Product>>> GetProductsByCategory(string category)
        {
            return Ok(await _productService.GetProductsByCategory(category));
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetAllProducts()
        {
            return Ok(await _productService.GetAllProducts());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProductById(int id)
        {
            var product = await _productService.GetProductById(id);
            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

        // Admin CRUD Operations
        [HttpPost]
        public async Task<ActionResult> AddProduct([FromBody] Product product)
        {
            await _productService.AddProduct(product);
            return CreatedAtAction(nameof(GetProductById), new { id = product.Id }, product);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateProduct(int id, [FromBody] Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }

            await _productService.UpdateProduct(product);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteProduct(int id)
        {
            await _productService.DeleteProduct(id);
            return NoContent();
        }

        // Search Bar API
        [HttpGet("search/{name}")]
        public async Task<ActionResult<Product>> GetProductByName(string name)
        {
            var product = await _productService.GetProductByName(name);
            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }
    }
}
