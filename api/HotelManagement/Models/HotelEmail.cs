using System;
using System.Collections.Generic;

namespace HotelManagement.Models;

public partial class HotelEmail
{
    public string Address { get; set; } = null!;

    public string Email { get; set; } = null!;

    public virtual Hotel AddressNavigation { get; set; } = null!;
}
