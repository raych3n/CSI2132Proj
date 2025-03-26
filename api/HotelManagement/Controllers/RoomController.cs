using Microsoft.AspNetCore.Mvc;
using HotelManagement.Models;
using Microsoft.EntityFrameworkCore;
using System.Globalization;

namespace HotelManagement.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class RoomController : ControllerBase
    {
        private readonly EHotelsContext _context;
        public RoomController(EHotelsContext context)
        {
            _context = context;
        }

        [HttpGet]
        [ActionName("GetAllRooms")]
        public IActionResult GetAllRooms()
        {
            IQueryable<Room> rooms = _context.Rooms;
            return Ok(rooms.ToList());
        }

        [HttpGet]
        [ActionName("GetRooms")]
        public IActionResult GetRooms([FromQuery] string startDate = "", [FromQuery] string endDate = "", [FromQuery] string capacity = "", [FromQuery] string hotelChain = "", [FromQuery] string category = "", [FromQuery] string numRooms = "", [FromQuery] string area = "", [FromQuery] string price = "")
        {
            IQueryable<Room> rooms = _context.Rooms;
            if (!string.IsNullOrEmpty(startDate) && !string.IsNullOrEmpty(endDate))
            {
                DateOnly stDate = DateOnly.Parse(startDate);
                DateOnly eDate = DateOnly.Parse(endDate);

                rooms = rooms
                        .Where(r => !_context.Rents.Any(re =>
                            re.RoomNum == r.RoomNum &&
                            re.HotelAddress.ToLower() == r.HotelAddress.ToLower() &&
                            !re.Archived &&
                            (stDate >= re.StartDate &&
                            stDate <= re.EndDate ||
                            eDate >= re.StartDate &&
                            eDate <= re.EndDate ||
                            stDate <= re.StartDate &&
                            eDate >= re.EndDate)));
            }
            if (!string.IsNullOrEmpty(capacity))
            {
                int cap = int.Parse(capacity);
                rooms = rooms.Where(r => r.Capacity == cap);
            }
            if (!string.IsNullOrEmpty(hotelChain))
            {
                rooms = from r in rooms
                        join h in _context.Hotels on r.HotelAddress.ToLower() equals h.Address.ToLower()
                        join hc in _context.HotelChains on h.Chain.ToLower() equals hc.Name.ToLower()
                        where hc.Name.ToLower() == hotelChain.ToLower()
                        select r;
            }
            if (!string.IsNullOrEmpty(category))
            {
                int cat = int.Parse(category);
                rooms = from r in rooms
                        join h in _context.Hotels
                        on r.HotelAddress.ToLower() equals h.Address.ToLower()
                        where h.Category == cat
                        select r;
            }
            if (!string.IsNullOrEmpty(numRooms))
            {
                int nr = int.Parse(numRooms);
                rooms = from r in rooms
                        join h in _context.Hotels
                        on r.HotelAddress.ToLower() equals h.Address.ToLower()
                        where h.NumRooms == nr
                        select r;
            }
            if (!string.IsNullOrEmpty(area))
            {
                rooms = from r in rooms
                        join h in _context.Hotels
                        on r.HotelAddress.ToLower() equals h.Address.ToLower()
                        where h.Area.ToLower() == area.ToLower()
                        select r;
            }
            if (!string.IsNullOrEmpty(price))
            {
                int p = int.Parse(price);
                rooms = rooms.Where(r => r.Price == p);
            }
            return Ok(rooms.ToList());
        }


        [HttpGet]
        [ActionName("GetRoomSearch")]
        public IActionResult GetRoomSearch([FromQuery] string startDate = "", [FromQuery] string endDate = "", [FromQuery] string capacity = "", [FromQuery] string hotelChain = "", [FromQuery] string category = "", [FromQuery] string numRooms = "", [FromQuery] string area = "", [FromQuery] string price = "")
        {
            IQueryable<RoomSearch> rooms = from r in _context.Rooms
                                           join h in _context.Hotels
                                           on r.HotelAddress equals h.Address
                                           select new RoomSearch
                                           {
                                               RoomNum = r.RoomNum,
                                               HotelAddress = r.HotelAddress,
                                               Price = r.Price,
                                               Capacity = r.Capacity,
                                               View = r.View,
                                               Extendable = r.Extendable,
                                               Problems = r.Problems,
                                               HotelChain = h.Chain,
                                               Area = h.Area,
                                               Category = h.Category
                                           };

            if (!string.IsNullOrEmpty(startDate) && !string.IsNullOrEmpty(endDate))
            {
                DateOnly stDate = DateOnly.Parse(startDate);
                DateOnly eDate = DateOnly.Parse(endDate);

                rooms = rooms
                        .Where(r => !_context.Rents.Any(re =>
                            re.RoomNum == r.RoomNum &&
                            re.HotelAddress.ToLower() == r.HotelAddress.ToLower() &&
                            !re.Archived &&
                            (stDate >= re.StartDate &&
                            stDate <= re.EndDate ||
                            eDate >= re.StartDate &&
                            eDate <= re.EndDate ||
                            stDate <= re.StartDate &&
                            eDate >= re.EndDate)));
            }
            if (!string.IsNullOrEmpty(capacity))
            {
                int cap = int.Parse(capacity);
                rooms = rooms.Where(r => r.Capacity == cap);
            }
            if (!string.IsNullOrEmpty(hotelChain))
            {
                rooms = from r in rooms
                        join h in _context.Hotels on r.HotelAddress.ToLower() equals h.Address.ToLower()
                        join hc in _context.HotelChains on h.Chain.ToLower() equals hc.Name.ToLower()
                        where hc.Name.ToLower() == hotelChain.ToLower()
                        select r;
            }
            if (!string.IsNullOrEmpty(category))
            {
                int cat = int.Parse(category);
                rooms = from r in rooms
                        join h in _context.Hotels
                        on r.HotelAddress.ToLower() equals h.Address.ToLower()
                        where h.Category == cat
                        select r;
            }
            if (!string.IsNullOrEmpty(numRooms))
            {
                int nr = int.Parse(numRooms);
                rooms = from r in rooms
                        join h in _context.Hotels
                        on r.HotelAddress.ToLower() equals h.Address.ToLower()
                        where h.NumRooms == nr
                        select r;
            }
            if (!string.IsNullOrEmpty(area))
            {
                rooms = from r in rooms
                        join h in _context.Hotels
                        on r.HotelAddress.ToLower() equals h.Address.ToLower()
                        where h.Area.ToLower() == area.ToLower()
                        select r;
            }
            if (!string.IsNullOrEmpty(price))
            {
                int p = int.Parse(price);
                rooms = rooms.Where(r => r.Price == p);
            }
            return Ok(rooms.ToList());
        }

    }
}
