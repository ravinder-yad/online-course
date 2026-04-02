import React from 'react';
import { FiSearch, FiFilter } from 'react-icons/fi';

const categories = [
  'All Courses', 'Web Development', 'App Development', 'Data Science', 'AI & Machine Learning', 'UI/UX Design', 'Cloud Computing', 'Cyber Security'
];

const CourseHeader = ({ onSearch, onCategoryChange, activeCategory, onMobileFilterToggle }) => {
  return (
    <div className="bg-white pt-24 lg:pt-32 pb-8 lg:pb-12 border-b border-gray-100">
      <div className="section-padding flex flex-col gap-6 lg:gap-10">
        <div className="flex flex-col gap-3 lg:gap-4 text-center lg:text-left">
          <h1 className="text-3xl lg:text-6xl font-black text-gray-900 leading-tight">
            Explore All <span className="text-gradient">Courses</span>
          </h1>
          <p className="text-sm lg:text-lg text-gray-500 font-bold tracking-tight italic">
            Over 5,000+ professional courses to help you master new skills and advance your career.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center">
          {/* Search Bar */}
          <div className="relative flex-1 w-full group">
            <FiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-xl lg:text-2xl text-gray-400 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search courses..." 
              onChange={(e) => onSearch(e.target.value)}
              className="w-full pl-14 lg:pl-16 pr-8 py-4 lg:py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl lg:rounded-3xl text-gray-900 font-bold placeholder:text-gray-400 focus:outline-none focus:border-primary focus:bg-white transition-all shadow-sm"
            />
          </div>
          
          <button 
            onClick={onMobileFilterToggle}
            className="lg:hidden flex items-center justify-center gap-2 w-full px-8 py-4 bg-gray-900 text-white rounded-2xl font-black uppercase tracking-widest transition-all"
          >
            <FiFilter /> Filters
          </button>
        </div>

        {/* Category Quick Filter */}
        <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-6 py-3 rounded-2xl text-sm font-black uppercase tracking-widest whitespace-nowrap transition-all border-2 ${
                activeCategory === cat 
                ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' 
                : 'bg-white border-gray-100 text-gray-500 hover:border-primary/20 hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
