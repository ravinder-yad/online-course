import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowUpRight, FiZap } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100/50 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col h-full"
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent z-10"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Difficulty Badge */}
        <div className="absolute top-6 left-6 z-20 flex gap-2">
           <span className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest bg-white shadow-lg ${
             project.difficulty === 'Beginner' ? 'text-green-500' :
             project.difficulty === 'Intermediate' ? 'text-orange-500' : 'text-red-500'
           }`}>
             {project.difficulty}
           </span>
           {project.featured && (
             <span className="px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest bg-primary text-white shadow-lg animate-pulse">
               Featured
             </span>
           )}
        </div>

        {/* View Details Overlay */}
        <Link 
          to={`/projects/${project._id}`}
          className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-primary/20 backdrop-blur-sm"
        >
           <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary shadow-2xl scale-50 group-hover:scale-110 transition-transform">
             <FiArrowUpRight className="text-2xl" />
           </div>
        </Link>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
           <span className="px-3 py-1 bg-gray-50 text-[10px] font-bold text-gray-400 uppercase tracking-widest rounded-lg border border-gray-100">
             {project.category}
           </span>
        </div>

        <h3 className="text-2xl font-black text-gray-900 leading-tight mb-4 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-500 text-sm font-medium line-clamp-2 mb-8 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Bar */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.slice(0, 3).map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-gray-50/50 rounded-lg text-[10px] font-black text-gray-500 border border-gray-100">
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-3 py-1.5 bg-gray-50/50 rounded-lg text-[10px] font-black text-gray-400">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>

          {/* Action Footer */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-50">
             <div className="flex items-center gap-4">
               {project.demoLink && (
                 <a 
                   href={project.demoLink}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary hover:text-primary/70 transition-colors"
                 >
                   <FiZap className="text-lg" />
                   Live
                 </a>
               )}
               {project.githubLink && (
                 <a 
                   href={project.githubLink}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors border-l border-gray-100 pl-4"
                 >
                   <FiGithub className="text-base" />
                   Code
                 </a>
               )}
             </div>

             <div className="flex items-center gap-1.5 text-gray-300">
                <FiArrowUpRight className="text-xl group-hover:text-primary transition-colors" />
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
