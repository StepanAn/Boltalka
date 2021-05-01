using AutoMapper;
using ModelsDTO;
using Microsoft.EntityFrameworkCore;
using Models;
using Repository.Infrastructure;
using Repository.Interfaces;
using System;
using System.Threading.Tasks;

namespace Repository
{
    public class PostRepository : IRepository<PostDTO>
    {
        private readonly ApplicationContext db;
        private readonly IMapper mapper;
        public PostRepository(ApplicationContext context, IMapper mapper)
        {
            db = context;
            this.mapper = mapper;
        }
        public async Task AddAsync(PostDTO obj)
        {
            Post post = new();
            mapper.Map(obj, post);
            await db.Posts.AddAsync(post);
            await db.SaveChangesAsync();
        }

        public async Task<PostDTO> GetByIdAsync(int id)
        {
            Post post = await db.Posts.FirstOrDefaultAsync(p => p.Id == id);
            return mapper.Map<PostDTO>(post);
        }

        public async Task RemoveByIdAsync(int id)
        {
            Post post = await db.Posts.FirstOrDefaultAsync(p => p.Id == id);
            db.Posts.Remove(post);
            await db.SaveChangesAsync();
        }

        public async Task UpdateAsync(PostDTO obj)
        {
            Post post = new();
            mapper.Map(obj, post);
            db.Posts.Update(post);
            await db.SaveChangesAsync();
        }
    }
}
