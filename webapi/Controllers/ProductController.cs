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
                return NotFound();
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
            await _productService.AddProductAsync(product);
            return Ok();
        }

        // PUT: api/product/updateproductbyid/{id}
        [HttpPut("updateproductbyid/{id}")]
        public async Task<IActionResult> UpdateProduct(int id, Product product)
        {
            if (id != product.Id)
                return BadRequest();

            await _productService.UpdateProductAsync(product);
            return Ok();
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
