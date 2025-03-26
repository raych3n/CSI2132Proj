using System;
using System.Collections.Generic;
using HotelManagement.Models;

namespace HotelManagement;

public partial class Amenity
{
    public int RoomNum { get; set; }

    public string HotelAddress { get; set; } = null!;

    public string Name { get; set; } = null!;

    public virtual Room Room { get; set; } = null!;
}
