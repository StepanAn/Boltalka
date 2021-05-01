using System.Collections.Generic;

namespace Models
{
    public enum ContentType
    {
        Img,
        Video,
        Text,
    }
    public class Comment
    {
        public string Content { get; set; }
        public User User { get; set; }
        public int Id { get; set; }
    }
}
