using ECommerceApp.Models;
using ECommerceApp.Services;
using Microsoft.AspNetCore.Mvc;

namespace ECommerceApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly ContactService _contactService;

        public ContactController(ContactService contactService)
        {
            _contactService = contactService;
        }

        [HttpGet("getcontactmessages")]

        public async Task<ActionResult<IEnumerable<ContactMessage>>> GetAllMessages()
        {
            return Ok(await _contactService.GetAllMessages());
        }

        [HttpPost("addcontact")]
        public async Task<ActionResult> SubmitContactMessage([FromBody] ContactMessage message)
        {
            await _contactService.AddContactMessage(message);
            return Ok();
        }
    }
}
