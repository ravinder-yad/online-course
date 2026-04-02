import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiVideo, FiClock, FiCalendar, FiArrowRight, FiPlayCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const MOCK_LIVE = [
  { id: 'web-101', title: 'Modern React Architecture & Patterns', instructor: 'Kent C. Dodds', status: 'Live', viewers: '1.2k', image: 'https://img-c.udemycdn.com/course/480x270/2018828_41ab_3.jpg', type: 'Live Now' },
  { id: 'ds-102', title: 'Data Science with Python & Pandas', instructor: 'Jose Portilla', status: 'Upcoming', startsIn: '2h 15m', image: 'https://img-c.udemycdn.com/course/480x270/903744_8da2.jpg', type: 'Upcoming' },
  { id: 'design-103', title: 'Advanced Figma Auto-Layout Workshop', instructor: 'Sarah Drasner', status: 'Recorded', date: 'Oct 24, 2024', image: 'https://img-c.udemycdn.com/course/480x270/3228347_1636_5.jpg', type: 'Past' },
  { id: 'ai-104', title: 'Building Large Language Models (LLMs)', instructor: 'Andrej Karpathy', status: 'Upcoming', startsIn: '5h 30m', image: 'https://img-c.udemycdn.com/course/480x270/4655746_c56d_2.jpg', type: 'Upcoming' }
];

const LiveClasses = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = activeTab === 'All' ? MOCK_LIVE : MOCK_LIVE.filter(c => c.type === activeTab);

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <div className="bg-white pt-32 pb-16 border-b border-gray-100 relative overflow-hidden">
        {/* Background Decorative Blob */}
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-0"></div>
        
        <div className="section-padding flex flex-col gap-8 relative z-10">
          <div className="flex flex-col gap-3 lg:gap-4 text-center lg:text-left">
            <span className="px-4 py-2 rounded-full bg-red-50 text-red-500 text-[10px] lg:text-sm font-black uppercase tracking-widest w-fit mx-auto lg:mx-0 flex items-center gap-2 border border-red-100">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              Live Learning Hub
            </span>
            <h1 className="text-3xl lg:text-6xl font-black text-gray-900 leading-tight">
              Interactive <span className="text-gradient">Live Sessions</span>
            </h1>
            <p className="text-sm lg:text-lg text-gray-500 max-w-2xl font-bold tracking-tight italic opacity-80">
              Join world-class experts in real-time. Ask questions, participate in polls, and collaborate with learners from around the globe.
            </p>
          </div>

          <div className="flex items-center gap-4 overflow-x-auto pb-2 no-scrollbar">
            {['All', 'Live Now', 'Upcoming', 'Past'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                  activeTab === tab 
                  ? 'bg-primary text-white shadow-xl shadow-primary/20' 
                  : 'bg-gray-50 text-gray-400 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="section-padding py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {filtered.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-premium group"
            >
              <div className="relative h-60 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className={`absolute top-4 left-4 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg ${
                  item.type === 'Live Now' ? 'bg-red-500 text-white animate-pulse' : 
                  item.type === 'Upcoming' ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white'
                }`}>
                  {item.status}
                </div>
                {item.type === 'Live Now' && (
                   <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                      <FiVideo /> {item.viewers}
                   </div>
                )}
              </div>

              <div className="p-8 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-black text-gray-900 leading-tight group-hover:text-primary transition-colors line-clamp-2 min-h-[4rem]">
                    {item.title}
                  </h3>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest italic">{item.instructor}</p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                   {item.type === 'Upcoming' ? (
                     <div className="flex items-center gap-2 text-sm font-black text-primary">
                        <FiClock /> Starts in {item.startsIn}
                     </div>
                   ) : item.type === 'Past' ? (
                     <div className="flex items-center gap-2 text-sm font-black text-gray-500 uppercase tracking-widest">
                        <FiCalendar /> {item.date}
                     </div>
                   ) : (
                     <div className="flex items-center gap-2 text-sm font-black text-red-500 animate-pulse uppercase tracking-widest">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        Happening Now
                     </div>
                   )}
                   
                   <Link 
                     to={item.type === 'Live Now' ? `/live/${item.id}` : '#'} 
                     className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                       item.type === 'Live Now' ? 'bg-red-500 text-white shadow-lg shadow-red-200' :
                       item.type === 'Past' ? 'bg-gray-100 text-gray-400 hover:bg-primary hover:text-white' :
                       'bg-gray-50 text-gray-300 cursor-not-allowed'
                     }`}
                   >
                     {item.type === 'Past' ? <FiPlayCircle className="text-2xl" /> : <FiArrowRight className="text-2xl" />}
                   </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LiveClasses;
