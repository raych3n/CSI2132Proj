using System;
using System.Collections.Generic;

namespace HotelManagement.Models;

public partial class RoomSearch
{


    public int RoomNum { get; set; }
    public string? HotelAddress { get; set; }
    public decimal? Price { get; set; }
    public int? Capacity { get; set; }
    public string? View { get; set; }
    public bool? Extendable { get; set; }
    public string? Problems { get; set; }
    public string? HotelChain { get; set; }
    public string? Area { get; set; }
    public int? Category { get; set; }
}
