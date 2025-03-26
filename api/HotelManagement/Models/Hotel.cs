using System;
using System.Collections.Generic;

namespace HotelManagement.Models;

public partial class Hotel
{
    public string Address { get; set; } = null!;

    public string Chain { get; set; } = null!;

    public int? Category { get; set; }

    public int NumRooms { get; set; }

    public string Area { get; set; } = null!;

    public virtual HotelChain ChainNavigation { get; set; } = null!;

    public virtual ICollection<Employee> Employees { get; set; } = new List<Employee>();

    public virtual ICollection<HotelEmail> HotelEmails { get; set; } = new List<HotelEmail>();

    public virtual ICollection<HotelPhone> HotelPhones { get; set; } = new List<HotelPhone>();

    public virtual ICollection<Room> Rooms { get; set; } = new List<Room>();
}
