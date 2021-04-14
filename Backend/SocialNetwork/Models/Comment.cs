using System.Collections.Generic;

namespace Models
{
    public enum ContentType
    {
        Img,
        Video,
        Text,
    }
    public struct Content
    {
        public ContentType Type { get; set; }
        public string Cont { get; set; }
    }
    public class Comment
    {
        public List<Content> Content { get; set; }
        public User User { get; set; }
        public int Id { get; set; }
    }
}
