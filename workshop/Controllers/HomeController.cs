using Microsoft.AspNet.Mvc;

namespace workshop.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult WebStandard()
        {
            return View();
        }

        public IActionResult React()
        {
            return View();
        }

        public IActionResult Angular()
        {
            return View("Angular2");
        }
    }
}
