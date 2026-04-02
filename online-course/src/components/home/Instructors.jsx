import React from 'react';
import { motion } from 'framer-motion';
import { FiTwitter, FiLinkedin, FiGithub, FiStar } from 'react-icons/fi';

const instructors = [
  {
    id: 1,
    name: 'Dr. Angela Yu',
    skill: 'Web Development Expert',
    image: 'https://i.pravatar.cc/300?img=32',
    courses: 45,
    rating: 4.9
  },
  {
    id: 2,
    name: 'Kent C. Dodds',
    skill: 'React & Testing Specialist',
    image: 'https://i.pravatar.cc/300?img=12',
    courses: 28,
    rating: 4.8
  },
  {
    id: 3,
    name: 'Sarah Drasner',
    skill: 'UI/UX Design Guru',
    image: 'https://i.pravatar.cc/300?img=44',
    courses: 32,
    rating: 4.9
  },
  {
    id: 4,
    name: 'Jose Portilla',
    skill: 'Data Science Master',
    image: 'https://i.pravatar.cc/300?img=68',
    courses: 52,
    rating: 4.7
  }
];

const Instructors = () => {
  return (
    <section className="bg-white py-24">
      <div className="section-padding">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-bold uppercase tracking-widest w-fit">Meet Our Experts</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Learn From The <span className="text-gradient">Best Instructors</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            Our instructors are world-class experts with years of industry experience and a passion for teaching.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((ins, index) => (
            <motion.div
              key={ins.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-premium group"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={ins.image} 
                  alt={ins.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex gap-3">
                  <button className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xl text-white flex items-center justify-center hover:bg-primary transition-colors">
                    <FiTwitter />
                  </button>
                  <button className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xl text-white flex items-center justify-center hover:bg-primary transition-colors">
                    <FiLinkedin />
                  </button>
                </div>
              </div>
              
              <div className="p-6 flex flex-col items-center text-center gap-2">
                <h3 className="text-2xl font-black text-gray-900 leading-tight">{ins.name}</h3>
                <p className="text-sm font-bold text-primary uppercase tracking-widest">{ins.skill}</p>
                <div className="flex items-center gap-6 mt-4 pt-4 border-t border-gray-50 w-full justify-center">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-black text-gray-900">{ins.courses}</span>
                    <span className="text-xs font-bold text-gray-400 uppercase">Courses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiStar className="text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-black text-gray-900">{ins.rating}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
