import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiX, FiFilter } from 'react-icons/fi';

const filterGroups = [
  {
    id: 'category',
    title: 'Category',
    options: ['Web Development', 'Design', 'Business', 'Marketing', 'Data Science', 'IT & Software']
  },
  {
    id: 'price',
    title: 'Price',
    options: ['Free', 'Paid']
  },
  {
    id: 'level',
    title: 'Level',
    options: ['Beginner', 'Intermediate', 'Expert']
  },
  {
    id: 'rating',
    title: 'Rating',
    options: ['4.5 & up', '4.0 & up', '3.5 & up', '3.0 & up']
  }
];

const FilterSidebar = ({ activeFilters, onFilterChange, onClearFilters }) => {
  const [openGroups, setOpenGroups] = useState(['category', 'price', 'level', 'rating']);

  const toggleGroup = (id) => {
    setOpenGroups(prev => 
      prev.includes(id) ? prev.filter(g => g !== id) : [...prev, id]
    );
  };

  return (
    <aside className="w-full lg:w-80 h-fit bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm sticky top-32">
      <div className="flex items-center justify-between gap-4 mb-8">
        <h3 className="text-2xl font-black text-gray-900 flex items-center gap-2">
          <FiFilter className="text-primary" /> Filters
        </h3>
        <button 
          onClick={onClearFilters}
          className="text-sm font-bold text-gray-400 hover:text-primary transition-colors underline decoration-dotted"
        >
          Clear All
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {filterGroups.map((group) => (
          <div key={group.id} className="border-b border-gray-50 pb-6 last:border-none">
            <button
              onClick={() => toggleGroup(group.id)}
              className="flex items-center justify-between w-full text-lg font-black text-gray-900 group"
            >
              {group.title}
              {openGroups.includes(group.id) 
                ? <FiChevronUp className="text-primary" /> 
                : <FiChevronDown className="text-gray-400 group-hover:text-primary transition-colors" />
              }
            </button>

            <AnimatePresence>
              {openGroups.includes(group.id) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="flex flex-col gap-3 py-4">
                    {group.options.map((option) => (
                      <li key={option}>
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <div className="relative w-6 h-6 shrink-0">
                            <input
                              type="checkbox"
                              checked={activeFilters[group.id]?.includes(option) || false}
                              onChange={() => onFilterChange(group.id, option)}
                              className="peer absolute opacity-0 cursor-pointer w-full h-full"
                            />
                            <div className="w-full h-full bg-gray-50 border-2 border-gray-100 rounded-lg group-hover:border-primary/30 peer-checked:bg-primary peer-checked:border-primary transition-all duration-300"></div>
                            <FiX className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-sm opacity-0 peer-checked:opacity-100 rotate-0 peer-checked:rotate-90 transition-all duration-300" />
                          </div>
                          <span className="text-sm font-bold text-gray-500 group-hover:text-gray-900 peer-checked:text-gray-900 transition-colors uppercase tracking-widest whitespace-nowrap">
                            {option}
                          </span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default FilterSidebar;
