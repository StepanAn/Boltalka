using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelsDTO
{
    public class PostDTO
    {
        PostDTO(int id)
        {
            Id = id;
        }
        public readonly int Id;
    }
}
