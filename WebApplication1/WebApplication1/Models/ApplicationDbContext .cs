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
        public DbSet<Reassureur> Reassureurs { get; set; }
        public DbSet<CompteBancaire> CompteBancaires { get; set; }
        public DbSet<ParametrageAstree> ParametrageAstrees { get; set; }
        public DbSet<DemandeTransfert> DemandeTransferts { get; set; }
        public DbSet<SessionReassureur> SessionReassureurs { get; set; }
        public DbSet<AvisDebit> AvisDebits { get; set; }
        public DbSet<DetailTransfert> DetailTransferts { get; set; }
        public DbSet<UserConnection> UserConnections { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            /************************Users**********************************/
            /* modelBuilder.Entity<ApplicationUser>()
                 .HasOne(p => p.Parametrage)
                 .WithMany(b => b.Users)
                 .HasForeignKey(p => p.ParametrageAstreeId);*/
            modelBuilder.Entity<ApplicationUser>()
              .HasMany(t => t.DemandeTransferts)
              .WithOne(p => p.User);
            modelBuilder.Entity<ApplicationUser>()
                .Navigation(b => b.DemandeTransferts)
               .UsePropertyAccessMode(PropertyAccessMode.Property);
            modelBuilder.Entity<ApplicationUser>()
             .HasMany(t => t.UserConnections)
             .WithOne(p => p.User);
            /************************Reassureur**********************************/
            modelBuilder.Entity<Reassureur>()
                .HasMany(t => t.CompteBancaires)
                .WithOne(p => p.Reassureur);
            modelBuilder.Entity<Reassureur>()
                .Navigation(b => b.CompteBancaires)
                .UsePropertyAccessMode(PropertyAccessMode.Property);
            modelBuilder.Entity<Reassureur>()
                .HasMany(r => r.DemandeTransferts)
                .WithOne(p => p.Reassureur);
            modelBuilder.Entity<Reassureur>()
                .Navigation(b => b.DemandeTransferts)
                .UsePropertyAccessMode(PropertyAccessMode.Property);
            /***********************ParametrageAstree***********************************/
            /*
            modelBuilder.Entity<ParametrageAstree>()
              .HasMany(t => t.CompteBancaires)
              .WithOne(p => p.ParametrageAstree);
            modelBuilder.Entity<ParametrageAstree>()
                .Navigation(b => b.CompteBancaires)
                .UsePropertyAccessMode(PropertyAccessMode.Property);
            */
            /***********************CompteBancaire***********************************/
            /*
             * modelBuilder.Entity<CompteBancaire>()
               .HasOne(p => p.ParametrageAstree)
               .WithMany(b => b.CompteBancaires)
               .HasForeignKey(p => p.ParametrageAstreeId);
            */
            modelBuilder.Entity<CompteBancaire>()
               .HasOne(p => p.Reassureur)
               .WithMany(b => b.CompteBancaires)
               .HasForeignKey(p => p.ReassureurId);
            modelBuilder.Entity<CompteBancaire>()
                     .HasMany(t => t.DemandeTransferts)
                      .WithOne(p => p.CompteBancaire);
            modelBuilder.Entity<CompteBancaire>()
                .Navigation(b => b.DemandeTransferts)
                .UsePropertyAccessMode(PropertyAccessMode.Property);
            /***********************DemandeTransfert***********************************/
            modelBuilder.Entity<DemandeTransfert>()
               .HasOne(d => d.User)
               .WithMany(u => u.DemandeTransferts)
               .HasForeignKey(d => d.UserId);
            modelBuilder.Entity<DemandeTransfert>()
                .HasMany(t => t.sessionReassureurs)
                .WithOne(p => p.DemandeTransfert);
            modelBuilder.Entity<DemandeTransfert>()
                .Navigation(b => b.sessionReassureurs)
                .UsePropertyAccessMode(PropertyAccessMode.Property);
            modelBuilder.Entity<DemandeTransfert>()
               .HasOne(d => d.Reassureur)
               .WithMany(u => u.DemandeTransferts)
               .HasForeignKey(d => d.ReassureurId);
            modelBuilder.Entity<DemandeTransfert>()
              .HasOne(p => p.CompteBancaire)
              .WithMany(b => b.DemandeTransferts)
              .HasForeignKey(p => p.CompteBancaireId);
            /***********************SessionReassureur***********************************/
            modelBuilder.Entity<SessionReassureur>()
              .HasOne(d => d.DemandeTransfert)
              .WithMany(u => u.sessionReassureurs)
              .HasForeignKey(d => d.DemandeTransfertId);
            /***********************Message***********************************/
            modelBuilder.Entity<UserConnection>()
             .HasOne(u => u.User)
             .WithMany(u => u.UserConnections)
             .HasForeignKey(u => u.UserId);

        }
    }
}

