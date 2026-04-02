import React from 'react';
import { FiSearch, FiLayers, FiFilter } from 'react-icons/fi';

const CATEGORIES = ["All", "Web Development", "App Development", "UI/UX", "AI / ML"];

const ProjectHeader = ({ onSearch, onCategoryChange, activeCategory, onSortChange, sortBy }) => {
  return (
    <div className="bg-white border-b border-gray-100">
      <div className="section-padding py-12 lg:py-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6">
            Explore <span className="text-primary italic">Real-World</span> Projects
          </h1>
          <p className="text-lg text-gray-500 font-medium mb-12 max-w-2xl">
            Build industry-standard skills with our curated collection of real-world project portfolios. 
            From AI to Web, explore, build, and deploy.
          </p>

          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:max-w-md group">
              <FiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 text-xl transition-colors group-focus-within:text-primary" />
              <input
                type="text"
                placeholder="Search projects..."
                onChange={(e) => onSearch(e.target.value)}
                className="w-full pl-16 pr-6 py-5 bg-gray-50 border-2 border-transparent rounded-2xl text-base font-bold placeholder:text-gray-400 focus:outline-none focus:border-primary focus:bg-white transition-all shadow-sm outline-none"
              />
            </div>

            {/* Sort & Filter (Optional) */}
            <div className="flex items-center gap-4 w-full lg:w-auto">
               <div className="relative w-full group">
                  <FiFilter className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary" />
                  <select 
                    value={sortBy}
                    onChange={(e) => onSortChange(e.target.value)}
                    className="w-full lg:w-48 pl-12 pr-6 py-5 bg-gray-50 border-2 border-transparent rounded-2xl text-sm font-bold text-gray-700 focus:outline-none focus:border-primary focus:bg-white transition-all outline-none appearance-none cursor-pointer"
                  >
                    <option value="latest">Latest</option>
                    <option value="popular">Popular</option>
                    <option value="difficulty">Difficulty</option>
                  </select>
               </div>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="mt-12 flex flex-wrap gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-8 py-3.5 rounded-xl text-sm font-black uppercase tracking-widest transition-all duration-300 border-2 ${
                activeCategory === cat
                  ? "bg-primary border-primary text-white shadow-xl shadow-primary/30 -translate-y-1"
                  : "bg-white border-gray-100 text-gray-400 hover:border-primary/20 hover:text-primary"
              }`}
            >
              {cat === "All" ? "All Projects" : cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
