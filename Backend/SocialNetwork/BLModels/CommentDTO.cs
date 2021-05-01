using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelsDTO
{
    public class CommentDTO
    {
        CommentDTO(List<Content> content, UserDTO user, int id)
        {
            Content = content;
            Author = user;
            Id = id;
        }
        public readonly List<Content> Content;
        public readonly UserDTO Author;
        public List<CommentDTO> Comments { get; set; }
        public readonly int Id;
    }
}
