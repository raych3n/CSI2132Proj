using System;
using System.Collections.Generic;

namespace HotelManagement.Models;

public partial class ChainEmail
{
    public string Name { get; set; } = null!;

    public string Email { get; set; } = null!;

    public virtual HotelChain NameNavigation { get; set; } = null!;
}
