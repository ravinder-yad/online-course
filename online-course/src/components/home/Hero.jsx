import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern -z-10"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -z-10"></div>

      <div className="section-padding grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-bold w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            New: Master AI with our latest bootcamps
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1]">
            Learn Skills That <br />
            <span className="text-gradient">Get You Hired</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed">
            Unlock your potential with industry-leading courses. Learn from experts, build real-world projects, and join a community of 5M+ learners worldwide.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="btn-primary flex items-center gap-2">
              Start Learning <FiArrowRight className="text-xl" />
            </button>
            <button className="btn-secondary flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <FiPlay fill="currentColor" />
              </div>
              Watch Demo
            </button>
          </div>

          <div className="flex items-center gap-6 pt-8 border-t border-gray-100 italic text-gray-400">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i} 
                  src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                  alt="User" 
                  className="w-12 h-12 rounded-full border-4 border-white object-cover"
                />
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">
                +2k
              </div>
            </div>
            <p className="text-sm">Trusted by 2,000+ top companies & educators</p>
          </div>
        </motion.div>

        {/* Right Content - Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 animate-float">
            <img 
              src="https://cdn.dribbble.com/userupload/18299431/file/original-f8debff3cccd7aaa05caa8a5d8d8ea70.jpg?resize=1024x768" 
              alt="Learning Illustration" 
              className="rounded-[3rem] shadow-2xl border-8 border-white object-cover w-full aspect-[4/3]"
            />
            
            {/* Floating Stats Card 1 */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -left-10 glass p-6 rounded-3xl shadow-xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center text-white shadow-lg shadow-green-200">
                  <FiArrowRight className="text-2xl" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Join Now</p>
                  <p className="text-xl font-black text-gray-900">45k+ Students</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Stats Card 2 */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-10 glass p-6 rounded-3xl shadow-xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-yellow-400 flex items-center justify-center text-white shadow-lg shadow-yellow-200">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Expertise</p>
                  <p className="text-xl font-black text-gray-900">4.9/5 Rating</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative Circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-gray-100 rounded-full -z-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-gray-100 rounded-full -z-10 opacity-50"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
