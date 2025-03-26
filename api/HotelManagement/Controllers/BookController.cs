using HotelManagement.Models;
using Microsoft.AspNetCore.Mvc;
using HotelManagement.Controllers;
using Microsoft.AspNetCore.Http;

namespace HotelManagement.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class BookController : Controller
    {
        private readonly EHotelsContext _context;
        public BookController(EHotelsContext context)
        {
            _context = context;
        }

        [HttpGet]
        [ActionName("GetAllBookings")]
        public ActionResult<List<Book>> GetAllBookings()
        {
            IQueryable<Book> book = _context.Books;
            return book.ToList();
        }

        [HttpPost]
        public async Task<ActionResult<Book>> Post([FromQuery] int id = -1, [FromQuery] string custId = "", [FromQuery] int roomNum = -1, [FromQuery] string hotelAddress = "", [FromQuery] string startDate = "", [FromQuery] string endDate = "")
        {

            Book? book = null;
            if (id != -1)
            { 
                book = _context.Books.FirstOrDefault(b => b.Id == id);
            }
            if (id == -1 || book == null)
            {
                Book newBook = new Book { CustId = custId, RoomNum = roomNum, HotelAddress = hotelAddress, Archived = false };
                
                if (id != -1)
                {
                    newBook.Id = id;
                }
                
                newBook.StartDate = startDate == "" ? DateOnly.FromDateTime(DateTime.Now) : DateOnly.ParseExact(startDate, "yyyy-MM-dd");
                newBook.EndDate = endDate == "" ? DateOnly.FromDateTime(DateTime.Now) : DateOnly.ParseExact(endDate, "yyyy-MM-dd");


                _context.Add(newBook);
                _context.SaveChanges();

                return newBook;
            }
            else if (!book.Archived)
            {
                book.CustId = custId != "" ? custId : book.CustId;
                book.RoomNum = roomNum != -1 ? roomNum : book.RoomNum;
                book.HotelAddress = hotelAddress != "" ? hotelAddress : book.HotelAddress;
                book.StartDate = startDate == "" ? book.StartDate : DateOnly.ParseExact(startDate, "yyyy-MM-dd");
                book.EndDate = endDate == "" ? book.EndDate : DateOnly.ParseExact(endDate, "yyyy-MM-dd");

                await _context.SaveChangesAsync();
                return book;
            }

            return NotFound();
        }

        [HttpPost]
        [ActionName("Rent")]
        public async Task<IActionResult> Rent([FromQuery] int id, [FromQuery] int empId)
        {
            Book? book = _context.Books.FirstOrDefault(b => b.Id == id);
            if (book != null && !book.Archived)
            {
                Rent newRent = new Rent { Id = id, CustId = book.CustId, EmpId = empId, RoomNum = book.RoomNum, HotelAddress = book.HotelAddress, StartDate = book.StartDate, EndDate = book.EndDate, Paid = true, Archived = false };
                var response = await Delete(id);
                await _context.Rents.AddAsync(newRent);
                await _context.SaveChangesAsync();
                return response;
            }
            return NotFound();
        }

        [HttpDelete]
        public async Task<IActionResult> Delete([FromQuery] int id)
        {
            Book book = await _context.Books.FindAsync(id);
            if (book == null)
            {
                return NotFound();
            }

            book.Archived = true;
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
