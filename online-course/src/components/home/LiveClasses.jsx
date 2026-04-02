import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiVideo, FiUsers, FiArrowRight } from 'react-icons/fi';

const liveClasses = [
  {
    id: 1,
    title: 'Machine Learning Advanced Workshop',
    instructor: 'Prof. Andrew Ng',
    time: 'Today, 8:00 PM',
    students: '1.2k Joining',
    image: 'https://img-c.udemycdn.com/course/480x270/2018828_41ab_3.jpg',
    status: 'Upcoming'
  },
  {
    id: 2,
    title: 'Modern UI Design with Figma',
    instructor: 'Sarah Drasner',
    time: 'Tomorrow, 10:00 AM',
    students: '850+ Joining',
    image: 'https://img-c.udemycdn.com/course/480x270/2018828_41ab_3.jpg',
    status: 'Live'
  }
];

const LiveClasses = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-24 overflow-hidden relative">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="section-padding">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="px-4 py-2 rounded-full bg-red-50 text-red-500 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            Don't Miss Out
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Upcoming <span className="text-gradient">Live Classes</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {liveClasses.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group p-8 rounded-[3rem] bg-gray-50 border border-gray-100 flex flex-col md:flex-row gap-8 hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-full md:w-56 h-56 rounded-3xl overflow-hidden relative shrink-0">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 font-bold" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-red-500 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                  {item.status}
                </div>
              </div>

              <div className="flex flex-col justify-between py-2">
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-black text-gray-900 leading-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-6 text-sm font-bold text-gray-400">
                    <div className="flex items-center gap-2">
                      <FiClock className="text-primary text-lg" />
                      {item.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <FiUsers className="text-primary text-lg" />
                      {item.students}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-6">
                  {index === 0 && (
                    <div className="flex gap-4">
                      {[timeLeft.hours, timeLeft.minutes, timeLeft.seconds].map((unit, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <span className="text-2xl font-black text-gray-900">{unit.toString().padStart(2, '0')}</span>
                          <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                            {['Hrs', 'Min', 'Sec'][i]}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                  <button className="px-8 py-3 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all flex items-center gap-2 ml-auto">
                    Reserve Spot <FiArrowRight className="text-xl" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveClasses;
