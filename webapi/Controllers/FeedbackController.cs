using webapi.Models;
using webapi.Services;
using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FeedbackController : ControllerBase
    {
        private readonly FeedbackService _feedbackService;

        public FeedbackController(FeedbackService feedbackService)
        {
            _feedbackService = feedbackService;
        }

        // GET: api/feedback/getallfeedbacks
        [HttpGet("getallfeedbacks")]
        public async Task<IActionResult> GetAllFeedbacks()
        {
            var feedbacks = await _feedbackService.GetAllFeedbacksAsync();
            return Ok(feedbacks);
        }

        // POST: api/feedback/addfeedback
        [HttpPost("addfeedback")]
        public async Task<IActionResult> AddFeedback([FromBody] Feedback feedback)
        {
            await _feedbackService.AddFeedbackAsync(feedback);
            return Ok();
        }
    }
}
