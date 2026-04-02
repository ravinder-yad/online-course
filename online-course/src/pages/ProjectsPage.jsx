import React, { useState, useEffect } from 'react';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectCard from '../components/projects/ProjectCard';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLoader, FiDatabase } from 'react-icons/fi';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('latest');

  // Fetch projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const queryParams = new URLSearchParams({
          category: activeCategory,
          search: searchQuery,
          sort: sortBy
        });
        const response = await fetch(`http://localhost:5001/api/projects?${queryParams}`);
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        }
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchProjects, 300);
    return () => clearTimeout(debounceTimer);
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-white">
      <ProjectHeader 
        onSearch={setSearchQuery}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <div className="section-padding py-16 lg:py-24 max-w-7xl mx-auto">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-40">
             <FiLoader className="text-4xl text-primary animate-spin mb-4" />
             <p className="text-gray-400 font-black uppercase tracking-widest text-[10px]">Updating Hub...</p>
          </div>
        ) : projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <AnimatePresence mode="popLayout">
              {projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-40 text-center">
             <div className="w-20 h-20 rounded-3xl bg-gray-50 flex items-center justify-center text-gray-200 mb-6">
                <FiDatabase className="text-4xl" />
             </div>
             <h3 className="text-2xl font-black text-gray-900 mb-2">No Projects Found</h3>
             <p className="text-gray-400 font-medium">Try adjusting your filters or search keywords.</p>
          </div>
        )}

        {/* Load More Button (Optional) */}
        {!loading && projects.length > 0 && projects.length % 6 === 0 && (
          <div className="mt-20 flex justify-center">
            <button className="px-12 py-5 bg-gray-900 text-white rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-primary transition-all shadow-xl shadow-gray-900/10 hover:shadow-primary/30">
              Load More Projects
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
