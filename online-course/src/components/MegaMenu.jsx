import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaDatabase, FaBrain, FaPalette, FaShieldAlt, FaCloud, FaTerminal, FaRocket, FaFire, FaGraduationCap } from 'react-icons/fa';

const categories = [
  {
    title: "Development",
    links: [
      { name: "Web Development", icon: <FaCode className="text-blue-500" /> },
      { name: "App Development", icon: <FaMobileAlt className="text-green-500" /> },
      { name: "Data Science", icon: <FaDatabase className="text-purple-500" /> },
      { name: "AI / ML", icon: <FaBrain className="text-pink-500" /> },
    ]
  },
  {
    title: "IT & Design",
    links: [
      { name: "UI/UX Design", icon: <FaPalette className="text-yellow-500" /> },
      { name: "Cyber Security", icon: <FaShieldAlt className="text-red-500" /> },
      { name: "Cloud Computing", icon: <FaCloud className="text-sky-500" /> },
      { name: "DevOps", icon: <FaTerminal className="text-gray-600" /> },
    ]
  }
];

const specialCategories = [
  { name: "Trending Courses", icon: <FaRocket />, color: "text-orange-500" },
  { name: "New Courses", icon: <FaFire />, color: "text-red-600" },
  { name: "Free Courses", icon: <FaGraduationCap />, color: "text-indigo-600" },
];

const MegaMenu = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 z-50 py-10 px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-12">
        {categories.map((cat, idx) => (
          <div key={idx} className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900 border-b pb-2">{cat.title}</h3>
            <ul className="space-y-4">
              {cat.links.map((link, lIdx) => (
                <li key={lIdx}>
                  <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors group">
                    <span className="text-xl group-hover:scale-110 transition-transform">{link.icon}</span>
                    <span className="font-medium">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="bg-gray-50 p-8 rounded-3xl space-y-6 border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900">Recommended for You</h3>
          <ul className="space-y-5">
            {specialCategories.map((spec, sIdx) => (
              <li key={sIdx}>
                <a href="#" className="flex items-center gap-4 p-3 bg-white rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
                  <div className={`w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-lg ${spec.color}`}>
                    {spec.icon}
                  </div>
                  <span className="font-semibold text-gray-800">{spec.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default MegaMenu;
