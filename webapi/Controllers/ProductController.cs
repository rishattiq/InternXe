using webapi.Models;
using webapi.Services;
using Microsoft.AspNetCore.Mvc;

namespace EcommerceApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ProductService _productService;

        public ProductController(ProductService productService)
        {
            _productService = productService;
        }

        // GET: api/product/bestsellers
        [HttpGet("bestsellers")]
        public async Task<IActionResult> GetBestSellers() =>
            Ok(await _productService.GetBestSellersAsync());

        // GET: api/product/newarrivals
        [HttpGet("newarrivals")]
        public async Task<IActionResult> GetNewArrivals() =>
            Ok(await _productService.GetNewArrivalsAsync());

        // GET: api/product/onsale
        [HttpGet("onsale")]
        public async Task<IActionResult> GetOnSale() =>
            Ok(await _productService.GetOnSaleAsync());

        // GET: api/product/getproductbycategory/{category}
        [HttpGet("getproductbycategory/{category}")]
        public async Task<IActionResult> GetProductByCategory(string category) =>
            Ok(await _productService.GetProductByCategoryAsync(category));

        // GET: api/product/getallproducts
        [HttpGet("getallproducts")]
        public async Task<IActionResult> GetAllProducts() =>
            Ok(await _productService.GetAllProductsAsync());

        // GET: api/product/getproductbyid/{id}
        [HttpGet("getproductbyid/{id}")]
        public async Task<IActionResult> GetProductById(int id)
        {
            var product = await _productService.GetProductByIdAsync(id);
            if (product == null)
                throw new InvalidOperationException("Product not found");
            return Ok(product);
        }

        // GET: api/product/searchbyname?name={name}
        [HttpGet("searchbyname")]
        public async Task<IActionResult> SearchByName(string name) =>
            Ok(await _productService.SearchProductByNameAsync(name));

        // POST: api/product/addproduct
        [HttpPost("addproduct")]
        public async Task<IActionResult> AddProduct(Product product)
        {
            try
            {
                // Validate Product Name
                if (string.IsNullOrWhiteSpace(product.Name))
                    throw new ArgumentException("Product name is required.");

                // Validate Price
                if (product.Price <= 0)
                    throw new ArgumentOutOfRangeException(nameof(product.Price), "Price must be a positive value.");

                // Validate Quantity
                if (product.Quantity < 0)
                    throw new ArgumentOutOfRangeException(nameof(product.Quantity), "Quantity cannot be negative.");

                // Validate Rating
                if (product.Rating < 1 || product.Rating > 5)
                    throw new ArgumentOutOfRangeException(nameof(product.Rating), "Rating must be between 1 and 5.");

                // Validate CreatedAt (Cannot be in the future)
                if (product.CreatedAt > DateTime.Now)
                    throw new ArgumentOutOfRangeException(nameof(product.CreatedAt), "CreatedAt cannot be in the future.");

                // If all validations pass, proceed to add the product
                await _productService.AddProductAsync(product);
                return Ok();
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message); // Return 400 Bad Request with the error message
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        // PUT: api/product/updateproductbyid/{id}
        [HttpPut("updateproductdetails/{id}")]
        public async Task<IActionResult> UpdateProductDetails(int id, [FromBody] Product product)
        {
            if (id != product.Id)
                return BadRequest("Product ID mismatch.");

            try
            {
                // Update product details via the service
                var updatedProduct = await _productService.UpdateProductDetailsAsync(id, product);

                if (updatedProduct == null)
                    return NotFound("Product not found.");

                return Ok(updatedProduct);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        // DELETE: api/product/deleteproductbyid/{id}
        [HttpDelete("deleteproductbyid/{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            await _productService.DeleteProductAsync(id);
            return Ok();
        }
    }
}
