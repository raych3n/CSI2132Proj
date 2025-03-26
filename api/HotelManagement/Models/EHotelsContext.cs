using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace HotelManagement.Models;

public partial class EHotelsContext : DbContext
{
    public EHotelsContext()
    {
    }

    public EHotelsContext(DbContextOptions<EHotelsContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Amenity> Amenities { get; set; }

    public virtual DbSet<Book> Books { get; set; }

    public virtual DbSet<ChainEmail> ChainEmails { get; set; }

    public virtual DbSet<ChainPhone> ChainPhones { get; set; }

    public virtual DbSet<Customer> Customers { get; set; }

    public virtual DbSet<Employee> Employees { get; set; }

    public virtual DbSet<Hotel> Hotels { get; set; }

    public virtual DbSet<HotelCapacity> HotelCapacities { get; set; }

    public virtual DbSet<HotelChain> HotelChains { get; set; }

    public virtual DbSet<HotelEmail> HotelEmails { get; set; }

    public virtual DbSet<HotelPhone> HotelPhones { get; set; }

    public virtual DbSet<Rent> Rents { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<Room> Rooms { get; set; }

    public virtual DbSet<RoomAvailability> RoomAvailabilities { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseNpgsql("Name=ConnectionStrings:DefaultConnection");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Amenity>(entity =>
        {
            entity.HasKey(e => new { e.RoomNum, e.HotelAddress, e.Name }).HasName("amenities_pkey");

            entity.ToTable("amenities", "e-hotels");

            entity.Property(e => e.RoomNum).HasColumnName("room_num");
            entity.Property(e => e.HotelAddress)
                .HasMaxLength(255)
                .HasColumnName("hotel_address");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .HasColumnName("name");

            entity.HasOne(d => d.Room).WithMany(p => p.Amenities)
                .HasForeignKey(d => new { d.RoomNum, d.HotelAddress })
                .HasConstraintName("amenities_room_num_hotel_address_fkey");
        });

        modelBuilder.Entity<Book>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("book_pkey");

            entity.ToTable("book", "e-hotels");

            entity.HasIndex(e => new { e.HotelAddress, e.StartDate, e.EndDate, e.Archived }, "idx_booking_dates");

            entity.Property(e => e.Archived)
                .HasDefaultValue(false)
                .HasColumnName("archived");
            entity.Property(e => e.CustId)
                .HasMaxLength(50)
                .HasColumnName("cust_id");
            entity.Property(e => e.EndDate).HasColumnName("end_date");
            entity.Property(e => e.HotelAddress)
                .HasMaxLength(255)
                .HasColumnName("hotel_address");
            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnName("id");
            entity.Property(e => e.RoomNum).HasColumnName("room_num");
            entity.Property(e => e.StartDate).HasColumnName("start_date");

        });

        modelBuilder.Entity<ChainEmail>(entity =>
        {
            entity.HasKey(e => new { e.Name, e.Email }).HasName("chain_email_pkey");

            entity.ToTable("chain_email", "e-hotels");

            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .HasColumnName("name");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .HasColumnName("email");

            entity.HasOne(d => d.NameNavigation).WithMany(p => p.ChainEmails)
                .HasForeignKey(d => d.Name)
                .HasConstraintName("chain_email_name_fkey");
        });

        modelBuilder.Entity<ChainPhone>(entity =>
        {
            entity.HasKey(e => new { e.Name, e.Number }).HasName("chain_phone_pkey");

            entity.ToTable("chain_phone", "e-hotels");

            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .HasColumnName("name");
            entity.Property(e => e.Number).HasColumnName("number");

            entity.HasOne(d => d.NameNavigation).WithMany(p => p.ChainPhones)
                .HasForeignKey(d => d.Name)
                .HasConstraintName("chain_phone_name_fkey");
        });

        modelBuilder.Entity<Customer>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("customer_pkey");

            entity.ToTable("customer", "e-hotels");

            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .HasColumnName("id");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .HasColumnName("address");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .HasColumnName("name");
            entity.Property(e => e.RegistrationDate).HasColumnName("registration_date");
        });

        modelBuilder.Entity<Employee>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("employee_pkey");

            entity.ToTable("employee", "e-hotels");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .HasColumnName("address");
            entity.Property(e => e.HotelAddress)
                .HasMaxLength(255)
                .HasColumnName("hotel_address");
            entity.Property(e => e.IsManager).HasColumnName("is_manager");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .HasColumnName("name");

            entity.HasOne(d => d.HotelAddressNavigation).WithMany(p => p.Employees)
                .HasForeignKey(d => d.HotelAddress)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("hotel_address");
        });

        modelBuilder.Entity<Hotel>(entity =>
        {
            entity.HasKey(e => e.Address).HasName("hotel_pkey");

            entity.ToTable("hotel", "e-hotels");

            entity.HasIndex(e => new { e.Area, e.Category, e.Chain }, "idx_hotel_category_area");

            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .HasColumnName("address");
            entity.Property(e => e.Area)
                .HasMaxLength(100)
                .HasColumnName("area");
            entity.Property(e => e.Category).HasColumnName("category");
            entity.Property(e => e.Chain)
                .HasMaxLength(100)
                .HasColumnName("chain");
            entity.Property(e => e.NumRooms).HasColumnName("num_rooms");

            entity.HasOne(d => d.ChainNavigation).WithMany(p => p.Hotels)
                .HasForeignKey(d => d.Chain)
                .HasConstraintName("hotel_chain_fkey");
        });

        modelBuilder.Entity<HotelCapacity>(entity =>
        {
            entity
                .HasNoKey()
                .ToView("hotel_capacity", "e-hotels");

            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .HasColumnName("address");
            entity.Property(e => e.AvgPrice).HasColumnName("avg_price");
            entity.Property(e => e.Category).HasColumnName("category");
            entity.Property(e => e.Chain)
                .HasMaxLength(100)
                .HasColumnName("chain");
            entity.Property(e => e.TotalCapacity).HasColumnName("total_capacity");
            entity.Property(e => e.TotalRooms).HasColumnName("total_rooms");
        });

        modelBuilder.Entity<HotelChain>(entity =>
        {
            entity.HasKey(e => e.Name).HasName("hotel_chain_pkey");

            entity.ToTable("hotel_chain", "e-hotels");

            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .HasColumnName("name");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .HasColumnName("address");
            entity.Property(e => e.NumHotels).HasColumnName("num_hotels");
        });

        modelBuilder.Entity<HotelEmail>(entity =>
        {
            entity.HasKey(e => new { e.Address, e.Email }).HasName("hotel_email_pkey");

            entity.ToTable("hotel_email", "e-hotels");

            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .HasColumnName("address");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .HasColumnName("email");

            entity.HasOne(d => d.AddressNavigation).WithMany(p => p.HotelEmails)
                .HasForeignKey(d => d.Address)
                .HasConstraintName("hotel_email_address_fkey");
        });

        modelBuilder.Entity<HotelPhone>(entity =>
        {
            entity.HasKey(e => new { e.Address, e.Number }).HasName("hotel_phone_pkey");

            entity.ToTable("hotel_phone", "e-hotels");

            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .HasColumnName("address");
            entity.Property(e => e.Number)
                .HasMaxLength(20)
                .HasColumnName("number");

            entity.HasOne(d => d.AddressNavigation).WithMany(p => p.HotelPhones)
                .HasForeignKey(d => d.Address)
                .HasConstraintName("hotel_phone_address_fkey");
        });

        modelBuilder.Entity<Rent>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("rent_pkey");

            entity.ToTable("rent", "e-hotels");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Archived)
                .HasDefaultValue(false)
                .HasColumnName("archived");
            entity.Property(e => e.CustId)
                .HasMaxLength(50)
                .HasColumnName("cust_id");
            entity.Property(e => e.EmpId).HasColumnName("emp_id");
            entity.Property(e => e.EndDate).HasColumnName("end_date");
            entity.Property(e => e.HotelAddress)
                .HasMaxLength(255)
                .HasColumnName("hotel_address");
            entity.Property(e => e.Paid)
                .HasDefaultValue(false)
                .HasColumnName("paid");
            entity.Property(e => e.RoomNum).HasColumnName("room_num");
            entity.Property(e => e.StartDate).HasColumnName("start_date");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => new { e.EmpId, e.Name }).HasName("role_pkey");

            entity.ToTable("role", "e-hotels");

            entity.Property(e => e.EmpId).HasColumnName("emp_id");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .HasColumnName("name");

            entity.HasOne(d => d.Emp).WithMany(p => p.Roles)
                .HasForeignKey(d => d.EmpId)
                .HasConstraintName("role_emp_id_fkey");
        });

        modelBuilder.Entity<Room>(entity =>
        {
            entity.HasKey(e => new { e.RoomNum, e.HotelAddress }).HasName("room_pkey");

            entity.ToTable("room", "e-hotels");

            entity.Property(e => e.RoomNum).HasColumnName("room_num");
            entity.Property(e => e.HotelAddress)
                .HasMaxLength(255)
                .HasColumnName("hotel_address");
            entity.Property(e => e.Capacity).HasColumnName("capacity");
            entity.Property(e => e.Extendable).HasColumnName("extendable");
            entity.Property(e => e.Price)
                .HasPrecision(10, 2)
                .HasColumnName("price");
            entity.Property(e => e.Problems).HasColumnName("problems");
            entity.Property(e => e.View)
                .HasMaxLength(10)
                .HasColumnName("view");

            entity.HasOne(d => d.HotelAddressNavigation).WithMany(p => p.Rooms)
                .HasForeignKey(d => d.HotelAddress)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("hotel_address");
        });

        modelBuilder.Entity<RoomAvailability>(entity =>
        {
            entity
                .HasNoKey()
                .ToView("room_availability", "e-hotels");

            entity.Property(e => e.Area)
                .HasMaxLength(100)
                .HasColumnName("area");
            entity.Property(e => e.Capacity).HasColumnName("capacity");
            entity.Property(e => e.CheckDate).HasColumnName("check_date");
            entity.Property(e => e.Extendable).HasColumnName("extendable");
            entity.Property(e => e.HotelAddress)
                .HasMaxLength(255)
                .HasColumnName("hotel_address");
            entity.Property(e => e.IsAvailableOnDate).HasColumnName("is_available_on_date");
            entity.Property(e => e.Price)
                .HasPrecision(10, 2)
                .HasColumnName("price");
            entity.Property(e => e.RoomNum).HasColumnName("room_num");
            entity.Property(e => e.View)
                .HasMaxLength(10)
                .HasColumnName("view");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
