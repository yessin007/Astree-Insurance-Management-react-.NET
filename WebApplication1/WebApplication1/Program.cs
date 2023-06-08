using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using WebApplication1.Models;
using System.Configuration;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using WebApplication1.Interfaces;
using WebApplication1.Repository;
using Microsoft.AspNetCore.SignalR;
using WebApplication1.Hubs;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ApplicationDbContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
// Add services to the container.
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddCookie(options =>
{
    options.Cookie.Name = "YourCookieName"; // Set a custom cookie name
    options.Cookie.HttpOnly = true; // Set HttpOnly to true for added security
    options.ExpireTimeSpan = TimeSpan.FromMinutes(30); // Set the cookie expiration time
    // Configure other options as per your requirements
}).AddJwtBearer(options =>
{
    options.RequireHttpsMetadata = false;
    options.SaveToken = true;
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(builder.Configuration.GetValue<string>("Jwt:key"))),
        ValidateIssuer = false,
        ValidateAudience = false
    };
});
builder.Services.AddAuthorization();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IParametrageAstreeRepository, ParametrageAstreeRepository>();
builder.Services.AddScoped<IReassureurRepository, ReassureurRepository>();
builder.Services.AddScoped<ICompteBancaireRepository, CompteBancaireRepository>();
builder.Services.AddScoped<IDemandeTransfertRepository, DemandeTransfertRepository>();
builder.Services.AddScoped<ISessionReassureurRepository, SessionReassureurRepository>();
builder.Services.AddScoped<IAvisDebitRepository, AvisDebitRepository>();
builder.Services.AddScoped<IDetailTransfertRepository, DetailTransfertRepository>();
builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
    options.JsonSerializerOptions.WriteIndented = true;
});
builder.Services.AddTransient<ValidateMimeMultipartContentFilter>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        builder => builder.WithOrigins("http://localhost:3000", "http://localhost:5169")
        .AllowAnyHeader()
        .AllowAnyMethod()
        .AllowCredentials());
});

builder.Services.AddDbContext<ApplicationDbContext>(options =>
       options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
//builder.Services.AddDbContext<WebApplication1.Models.ApplicationDbContext>();
builder.Services.AddIdentity<ApplicationUser, IdentityRole>(options =>
{
    options.Password.RequireDigit = true;
    options.Password.RequireLowercase = true;
    options.Password.RequiredLength = 5;
})
    .AddEntityFrameworkStores<ApplicationDbContext>()
    .AddDefaultTokenProviders()
    .AddEntityFrameworkStores<ApplicationDbContext>();
builder.Services.AddScoped<RoleManager<IdentityRole>>();
builder.Services.AddScoped<UserManager<ApplicationUser>>();
builder.Services.Configure<IdentityOptions>(options =>
{
    // Password settings
    options.Password.RequireDigit = true;
    options.Password.RequireLowercase = true;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequireUppercase = true;
    options.Password.RequiredLength = 8;
    options.Password.RequiredUniqueChars = 1;

    // User settings
    options.User.RequireUniqueEmail = true;
});

builder.Services.AddControllers();
/*  .AddJsonOptions(options =>
{
  options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.Preserve;
});*/

/*

builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("Admin", policy => policy.RequireRole("Admin"));
});
*/

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSignalR();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseAuthentication();
app.UseCors("AllowSpecificOrigin");
app.UseRouting();
app.UseAuthorization();
app.UseEndpoints(endpoints =>
{

    endpoints.MapControllers();
    endpoints.MapHub<ChatHub>("/chat");
    endpoints.MapHub<FileHub>("/filehub");
});
app.MapControllers();


app.Run();
