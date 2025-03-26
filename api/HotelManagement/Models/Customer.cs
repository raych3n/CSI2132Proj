namespace HotelManagement.Models
{
    public class Customer
    {
        public string Id { get; set; }

        public string Name { get; set; } = null!;

        public string Address { get; set; } = null!;

        public DateOnly RegistrationDate { get; set; }
    }
}
