using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace MoviesApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MoviesController : ControllerBase
    {
        private readonly ILogger<MoviesController> _logger;

        public MoviesController(ILogger<MoviesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Movie> Get()
        { 
            return new[]
            {
                new Movie
                {
                    
                }
            };
        }
    }

    public class Movie
    {
        public string id { get; set; }
        public string title { get; set; }
        public string rated { get; set; }
        public string poster { get; set; }
        public string plot { get; set; }
        public string year { get; set; }
        public string released { get; set; }
        public string runtime { get; set; }
        public string genre { get; set; }
        public string director { get; set; }
        public string writer { get; set; }
        public string actors { get; set; }
        public string language { get; set; }
        public string country { get; set; }
        public string awards { get; set; }
        public int metascore { get; set; }
        public int rating { get; set; }
        public string votes { get; set; }
        public string type { get; set; }
        public string price { get; set; }
    }
}
