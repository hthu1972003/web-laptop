using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Data
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions dbContextOptions)
        : base(dbContextOptions)
    }


    public DbSet(Category) Category { get; set; }
    public DbSet(Product) Product { get; set; }
    public DbSet(PromotionByproduct) PromotionByproduct { get; set; }
    public DbSet(Promotion) Promotion { get; set; }
    public DbSet(Configurations) Configurations { get; set; }

    public DbSet(Specifications) Specifications { get; set; }
    public DbSet(Image) Image { get; set; }
    public DbSet(ProductDetail) ProductDetail { get; set; }
    public DbSet(OrderDetail) OrderDetail { get; set; }

    public DbSet(Order) Order { get; set; }
    public DbSet(Customer) Customer { get; set; }
    public DbSet(Staff) Staff { get; set; }
    public DbSet(Payment) Payment { get; set; }


}