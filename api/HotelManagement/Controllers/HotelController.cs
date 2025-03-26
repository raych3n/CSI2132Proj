using HotelManagement.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HotelManagement.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class HotelController : Controller
    {
        private readonly EHotelsContext _context;
        public HotelController(EHotelsContext context)
        {
            _context = context;
        }

        [HttpGet]
        [ActionName("GetAllHotels")]
        public async Task<ActionResult<List<Hotel>>> GetAllHotels()
        {
            IQueryable<Hotel> hotels = _context.Hotels;
            return await hotels.ToListAsync();
        }

        [HttpGet]
        [ActionName("GetHotels")]
        public async Task<ActionResult<List<Hotel>>> GetHotels([FromQuery] string address = "", [FromQuery] string chain = "", [FromQuery] string category = "", [FromQuery] int num_rooms = -1, [FromQuery] string area = "")
        {
            IQueryable<Hotel> hotels = _context.Hotels;
            if (!string.IsNullOrEmpty(address))
            {
                hotels = hotels.Where(h => address.ToLower() == h.Address.ToLower());
            }
            if (!string.IsNullOrEmpty(chain))
            {

                hotels = hotels.Where(h => h.Chain.ToLower() == chain.ToLower());
            }
            if (!string.IsNullOrEmpty(category))
            {
                hotels = hotels.Where(h => h.Category == int.Parse(category));
            }
            if (num_rooms != -1)
            {
                hotels = hotels.Where(h => h.NumRooms == num_rooms);
            }
            if (!string.IsNullOrEmpty(area))
            {

                hotels = hotels.Where(h => h.Area.ToLower() == area.ToLower());
            }
            return hotels.ToList();
        }

        [HttpPost]
        public async Task<ActionResult<Hotel>> Post([FromQuery] string address, [FromQuery] string chain = "", [FromQuery] string category = "", [FromQuery] int numRooms = -1, [FromQuery] string area = "")
        {
            if (await _context.Hotels.FirstOrDefaultAsync(h => h.Address == address) == null)
            {
                Hotel newHotel = new Hotel { Address = address, Chain = chain, Category = int.Parse(category), NumRooms = numRooms, Area = area };
                _context.Add(newHotel);
                _context.SaveChanges();
                return newHotel;
            }
            else
            {
                Hotel hotel = await _context.Hotels.FirstOrDefaultAsync(h => h.Address == address);
                hotel.Chain = chain == "" ? hotel.Chain : chain;
                hotel.Category = category == "" ? hotel.Category : int.Parse(category);
                hotel.NumRooms = numRooms == -1 ? hotel.NumRooms : numRooms;
                hotel.Area = area == "" ? hotel.Area : area;

                await _context.SaveChangesAsync();
                return hotel;
            }
        }

        [HttpDelete]
        public async Task<IActionResult> Delete([FromQuery] string address)
        {
            Hotel hotel = await _context.Hotels.FindAsync(address);
            if (hotel == null)
            {
                return NotFound();
            }

            _context.Hotels.Remove(hotel);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
