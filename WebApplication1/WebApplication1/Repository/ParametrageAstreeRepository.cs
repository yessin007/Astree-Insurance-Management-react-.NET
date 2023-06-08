using AutoMapper;
using WebApplication1.Shared;
using WebApplication1.Interfaces;
using WebApplication1.Models;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace WebApplication1.Repository
{
    public class ParametrageAstreeRepository : IParametrageAstreeRepository
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;
        public ParametrageAstreeRepository(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public ParametrageAstree AjouteParametrageAstree(ParametrageAstreeDto parametrageAstree)
        {
            var astree = _mapper.Map<ParametrageAstree>(parametrageAstree);

            astree.Id = Guid.NewGuid().ToString();
            _context.Add(astree);
            _context.SaveChanges();
            return astree;
        }

        public ICollection<CompteBancaire> GetCompteAstrees(string id)
        {
            //return _context.CompteBancaires.Where(p => p.ParametrageAstreeId == id).ToList();
            return null;
        }

        public ParametrageAstree GetParametrageAstreeById(string id)
        {
            return _context.ParametrageAstrees.Where(p => p.Id == id).FirstOrDefault();
        }

        public ICollection<ParametrageAstree> GetParametrageAstrees()
        {
            return _context.ParametrageAstrees.OrderBy(x => x.Id).ToList();
        }

       /* public ICollection<UserDto> GetUserAstrees(string id)
        {
            var users = _context.Users.Where(p => p.ParametrageAstreeId == id).ToList();
            ICollection < UserDto > userDtos = new List<UserDto>();
            foreach (var user in users)
            {
                var userDto = _mapper.Map<UserDto>(user);
                userDtos.Add(userDto);
            }
            return userDtos;
        }
       */
        public ParametrageAstree ModifierParametrageAstree(ParametrageAstreeDto parametrageAstree, string id)
        {
            var astree = GetParametrageAstreeById(id);
            if (astree == null)
            {
                return null;
            }
            astree.Adresse = parametrageAstree.Adresse;
            astree.Matricule = parametrageAstree.Matricule;
            astree.ReseauxSociaux = parametrageAstree.ReseauxSociaux;
            astree.Tel = parametrageAstree.Tel;
            _context.ParametrageAstrees.Update(astree);
            var test = Save();
            if (test)
            {
                return astree;
            };
            return null;
        }

        public bool ParametrageAstreeExists(string id)
        {
            return _context.ParametrageAstrees.Any(p => p.Id == id);
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }

        public bool SupprimeParametrageAstree(string id)
        {
            var astree = GetParametrageAstreeById(id);
            if (astree == null)
            {
                return false;
            }
            _context.ParametrageAstrees.Remove(astree);
            _context.SaveChanges();
            return true;
        }
    }
}
