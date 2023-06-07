using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Xml;

namespace WebApplication1.Models
{
    
        public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
        {
            public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
                : base(options)
            {
            }

            public DbSet<ApplicationUser> ApplicationUsers { get; set; }
            public DbSet<CompteBancaire> CompteBancaires { get; set; }
            public DbSet<DemandeTransfert> DemandeTransferts { get; set; }
           public DbSet<Reassureur> Reassureur { get; set; }

    }
    }
