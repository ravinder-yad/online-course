import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiUser, FiShoppingCart, FiChevronDown, FiHeart, FiTrendingUp } from 'react-icons/fi';

const CourseCard = ({ course }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.5 }}
    className="card-premium group"
  >
    <div className="relative h-48 overflow-hidden">
      <img 
        src={course.image} 
        alt={course.title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 font-bold"
      />
      <div className="absolute top-4 left-4 flex gap-2">
         {course.bestseller && (
           <span className="px-3 py-1 bg-yellow-400 text-gray-900 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg flex items-center gap-1">
             <FiStar fill="currentColor" /> Bestseller
           </span>
         )}
         {course.trending && (
           <span className="px-3 py-1 bg-primary text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg flex items-center gap-1">
             <FiTrendingUp /> Trending
           </span>
         )}
      </div>
      <button className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-red-500 hover:text-white transition-all shadow-lg opacity-0 group-hover:opacity-100">
         <FiHeart />
      </button>
    </div>
    
    <div className="p-6 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-black text-gray-900 leading-tight group-hover:text-primary transition-colors line-clamp-2 min-h-[3rem]">
          {course.title}
        </h3>
        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
          <FiUser className="text-primary" /> {course.instructor}
        </p>
      </div>

      <div className="flex items-center gap-1">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <FiStar 
              key={i} 
              className={`w-3.5 h-3.5 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} 
            />
          ))}
        </div>
        <span className="text-sm font-black text-gray-900 ml-1">{course.rating}</span>
        <span className="text-xs text-gray-400 font-bold">({course.reviews})</span>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-2">
        <div className="flex flex-col">
          <span className="text-2xl font-black text-gray-900">{course.price === 0 ? 'Free' : `$${course.price}`}</span>
          {course.oldPrice && <span className="text-xs text-gray-400 line-through font-bold">${course.oldPrice}</span>}
        </div>
        <button className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center hover:bg-secondary transition-all shadow-lg shadow-primary/20">
          <FiShoppingCart className="text-xl" />
        </button>
      </div>
    </div>
  </motion.div>
);

const CourseGrid = ({ courses, onSortChange, sortBy }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 8;
  const totalPages = Math.ceil(courses.length / coursesPerPage);

  const paginatedCourses = courses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );

  return (
    <div className="flex-1">
      {/* Sorting & Stats */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 pb-6 border-b border-gray-50">
        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest italic">
          Showing <span className="text-gray-900">{courses.length}</span> Results
        </p>
        
        <div className="flex items-center gap-4">
          <span className="text-xs font-black text-gray-400 uppercase">Sort By:</span>
          <div className="relative group">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="appearance-none bg-white border-2 border-gray-100 px-6 py-3 pr-12 rounded-2xl text-sm font-black uppercase tracking-widest text-gray-700 focus:outline-none focus:border-primary transition-all cursor-pointer"
            >
              <option value="popularity">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <FiChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      <AnimatePresence mode="popLayout">
        {courses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {paginatedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20 text-center gap-6"
          >
            <div className="w-40 h-40 bg-gray-50 rounded-full flex items-center justify-center text-8xl grayscale opacity-50">
               🔍
            </div>
            <div>
              <h3 className="text-2xl font-black text-gray-900 uppercase">No Courses Found</h3>
              <p className="text-gray-500 font-bold tracking-tight mt-2 italic">Try adjusting your search or filters to find what you are looking for.</p>
            </div>
            <button className="btn-primary mt-4">Reset All Filters</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-16 pt-10 border-t border-gray-50 uppercase tracking-widest font-black text-sm">
          <button 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
            className="px-6 py-3 rounded-xl border border-gray-100 hover:border-primary disabled:opacity-30 transition-all"
          >
            Prev
          </button>
          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-12 h-12 rounded-xl border-2 transition-all ${
                  currentPage === i + 1 
                  ? 'bg-primary border-primary text-white shadow-lg' 
                  : 'bg-white border-gray-100 text-gray-400 hover:border-primary/20'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button 
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
            className="px-6 py-3 rounded-xl border border-gray-100 hover:border-primary disabled:opacity-30 transition-all"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default CourseGrid;
