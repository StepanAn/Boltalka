using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelsDTO
{
    public class Content
    {
        Content(string content, ContentType contentType)
        {
            Cont = content;
            ContentType = contentType;
        }
        public readonly string Cont;
        public readonly ContentType ContentType;
    }
}
