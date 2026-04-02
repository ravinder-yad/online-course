import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-[70] shadow-2xl overflow-y-auto"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center justify-between mb-10">
                <Link to="/" onClick={onClose} className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  EduScale
                </Link>
                <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-2xl">
                  <IoClose />
                </button>
              </div>

              <nav className="space-y-6">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Courses', path: '/courses' },
                  { name: 'Live Classes', path: '/live' },
                  { name: 'Projects', path: '/projects' },
                  { name: 'My Portfolio', path: '/my-projects' },
                  { name: 'Add Project', path: '/add-project' }
                ].map((link) => (
                  <Link key={link.name} to={link.path} onClick={onClose} className="block text-lg font-semibold text-gray-800 hover:text-primary transition-colors border-b border-gray-50 pb-2">
                    {link.name}
                  </Link>
                ))}
                
                <div className="pt-4 space-y-4">
                   <Link to="/login" onClick={onClose} className="block w-full py-3 text-center font-bold text-gray-700 hover:text-primary transition-colors border-2 border-gray-100 rounded-xl">
                      Login
                   </Link>
                   <Link to="/signup" onClick={onClose} className="block w-full py-3 text-center font-bold text-white bg-gradient-to-r from-primary to-secondary rounded-xl shadow-lg">
                      Sign Up
                   </Link>
                </div>
              </nav>

              <div className="mt-auto pt-10 text-center text-sm text-gray-400">
                © 2026 EduScale Platform
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
