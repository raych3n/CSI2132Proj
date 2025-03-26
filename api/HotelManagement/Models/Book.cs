using System;
using System.Collections.Generic;

namespace HotelManagement.Models;

public partial class Book
{
    public int Id { get; set; }

    public int RoomNum { get; set; }

    public string HotelAddress { get; set; } = null!;

    public string CustId { get; set; } = null!;

    public DateOnly StartDate { get; set; }

    public DateOnly EndDate { get; set; }

    public bool Archived { get; set; }

}
