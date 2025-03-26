using System;
using System.Collections.Generic;

namespace HotelManagement.Models;

public partial class Rent
{
    public int Id { get; set; }

    public int RoomNum { get; set; }

    public string HotelAddress { get; set; } = null!;

    public string CustId { get; set; } = null!;

    public int EmpId { get; set; }

    public DateOnly StartDate { get; set; }

    public DateOnly EndDate { get; set; }

    public bool Archived { get; set; }

    public bool Paid { get; set; }
}
