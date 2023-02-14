using Microsoft.Extensions.Options;
using NUnit.Framework;
using QipPortal.Controllers;
using QipPortal.DAL;
using QipPortal.Models;
using QipPortal.Models.DB;
using System.Net.Http;

namespace SecurityTest
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }
        //private readonly IOptions<ConfigSettings> config;
        [Test]
        public void GetProjectsById()
        {
            AuthGatewayDevContext db = new AuthGatewayDevContext();
           // IOptions<ConfigSettings> config = new IOptions<ConfigSettings>;
            //ProjectStore projectStore = new ProjectStore(db, this.config);
            ////SecurityController
            //// Set up Prerequisites   
            //var controller = new SecurityController(projectStore);
            Assert.Pass();
        }
    }
}