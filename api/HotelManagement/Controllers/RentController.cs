using HotelManagement.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HotelManagement.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class RentController : Controller
    {
        private readonly EHotelsContext _context;
        public RentController(EHotelsContext context)
        {
            _context = context;
        }

        [HttpGet]
        [ActionName("GetAllRentings")]
        public ActionResult<List<Rent>> GetAllRentings()
        {
            IQueryable<Rent> rent = _context.Rents;
            return rent.ToList();
        }

        [HttpPost]
        public async Task<ActionResult<Rent>> Post([FromQuery] int id = -1, [FromQuery] string custId = "", [FromQuery] int empId = -1, [FromQuery] int roomNum = -1, [FromQuery] string hotelAddress = "", [FromQuery] string startDate = "", [FromQuery] string endDate = "", [FromQuery] bool paid = false)
        {
            Rent? rent = null;
            if (id != -1)
            {
                rent = _context.Rents.FirstOrDefault(b => b.Id == id);
            }
            if (id == -1 || rent == null)
            {
                Rent newRent = new Rent { CustId = custId, EmpId = empId, RoomNum = roomNum, HotelAddress = hotelAddress, Paid = paid, Archived = false};
                
                if (id != -1)
                {
                    newRent.Id = id;
                }
                
                newRent.StartDate = startDate == "" ? DateOnly.FromDateTime(DateTime.Now) : DateOnly.ParseExact(startDate, "yyyy-MM-dd");
                newRent.EndDate = endDate == "" ? DateOnly.FromDateTime(DateTime.Now) : DateOnly.ParseExact(endDate, "yyyy-MM-dd");


                _context.Add(newRent);
                _context.SaveChanges();

                return newRent;
            }
            else if (!rent.Archived)
            {
                rent.CustId = custId != "" ? custId : rent.CustId;
                rent.EmpId = empId != -1 ? empId : rent.EmpId;
                rent.RoomNum = roomNum != -1 ? roomNum : rent.RoomNum;
                rent.HotelAddress = hotelAddress != "" ? hotelAddress : rent.HotelAddress;
                rent.StartDate = startDate == "" ? rent.StartDate : DateOnly.ParseExact(startDate, "yyyy-MM-dd");
                rent.EndDate = endDate == "" ? rent.EndDate : DateOnly.ParseExact(endDate, "yyyy-MM-dd");
                rent.Paid = paid;

                await _context.SaveChangesAsync();
                return rent;
            }

            return NotFound();
        }

        [HttpDelete]
        public async Task<IActionResult> Delete([FromQuery] int id)
        {
            Rent rent = await _context.Rents.FindAsync(id);
            if (rent == null)
            {
                return NotFound();
            }

            rent.Archived = true;
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
