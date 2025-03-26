using System;
using System.Collections.Generic;

namespace HotelManagement.Models;

public partial class HotelPhone
{
    public string Address { get; set; } = null!;

    public string Number { get; set; } = null!;

    public virtual Hotel AddressNavigation { get; set; } = null!;
}
