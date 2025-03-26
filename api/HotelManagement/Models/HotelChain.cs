using System;
using System.Collections.Generic;

namespace HotelManagement.Models;

public partial class HotelChain
{
    public string Name { get; set; } = null!;

    public string Address { get; set; } = null!;

    public int NumHotels { get; set; }

    public virtual ICollection<ChainEmail> ChainEmails { get; set; } = new List<ChainEmail>();

    public virtual ICollection<ChainPhone> ChainPhones { get; set; } = new List<ChainPhone>();

    public virtual ICollection<Hotel> Hotels { get; set; } = new List<Hotel>();
}
