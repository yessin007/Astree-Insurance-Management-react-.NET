namespace WebApplication1.Shared
{
    public class GetUserWithRoles
    {
        public string Id { get; set; }
      //  public string UserName { get; set; }
        public string Email { get; set; }
        public string Telephone { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public IEnumerable<string> Role { get; set; }
    }
}
