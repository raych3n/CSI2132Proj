using System;
using System.Collections.Generic;

namespace HotelManagement.Models;

public partial class ChainPhone
{
    public string Name { get; set; } = null!;

    public long Number { get; set; }

    public virtual HotelChain NameNavigation { get; set; } = null!;
}
