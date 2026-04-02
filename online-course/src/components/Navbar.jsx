import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiMenuAlt3, HiOutlineSearch, HiOutlineShoppingCart, HiOutlineBell, HiOutlineHeart } from 'react-icons/hi';
import { FaChevronDown } from 'react-icons/fa';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      isScrolled ? 'py-3 navbar-glass shadow-lg' : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between gap-8">
          
          {/* Logo Section */}
          <div className="flex items-center gap-4 lg:gap-12 overflow-hidden">
            <Link to="/" className="text-xl lg:text-2xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent flex items-center gap-2 shrink-0">
              <div className="w-8 lg:w-10 h-8 lg:h-10 bg-gradient-to-tr from-primary to-secondary rounded-xl flex items-center justify-center text-white text-lg lg:text-xl shadow-lg shadow-primary/20">E</div>
              <span className="hidden xs:block">EduScale</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              <div 
                className="relative group py-2"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}
              >
                <button className="flex items-center gap-1 font-bold text-gray-600 hover:text-primary transition-colors text-sm xl:text-base">
                  Categories <FaChevronDown className={`text-[10px] transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              <Link to="/courses" className="font-bold text-gray-600 hover:text-primary transition-colors text-sm xl:text-base nav-link-ltr">Courses</Link>
              <Link to="/live" className="font-bold text-gray-600 hover:text-primary transition-colors text-sm xl:text-base nav-link-ltr flex items-center gap-2">
                 Live <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </Link>
              <Link to="/projects" className="font-bold text-gray-600 hover:text-primary transition-colors text-sm xl:text-base nav-link-ltr">Projects</Link>
            </nav>
          </div>

          {/* Search System - Contextual hide on mobile */}
          <div className={`hidden md:flex flex-1 max-w-sm xl:max-w-md relative transition-all duration-300 ${searchFocused ? 'scale-105' : ''}`}>
            <div className={`flex items-center w-full bg-gray-50 border-2 rounded-2xl px-4 py-2 group transition-all duration-300 ${
              searchFocused ? 'border-primary bg-white shadow-xl shadow-primary/10' : 'border-gray-100'
            }`}>
              <HiOutlineSearch className={`text-xl transition-colors ${searchFocused ? 'text-primary' : 'text-gray-400'}`} />
              <input 
                type="text" 
                placeholder="Search Skills..." 
                className="bg-transparent border-none outline-none w-full px-3 text-gray-800 placeholder:text-gray-400 font-bold text-sm"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>
          </div>

          {/* User Action Area */}
          <div className="flex items-center gap-3 lg:gap-6">
            <div className="hidden sm:flex items-center gap-2 lg:gap-4 text-xl lg:text-2xl text-gray-500">
               <button className="relative hover:text-primary transition-colors p-2 hover:bg-primary/5 rounded-xl">
                  <HiOutlineSearch className="md:hidden" />
               </button>
               <button className="relative hover:text-primary transition-colors p-2 hover:bg-primary/5 rounded-xl">
                  <HiOutlineShoppingCart />
                  <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[9px] rounded-full flex items-center justify-center font-black">2</span>
               </button>
               <button className="relative hover:text-primary transition-colors p-2 hover:bg-primary/5 rounded-xl hidden xl:block">
                  <HiOutlineBell />
                  <div className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full border-2 border-white"></div>
               </button>
            </div>

            <div className="h-6 w-[1px] bg-gray-200 hidden lg:block"></div>

            {/* Auth/Profile */}
            <div className="hidden lg:flex items-center gap-4">
              <Link to="/login" className="font-black text-xs uppercase tracking-widest text-gray-500 hover:text-primary transition-colors">Login</Link>
              <Link to="/signup" className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all">
                Join
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-2xl text-gray-800 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <HiMenuAlt3 />
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu Overlay */}
      <AnimatePresence>
        {isMegaMenuOpen && (
          <div 
             onMouseEnter={() => setIsMegaMenuOpen(true)}
             onMouseLeave={() => setIsMegaMenuOpen(false)}
             className="w-full"
          >
             <MegaMenu isOpen={true} />
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
};

export default Navbar;
