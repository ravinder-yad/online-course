import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
    FaSearch, FaBars, FaTimes, FaChevronDown, FaStar,
    FaUsers, FaArrowRight, FaCheck, FaClock, FaLinkedin,
    FaTwitter, FaPlus, FaMinus, FaQuoteLeft, FaRocket, FaCertificate,
    FaCode, FaDatabase, FaShieldAlt, FaBullhorn, FaBrain, FaPaintBrush,
    FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaArrowUp, FaGraduationCap, FaGlobeAmericas,
    FaPlay, FaHeart, FaUserTie, FaFilter, FaThLarge, FaList, FaShoppingCart
} from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

// --- SUB-COMPONENTS ---
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CourseCard = ({ course }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all flex flex-col"
    >
        {/* Image Area */}
        <div className="relative h-56 overflow-hidden">
            <img src={course.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={course.title} />
            <div className="absolute top-5 left-5">
                <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm">{course.category}</span>
            </div>
            {course.bestseller && (
                <div className="absolute top-5 right-5">
                    <span className="px-4 py-1.5 bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">Bestseller</span>
                </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Link to={`/course/${course.id}`}>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-2xl">
                        <FaPlay size={18} className="ml-1" />
                    </motion.button>
                </Link>
            </div>
        </div>

        {/* Content Area */}
        <div className="p-8 flex flex-col flex-1">
            <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1.5 text-orange-500">
                    <FaStar size={12} />
                    <span className="text-sm font-black">{course.rating}</span>
                </div>
                <div className="w-1 h-1 bg-gray-300 rounded-full" />
                <div className="text-sm font-bold text-gray-400">({course.reviews} reviews)</div>
            </div>

            <Link to={`/course/${course.id}`}>
                <h3 className="text-xl font-black text-gray-950 leading-tight mb-4 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {course.title}
                </h3>
            </Link>

            <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-gray-100 overflow-hidden border-2 border-white shadow-sm">
                    <img src={course.instructorImg} className="w-full h-full object-cover" alt="" />
                </div>
                <span className="text-sm font-bold text-gray-500">{course.instructor}</span>
            </div>

            <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                <div>
                    <span className="text-2xl font-black text-gray-950">${course.price}</span>
                </div>
                <Link to={`/course/${course.id}`} className="w-12 h-12 bg-gray-950 text-white rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 transition-all shadow-xl">
                    <FaArrowRight size={16} />
                </Link>
            </div>
        </div>
    </motion.div>
);

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All");
    const [priceRange, setPriceRange] = useState(500);
    const [viewMode, setViewMode] = useState("grid");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const categories = ["All", "Web Development", "Human Design", "Data Intelligence", "Growth Marketing"];

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                setIsLoading(true);
                const res = await axios.get("/api/courses");
                setCourses(res.data);
                setError(null);
            } catch (err) {
                console.error("Error fetching courses:", err);
                setError("Failed to load courses. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchCourses();
    }, []);

    const filteredCourses = activeCategory === "All"
        ? courses.filter(c => c.price <= priceRange)
        : courses.filter(c => c.category === activeCategory && c.price <= priceRange);

    return (
        <div className="bg-slate-50 min-h-screen">
            <Navbar />

            {/* Page Header */}
            <header className="pt-40 pb-20 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                        <div className="max-w-3xl">
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full font-bold text-xs mb-6">
                                <FaRocket /> <span className="uppercase tracking-widest">Browse our full catalog</span>
                            </motion.div>
                            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-black text-gray-950 tracking-tighter leading-[0.9] mb-8">
                                Master Any Skill. <br />
                                <span className="text-gray-300">Level Up Your Career.</span>
                            </motion.h1>
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg text-gray-500 font-bold max-w-xl italic">
                                Over 5,000+ courses curated by industry giants. From raw beginners to senior architects.
                            </motion.p>
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="flex flex-col text-right">
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Total Courses</span>
                                <span className="text-3xl font-black text-gray-950">5,842</span>
                            </div>
                            <div className="w-12 h-12 bg-gray-950 text-white rounded-2xl flex items-center justify-center">
                                <HiOutlineAcademicCap size={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content Wall */}
            <main className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20">
                <div className="flex flex-col xl:flex-row gap-16">

                    {/* Sidebar Filters */}
                    <aside className="xl:w-80 shrink-0 space-y-12">
                        {/* Categories */}
                        <div>
                            <h4 className="text-sm font-black text-gray-950 uppercase tracking-[0.2em] mb-8">Categories</h4>
                            <div className="flex flex-wrap xl:flex-col gap-3">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`px-6 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all text-left ${activeCategory === cat ? "bg-gray-950 text-white shadow-xl" : "bg-white text-gray-500 hover:bg-gray-100"}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Price Filter */}
                        <div className="p-8 bg-white border border-gray-100 rounded-[2.5rem]">
                            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Price Range</h4>
                            <input
                                type="range" min="0" max="500" value={priceRange}
                                onChange={(e) => setPriceRange(e.target.value)}
                                className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-indigo-600 mb-4"
                            />
                            <div className="flex justify-between items-center">
                                <span className="text-xl font-black text-gray-950">$0</span>
                                <span className="text-xl font-black text-gray-950">${priceRange}</span>
                            </div>
                        </div>

                        {/* Elite Perks */}
                        <div className="p-8 bg-indigo-600 rounded-[2.5rem] text-white">
                            <FaShieldAlt className="text-3xl mb-6 opacity-30" />
                            <h4 className="text-lg font-black leading-tight mb-4">Unlock Lifetime Access to All Elite Paths</h4>
                            <p className="text-indigo-100 text-xs font-bold leading-relaxed mb-8">Get the annual membership and save 40% on top of university certifications.</p>
                            <button className="w-full py-4 bg-white text-indigo-600 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-indigo-50 transition-all">Go Pro Now</button>
                        </div>
                    </aside>

                    {/* Content Area */}
                    <div className="flex-1">
                        {/* Controls */}
                        <div className="flex flex-wrap items-center justify-between gap-6 mb-12">
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-black text-gray-400">Showing {filteredCourses.length} results</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
                                <button onClick={() => setViewMode("grid")} className={`p-3 rounded-xl transition-all ${viewMode === "grid" ? "bg-gray-100 text-gray-950" : "text-gray-400"}`}>
                                    <FaThLarge size={14} />
                                </button>
                                <button onClick={() => setViewMode("list")} className={`p-3 rounded-xl transition-all ${viewMode === "list" ? "bg-gray-100 text-gray-950" : "text-gray-400"}`}>
                                    <FaList size={14} />
                                </button>
                            </div>
                        </div>

                        {/* Course Grid */}
                        {isLoading ? (
                            <div className="flex flex-col items-center justify-center py-40">
                                <div className="w-16 h-16 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin mb-6"></div>
                                <p className="text-gray-400 font-black uppercase tracking-[0.2em] text-[10px]">Loading Courses...</p>
                            </div>
                        ) : error ? (
                            <div className="text-center py-40 bg-rose-50 rounded-[3rem] border border-rose-100 p-12">
                                <h3 className="text-2xl font-black text-rose-600 mb-4">{error}</h3>
                                <button
                                    onClick={() => window.location.reload()}
                                    className="px-8 py-4 bg-rose-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-rose-700 transition-all"
                                >
                                    Retry Connection
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <AnimatePresence mode="popLayout">
                                    {filteredCourses.map(course => (
                                        <CourseCard key={course.id || course._id} course={course} />
                                    ))}
                                </AnimatePresence>
                            </div>
                        )}

                        {/* Empty State */}
                        {filteredCourses.length === 0 && (
                            <div className="text-center py-40">
                                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8 text-gray-400">
                                    <FaSearch size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-gray-950 mb-2">No courses found</h3>
                                <p className="text-gray-400 font-bold tracking-tight">Try adjusting your filters or category.</p>
                            </div>
                        )}

                        {/* Pagination */}
                        <div className="mt-20 flex items-center justify-center gap-4">
                            {[1, 2, 3, "...", 12].map((n, i) => (
                                <button key={i} className={`w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-black transition-all ${n === 1 ? "bg-gray-950 text-white shadow-xl" : "bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-950"}`}>
                                    {n}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Courses;
