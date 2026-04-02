import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiDatabase, FiCpu, FiLayout } from 'react-icons/fi';

const categories = [
  { 
    id: 1, 
    title: 'Web Development', 
    courses: '1,200+ Courses', 
    icon: <FiCode className="text-3xl" />,
    color: 'bg-blue-500'
  },
  { 
    id: 2, 
    title: 'App Development', 
    courses: '850+ Courses', 
    icon: <FiSmartphone className="text-3xl" />,
    color: 'bg-purple-500'
  },
  { 
    id: 3, 
    title: 'Data Science', 
    courses: '950+ Courses', 
    icon: <FiDatabase className="text-3xl" />,
    color: 'bg-indigo-500'
  },
  { 
    id: 4, 
    title: 'AI / ML', 
    courses: '600+ Courses', 
    icon: <FiCpu className="text-3xl" />,
    color: 'bg-pink-500'
  },
  { 
    id: 5, 
    title: 'UI/UX Design', 
    courses: '720+ Courses', 
    icon: <FiLayout className="text-3xl" />,
    color: 'bg-orange-500'
  }
];

const Categories = () => {
  return (
    <section className="bg-white py-24">
      <div className="section-padding">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-bold uppercase tracking-wider">Explore by Topic</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Top <span className="text-gradient">Categories</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            Choose from a wide range of categories and start your journey to become a professional in your field.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 flex flex-col items-center text-center gap-6"
            >
              <div className={`w-20 h-20 rounded-3xl ${cat.color} text-white flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}>
                {cat.icon}
              </div>
              <div>
                <h3 className="text-xl font-black text-gray-900 mb-1 group-hover:text-primary transition-colors">{cat.title}</h3>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{cat.courses}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
