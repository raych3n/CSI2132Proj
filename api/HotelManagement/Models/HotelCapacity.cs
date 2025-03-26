using System;
using System.Collections.Generic;

namespace HotelManagement.Models;

public partial class HotelCapacity
{
    public string? Address { get; set; }

    public string? Chain { get; set; }

    public int? Category { get; set; }

    public long? TotalRooms { get; set; }

    public long? TotalCapacity { get; set; }

    public decimal? AvgPrice { get; set; }
}
