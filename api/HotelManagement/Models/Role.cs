using System;
using System.Collections.Generic;

namespace HotelManagement.Models;

public partial class Role
{
    public int EmpId { get; set; }

    public string Name { get; set; } = null!;

    public virtual Employee Emp { get; set; } = null!;
}
