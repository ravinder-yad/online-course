import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AuthLayout = ({ children, title, subtitle, illustration }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 lg:p-8 pt-24 lg:pt-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl w-full bg-white rounded-[2.5rem] shadow-2xl shadow-primary/5 overflow-hidden flex flex-col lg:flex-row"
      >
        {/* Left Side: Illustration (Hidden on Mobile) */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary to-secondary p-12 items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl anim-pulse"></div>
             <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full blur-3xl anim-pulse"></div>
          </div>
          
          <div className="z-10 text-center text-white space-y-6">
            <div className="text-4xl font-bold bg-white/20 backdrop-blur-md inline-block px-6 py-2 rounded-2xl mb-4">
              EduScale
            </div>
            <h2 className="text-4xl font-black leading-tight">
              Start Your <br /> Learning Journey
            </h2>
            <p className="text-white/80 text-lg max-w-sm mx-auto">
              Over 10M+ students are leveling up their skills with our premium courses.
            </p>
            <div className="pt-8">
               <img src={illustration} alt="Illustration" className="w-full max-w-xs mx-auto drop-shadow-2xl" />
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="mb-10">
            <h1 className="text-3xl font-black text-gray-900 mb-2">{title}</h1>
            <p className="text-gray-500 font-medium">{subtitle}</p>
          </div>
          
          {children}
          
          <div className="mt-8 text-center text-gray-500 font-medium">
             <Link to="/" className="text-sm hover:text-primary transition-colors">← Back to Home</Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthLayout;
