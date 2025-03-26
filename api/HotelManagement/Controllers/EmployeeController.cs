using HotelManagement.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HotelManagement.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class EmployeeController : Controller
    {
        private readonly EHotelsContext _context;
        public EmployeeController(EHotelsContext context)
        {
            _context = context;
        }

        [HttpGet]
        [ActionName("GetAllEmployees")]
        public ActionResult<List<Employee>> GetAllEmployees()
        {
            IQueryable<Employee> employees = _context.Employees;
            return employees.ToList();
        }

        [HttpGet]
        [ActionName("GetEmployee")]
        public async Task<ActionResult<List<Employee>>> GetEmployee([FromQuery] int id = default, [FromQuery] string name = "", [FromQuery] string address = "", [FromQuery] string hotelAddress = "", [FromQuery] bool isManager = false)
        {
            IQueryable<Employee> query = _context.Employees;

            if (id != default)
            {
                query = query.Where(e => e.Id == id);
            }

            if (!string.IsNullOrEmpty(name))
            {
                query = query.Where(e => e.Name.ToLower() == name.ToLower());
            }

            if (!string.IsNullOrEmpty(address))
            {
                query = query.Where(e => e.Address != null
                    && e.Address.ToLower() == address.ToLower());
            }

            if (!string.IsNullOrEmpty(hotelAddress))
            {
                query = query.Where(e => e.HotelAddress != null
                    && e.HotelAddress.ToLower() == hotelAddress.ToLower());
            }

            query = query.Where(e => e.IsManager == isManager);

            List<Employee> employees = await query.ToListAsync();
            return employees.ToList();
        }

        [HttpPost]
        public async Task<ActionResult<Employee>> Post([FromQuery] int id, [FromQuery] string name = "", [FromQuery] string address = "", [FromQuery] string hotelAddress = "", [FromQuery] bool isManager = default)
        {
            if (_context.Employees.FirstOrDefault(e => e.Id == id) == null)
            {
                Employee newEmp = new Employee { Id = id, Name = name, Address = address, HotelAddress = hotelAddress, IsManager = isManager };

                _context.Add(newEmp);
               _context.SaveChanges();

                return newEmp;
            }
            else
            {
                Employee? emp = _context.Employees.FirstOrDefault(c => c.Id == id);
                emp.Name = name != "" ? name : emp.Name;
                emp.Address = address != "" ? address : emp.Address;
                emp.HotelAddress = hotelAddress != "" ? hotelAddress : emp.HotelAddress;
                emp.IsManager = isManager;

                await _context.SaveChangesAsync();
                return emp;
            }
        }

        [HttpDelete]
        public async Task<IActionResult> Delete([FromQuery] int id)
        {
            Employee employee = await _context.Employees.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }

            _context.Employees.Remove(employee);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
