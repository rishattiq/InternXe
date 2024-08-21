using Microsoft.AspNetCore.Mvc;
using webapi.Models;
using webapi.Services;

namespace webapi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly ContactService _contactService;

        public ContactController(ContactService contactService)
        {
            _contactService = contactService;
        }

        // GET: api/contact/getallmessages
        [HttpGet("getallmessages")]
        public async Task<IActionResult> GetAllMessages()
        {
            var messages = await _contactService.GetAllMessagesAsync();
            return Ok(messages);
        }

        // POST: api/contact/addmessage
        [HttpPost("addmessage")]
        public async Task<IActionResult> AddMessage([FromBody] Contact contact)
        {
            await _contactService.AddMessageAsync(contact);
            return Ok();
        }

        // PUT: api/contact/updatemessage/{id}
        [HttpPut("updatemessage/{id}")]
        public async Task<IActionResult> UpdateMessage(int id, [FromBody] string status)
        {
            await _contactService.UpdateMessageStatusAsync(id, status);
            return Ok();
        }
    }
}
