using HotelManagement.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HotelManagement.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CustomerController : Controller
    {
        private readonly EHotelsContext _context;
        public CustomerController(EHotelsContext context)
        {
            _context = context;
        }

        [HttpGet]
        [ActionName("GetAllCustomers")]
        public ActionResult<List<Customer>> GetAllCustomers()
        {
            IQueryable<Customer> customers = _context.Customers;
            return customers.ToList();
        }

        [HttpGet]
        [ActionName("GetCustomer")]
        public async Task<ActionResult<List<Customer>>> GetCustomer([FromQuery] string id = "", [FromQuery] string name = "", [FromQuery] string address = "")
        {
            IQueryable<Customer> query = _context.Customers;

            if (!string.IsNullOrEmpty(id))
            {
                query = query.Where(c => c.Id.Equals(id));
            }

            if (!string.IsNullOrEmpty(name))
            {
                query = query.Where(c => c.Name.ToLower() == name.ToLower());
            }

            if (!string.IsNullOrEmpty(address))
            {
                query = query.Where(c => c.Address != null
                    && c.Address.ToLower() == address.ToLower());
            }

            List<Customer> customers = await query.ToListAsync();
            return customers.ToList();
        }

        [HttpPost]
        public async Task<ActionResult<Customer>> Post([FromQuery] string id, [FromQuery] string name = "", [FromQuery] string address = "", [FromQuery] string registrationDate = "")
        {
            Customer? cust = _context.Customers.FirstOrDefault(c => c.Id == id);

            if (cust == null)
            {
                Customer newCust = new Customer { Id = id, Name = name, Address = address };
                newCust.RegistrationDate = registrationDate == "" ? DateOnly.FromDateTime(DateTime.Now) : DateOnly.ParseExact(registrationDate, "yyyy-MM-dd");

                _context.Add(newCust);
                _context.SaveChanges();

                return Ok(newCust);
            }
            else
            {
                cust.Name = name != "" ? name : cust.Name;
                cust.Address = address != "" ? address : cust.Address;
                cust.RegistrationDate = registrationDate == "" ? cust.RegistrationDate : DateOnly.ParseExact(registrationDate, "yyyy-MM-dd");

                await _context.SaveChangesAsync();
                return Ok(cust);
            }
        }

        [HttpDelete]
        public async Task<IActionResult> Delete([FromQuery] string id)
        {
            Customer customer = await _context.Customers.FindAsync(id);
            if (customer == null)
            {
                return NotFound();
            }

            _context.Customers.Remove(customer);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
