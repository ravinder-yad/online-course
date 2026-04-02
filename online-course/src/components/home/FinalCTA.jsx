import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const FinalCTA = () => {
  return (
    <section className="bg-white py-24 px-6 lg:px-12 max-w-[1440px] mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative p-12 md:p-24 rounded-[4rem] bg-gradient-to-r from-primary to-secondary overflow-hidden text-center flex flex-col items-center gap-8 shadow-[0_40px_100px_-20px_rgba(99,102,241,0.5)]"
      >
        {/* Background Decorative Circles */}
        <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-50%] left-[-10%] w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px]"></div>

        <div className="flex flex-col gap-3 lg:gap-4 z-10">
          <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] lg:text-sm font-black uppercase tracking-widest w-fit mx-auto">Join 5M+ Learners</span>
          <h2 className="text-3xl lg:text-7xl font-black text-white leading-tight uppercase tracking-tighter">
            Start Your <span className="underline decoration-white/20 underline-offset-8">Learning</span> <br />
            Journey Today
          </h2>
          <p className="text-sm lg:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-bold italic tracking-tight px-4">
            Unlock your potential and master the skills that will get you hired. Join millions of learners worldwide and transform your career.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-6 lg:pt-8 z-10 w-full sm:w-auto px-6 lg:px-0">
          <button className="px-8 lg:px-12 py-4 lg:py-5 bg-white text-primary font-black text-lg lg:text-xl rounded-2xl lg:rounded-3xl shadow-2xl hover:bg-gray-50 transition-all transform hover:-translate-y-2 active:scale-95 flex items-center justify-center gap-3">
             Get Started <FiArrowRight />
          </button>
          <button className="px-8 lg:px-12 py-4 lg:py-5 bg-primary-dark/30 backdrop-blur-md text-white border-2 border-white/20 font-black text-lg lg:text-xl rounded-2xl lg:rounded-3xl hover:bg-primary-dark/40 transition-all">
            Browse All
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-10 pt-10 border-t border-white/10 mt-8 z-10">
          {[
            'No credit card required',
            '14-day free trial',
            'Full access to all courses',
            'Industry recognized certificates'
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-white/70 text-sm font-bold italic">
              <FiCheckCircle className="text-white" />
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
