using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Mvc;
using StrawDemo.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace StrawDemo.API.Controllers
{
    [Route("api/[controller]")]
    public class SpeakersController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<Speaker> Get()
        {
            return new List<Speaker>
            {
                new Speaker {Id=1, First="Shayne", Last="Boyer", Blog="tattoocoder.com", Twitter="@spboyer" },
                new Speaker {Id=1, First="Scott", Last="Hanselman", Blog="hanselman.com", Twitter="@shanselman" },
                new Speaker {Id=1, First="Jon", Last="Galloway", Blog="weblogs.asp.net/jongalloway", Twitter="@jongalloway" },
                new Speaker {Id=1, First="Damian", Last="Edwards", Blog="damianedwards.wordpress.com", Twitter="@damianedwards" },
                new Speaker {Id=1, First="Scott", Last="Gu", Blog= "scottgu.com", Twitter="@scottgu" },
                new Speaker {Id=1, First="Bill", Last="Gates", Blog= "microsoft.com", Twitter="@billgates" },
            };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
