using System;
using System.Collections.Generic;

namespace HotelManagement.Models;

public partial class RoomAvailability
{
    public int? RoomNum { get; set; }

    public string? HotelAddress { get; set; }

    public string? Area { get; set; }

    public decimal? Price { get; set; }

    public int? Capacity { get; set; }

    public string? View { get; set; }

    public bool? Extendable { get; set; }

    public DateOnly? CheckDate { get; set; }

    public bool? IsAvailableOnDate { get; set; }
}
