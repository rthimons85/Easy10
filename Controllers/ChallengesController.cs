using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Easy10.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ChallengesController : ControllerBase
    {
      

        private readonly ILogger<ChallengesController> _logger;

        public ChallengesController(ILogger<ChallengesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Challenges> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new Challenges()).ToArray();
        }
    }
}
