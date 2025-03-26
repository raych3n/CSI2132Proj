using System;
using System.Collections.Generic;

namespace HotelManagement.Models;

public partial class Room
{
    public int RoomNum { get; set; }

    public string HotelAddress { get; set; } = null!;

    public decimal? Price { get; set; }

    public int? Capacity { get; set; }

    public string? View { get; set; }

    public bool? Extendable { get; set; }

    public string? Problems { get; set; }

    public virtual ICollection<Amenity> Amenities { get; set; } = new List<Amenity>();

    public virtual Hotel HotelAddressNavigation { get; set; } = null!;
}
