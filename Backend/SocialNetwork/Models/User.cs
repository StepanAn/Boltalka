using Microsoft.AspNetCore.Identity;

namespace Models
{
    public class User : IdentityUser
    {
        public int Year { get; set; }
        public string FirstName { get; set; }
        public string SurName { get; set; }
    }
}