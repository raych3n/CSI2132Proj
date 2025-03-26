using System;
using System.Collections.Generic;

namespace HotelManagement.Models;

public partial class Employee
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string Address { get; set; } = null!;

    public string HotelAddress { get; set; } = null!;

    public bool IsManager { get; set; }

    public virtual Hotel HotelAddressNavigation { get; set; } = null!;

    public virtual ICollection<Role> Roles { get; set; } = new List<Role>();
}
