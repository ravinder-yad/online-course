import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCheckCircle } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'E-commerce Dashboard',
    desc: 'Build a full-featured admin panel with real-time stats and inventory management.',
    image: 'https://cdn.dribbble.com/userupload/8816752/file/original-dc2c63c30cfc0c4216ff30ad1f8fc2a9.jpg?resize=1024x768',
    tech: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    title: 'Social Media App',
    desc: 'Create a social network with post sharing, messaging, and user profiles.',
    image: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1638448509/Challenges/ofieenxp0c7dlmjy0voa.jpg',
    tech: ['Next.js', 'Firebase', 'Tailwind']
  }
];

const ProjectLearning = () => {
  return (
    <section className="bg-white py-12 lg:py-24">
      <div className="section-padding py-12 lg:py-24 bg-white/50 backdrop-blur-3xl rounded-[3rem] lg:rounded-[4rem] border border-white/20 shadow-2xl overflow-hidden relative">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px] -z-10"></div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 text-center lg:text-left">
          {/* Left Side Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 lg:gap-10 items-center lg:items-start"
          >
            <div className="flex flex-col gap-3 lg:gap-4 lg:items-start items-center">
              <span className="px-5 py-2 rounded-full bg-primary/10 text-primary text-[10px] lg:text-xs font-black uppercase tracking-widest w-fit">Hands-on Experience</span>
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900 leading-tight">
                Project Based <span className="text-gradient">Real Learning</span>
              </h2>
              <p className="text-sm lg:text-lg text-gray-500 max-w-xl leading-relaxed italic font-bold tracking-tight">
                Don't just watch videos, build real-world applications. Our courses focus on hands-on projects that you can showcase in your professional portfolio.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 w-full">
              {[
                { title: 'Social Media App', desc: 'Build a full-stack social network' },
                { title: 'E-commerce API', desc: 'Design scaleable shop architectures' },
                { title: 'AI Portfolio', desc: 'Deploy neural network solutions' },
                { title: 'Fintech Dashboard', desc: 'Secure financial data visualization' }
              ].map((p, i) => (
                <div key={i} className="flex flex-col gap-2 p-5 lg:p-6 bg-white/40 rounded-3xl border border-white/40 hover:bg-white hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <h4 className="font-black text-base lg:text-lg text-gray-900">{p.title}</h4>
                  <p className="text-[10px] lg:text-xs text-gray-500 font-bold tracking-tight">{p.desc}</p>
                </div>
              ))}
            </div>

            <button className="btn-primary w-full sm:w-fit py-4 lg:py-5 px-8 lg:px-12 rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/40">
              Start Building Today
            </button>
          </motion.div>

          {/* Right Side - Projects Show */}
          <div className="grid gap-6 lg:gap-8 w-full">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group p-4 lg:p-6 rounded-[2.5rem] bg-gray-50/50 backdrop-blur-md border border-gray-100 flex flex-col sm:flex-row gap-6 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-full sm:w-40 sm:h-40 h-48 rounded-3xl overflow-hidden shrink-0 shadow-lg border-2 border-white">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="flex flex-col justify-center gap-3 text-left">
                  <h3 className="text-xl font-black text-gray-900 leading-tight group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-xs lg:text-sm text-gray-500 font-bold tracking-tight line-clamp-2">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 rounded-lg bg-primary/5 text-primary text-[9px] font-black uppercase tracking-widest">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-3 pt-3 border-t border-gray-100">
                    <button className="flex items-center gap-1.5 text-[10px] lg:text-xs font-black text-gray-400 hover:text-primary transition-colors">
                      <FiGithub /> Github
                    </button>
                    <button className="flex items-center gap-1.5 text-[10px] lg:text-xs font-black text-gray-400 hover:text-primary transition-colors">
                      <FiExternalLink /> Live Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectLearning;
