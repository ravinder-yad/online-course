import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
    FaSearch, FaBars, FaTimes, FaChevronDown, FaShoppingCart, FaStar,
    FaPlayCircle, FaUsers, FaArrowRight, FaCheck, FaClock, FaLinkedin,
    FaTwitter, FaPlus, FaMinus, FaQuoteLeft, FaRocket, FaCertificate,
    FaCode, FaDatabase, FaShieldAlt, FaBullhorn, FaBrain, FaPaintBrush,
    FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaArrowUp, FaGraduationCap, FaGlobeAmericas,
    FaPlay, FaHeart, FaUserTie
} from "react-icons/fa";
import { HiOutlineLightBulb, HiOutlineAcademicCap } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PaymentModal from "../components/PaymentModal";
import { useCart } from "../context/CartContext";

// --- SUB-COMPONENTS (ALL IN ONE FILE) ---

const Hero = () => (
    <section className="relative pt-32 pb-24 lg:pt-52 lg:pb-40 bg-white overflow-hidden selection:bg-indigo-600 selection:text-white">
        {/* Abstract Background Elements */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-violet-50/50 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-20">
                {/* LEFT CONTENT */}
                <div className="flex-1 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full font-black text-[11px] uppercase tracking-[0.25em] shadow-sm mb-10 border border-indigo-100/50"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        New: AI Mastery path is now live
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className="text-5xl md:text-7xl font-black text-gray-950 leading-[1.05] mb-10 tracking-tight"
                    >
                        Unlock Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-[length:200%_auto] animate-gradient">Future Self.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl md:text-2xl text-gray-500 mb-12 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed"
                    >
                        Skip the basics. Master high-demand skills through production-grade projects led by top 1% industry veterans.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap justify-center lg:justify-start gap-6"
                    >
                        <Link to="/courses" className="group relative px-12 py-6 bg-gray-950 text-white rounded-[2rem] font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-gray-200 block text-center">
                            Explore Catalog
                            <div className="absolute inset-0 rounded-[2rem] border-2 border-white/0 group-hover:border-white/20 transition-all m-1" />
                        </Link>
                        <button className="px-12 py-6 bg-white text-gray-900 border-2 border-gray-100 rounded-[2rem] font-bold text-lg hover:bg-gray-50 hover:border-indigo-100 transition-all flex items-center gap-3 shadow-xl shadow-gray-100/50">
                            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white"><FaPlay className="ml-1 text-[10px]" /></div>
                            See How It Works
                        </button>
                    </motion.div>

                    <div className="mt-16 flex items-center justify-center lg:justify-start gap-8 opacity-40">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Trusted By:</span>
                        <div className="flex gap-8 items-center grayscale font-bold text-xl italic text-gray-400">
                            <span>Google</span>
                            <span>Amazon</span>
                            <span>Meta</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="flex-1 relative"
                >
                    <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[16px] border-white">
                        <img
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                            className="w-full h-[600px] object-cover"
                            alt="Hero"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Floating Cards */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-10 -left-12 bg-white/90 backdrop-blur-xl p-6 rounded-[2.5rem] shadow-2xl z-20 flex items-center gap-5 border border-white/50"
                    >
                        <div className="w-16 h-16 bg-green-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-green-100"><FaUsers size={28} /></div>
                        <div>
                            <p className="text-3xl font-black text-gray-950 tracking-tighter">50K+</p>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Global Alumni</p>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute top-20 -right-12 bg-white/90 backdrop-blur-xl p-6 rounded-[2.5rem] shadow-2xl z-20 flex flex-col gap-3 border border-white/50"
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex text-yellow-500"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                            <span className="font-bold text-gray-900">4.9/5</span>
                        </div>
                        <p className="text-[11px] font-bold text-gray-400 w-32 leading-relaxed">"Best decision for my career shift!"</p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </section>
);

const StatsBar = () => (
    <div className="bg-gray-50/50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
                { v: 50, l: "Expert Mentors", c: "text-indigo-600", bg: "bg-indigo-50" },
                { v: 12, l: "Avg Month Salary Hike", c: "text-green-600", bg: "bg-green-50", suffix: "0%" },
                { v: 450, l: "Hiring Partners", c: "text-orange-600", bg: "bg-orange-50" },
                { v: 98, l: "Satisfaction Rate", c: "text-rose-600", bg: "bg-rose-50", suffix: "%" }
            ].map((s, i) => (
                <div key={i} className="flex flex-col items-center group">
                    <div className={`w-16 h-16 ${s.bg} rounded-[2rem] flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-500`}>
                        <div className={`w-2 h-2 rounded-full ${s.c} animate-ping absolute opacity-20`} />
                        <span className={`text-2xl font-black ${s.c}`}>#</span>
                    </div>
                    <div className="text-4xl font-black text-gray-950 mb-2 tracking-tighter">
                        <CountUp end={s.v} duration={3} />{s.suffix || "+"}
                    </div>
                    <div className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] text-center max-w-[120px]">{s.l}</div>
                </div>
            ))}
        </div>
    </div>
);

const Categories = () => {
    const cats = [
        { t: "Web Engineering", i: <FaCode />, c: "from-blue-500 to-indigo-500", id: "web-development" },
        { t: "Data Intelligence", i: <FaDatabase />, c: "from-teal-500 to-emerald-500", id: "data-intelligence" },
        { t: "Human Experience", i: <FaPaintBrush />, c: "from-rose-500 to-pink-500", id: "human-design" },
        { t: "Growth Hacking", i: <FaBullhorn />, c: "from-violet-500 to-purple-500", id: "growth-marketing" },
        { t: "AI Algorithms", i: <FaBrain />, c: "from-amber-500 to-orange-500", id: "web-development" },
        { t: "Cyber Guard", i: <FaShieldAlt />, c: "from-red-500 to-rose-500", id: "web-development" },
        { t: "Tech Leadership", i: <FaGraduationCap />, c: "from-indigo-500 to-violet-500", id: "web-development" },
        { t: "Show All paths", i: <FaArrowRight />, c: "from-gray-700 to-gray-900", id: "web-development" }
    ];

    return (
        <section className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <h2 className="text-indigo-600 font-black uppercase tracking-[0.4em] text-[11px] mb-4">Curriculum</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-gray-950 tracking-tight">Master Every Domain.</h3>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {cats.map((cat, i) => (
                        <Link key={i} to={`/category/${cat.id}`}>
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="h-full relative group p-10 rounded-[3rem] bg-gray-50 border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] transition-all cursor-pointer overflow-hidden"
                            >
                                <div className={`w-14 h-14 bg-gradient-to-br ${cat.c} rounded-2xl flex items-center justify-center text-white text-2xl mb-8 group-hover:scale-110 transition-transform shadow-lg`}>{cat.i}</div>
                                <h4 className="text-lg font-black text-gray-950 mb-2 leading-tight">{cat.t}</h4>
                                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest italic group-hover:text-indigo-500 transition-colors">70+ Modules</p>
                                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity"><FaArrowRight size={40} className="-rotate-45" /></div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

const BestSellingCourses = ({ courses, isLoading, onEnroll, onAddToCart }) => {
    return (
        <section className="py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <h2 className="text-indigo-600 font-black uppercase tracking-[0.4em] text-[11px] mb-4 text-center md:text-left">Trending Now</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-gray-950 tracking-tight text-center md:text-left">Elite Training Programs.</h3>
                    </div>
                    <Link to="/courses" className="px-10 py-4 bg-white border border-gray-200 rounded-[1.5rem] font-black text-xs uppercase tracking-widest text-gray-900 hover:bg-gray-950 hover:text-white transition-all shadow-xl shadow-gray-200/50">View Professional Catalog</Link>
                </div>

                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="w-16 h-16 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin mb-6"></div>
                        <p className="text-gray-400 font-black uppercase tracking-[0.2em] text-[10px]">Loading Best Sellers...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {courses.map((c, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -20 }}
                                className="bg-white rounded-[4rem] overflow-hidden shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] border border-gray-100 transition-all group"
                            >
                                <div className="relative h-72 overflow-hidden">
                                    <img src={c.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Course" />
                                    <div className="absolute top-8 left-8 bg-gray-950/40 backdrop-blur-md text-white px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.2em] border border-white/10">Bestseller</div>
                                    <div className="absolute bottom-6 left-8 right-8 flex justify-between items-center translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="p-3 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/20 text-white"><FaHeart size={14} /></div>
                                        <div className="p-3 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/20 text-white flex items-center gap-2 font-bold text-xs"><FaClock /> {c.duration}</div>
                                    </div>
                                </div>
                                <div className="p-10">
                                    <div className="flex items-center gap-2 text-yellow-500 mb-6 font-black text-sm"><FaStar /> {c.rating} <span className="text-gray-300 font-bold ml-1 tracking-widest text-[10px] uppercase">({c.reviews})</span></div>
                                    <Link to={`/course/${c.id}`}><h4 className="text-2xl font-black text-gray-950 mb-8 leading-tight group-hover:text-indigo-600 transition-colors uppercase tracking-tight line-clamp-2">{c.title}</h4></Link>
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 overflow-hidden">
                                                <img src={c.instructorImg} alt="" className="w-full h-full object-cover" />
                                            </div>
                                            <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{c.instructor}</span>
                                        </div>
                                        <div className="text-[10px] font-black text-gray-400 bg-gray-100 px-3 py-1 rounded-lg uppercase tracking-widest">{c.curriculum?.length || 0} Modules</div>
                                    </div>
                                    <div className="pt-8 border-t border-gray-50">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-sm font-black text-indigo-400">$</span>
                                                <span className="text-4xl font-black text-gray-950">{c.price}</span>
                                            </div>
                                            <button
                                                onClick={() => onEnroll(c.title, c.price)}
                                                className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-gray-950 transition-all shadow-xl shadow-indigo-100"
                                            >
                                                Enroll Now
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => onAddToCart({ id: c._id || c.id, title: c.title, price: Number(c.price), image: c.image })}
                                            className="w-full py-4 border-2 border-gray-100 rounded-2xl font-black text-[10px] uppercase tracking-widest text-gray-400 hover:bg-gray-50 transition-all"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

const WhyChooseUs = () => (
    <section className="py-32 bg-white selection:bg-indigo-600 selection:text-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-24">
                <div className="flex-1 relative order-2 lg:order-1">
                    <div className="relative z-10 rounded-[5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] ring-[20px] ring-gray-50">
                        <img
                            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800"
                            className="w-full h-[650px] object-cover"
                            alt="Experience"
                        />
                    </div>
                    {/* Decorative Blob */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-100 rounded-full mix-blend-multiply opacity-70 animate-bounce transition-all duration-[5s] blur-2xl" />

                    <div className="absolute -bottom-12 -right-12 bg-gray-950 p-12 rounded-[4rem] text-white shadow-3xl hidden md:block border-[12px] border-white max-w-[280px]">
                        <div className="text-4xl font-black mb-4 tracking-tighter italic">98%</div>
                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] leading-relaxed">Students landed roles at Fortune 500 within 6 months.</div>
                    </div>
                </div>

                <div className="flex-1 order-1 lg:order-2">
                    <h2 className="text-indigo-600 font-black uppercase tracking-[0.4em] text-[11px] mb-6 letter-spacing-widest">Our Engineering</h2>
                    <h3 className="text-5xl md:text-6xl font-black text-gray-950 tracking-tight mb-12 leading-[1.1]">Built For Performance. <br /> Driven By Success.</h3>

                    <div className="space-y-12">
                        {[
                            { t: "Live Mentor Strategy", d: "Get unstuck with 1-on-1 strategy sessions from industry pioneers who built the apps you use.", i: <FaGlobeAmericas size={34} />, c: "bg-blue-50 text-blue-600" },
                            { t: "Elite Certification", d: "Resume-boosting credentials that are hard-earned and globally recognized by top-tier recruiters.", i: <FaCertificate size={34} />, c: "bg-orange-50 text-orange-600" },
                            { t: "Production Intensity", d: "We don't do 'To-Do apps'. You build production-grade, distributed systems from day one.", i: <FaRocket size={34} />, c: "bg-indigo-50 text-indigo-600" }
                        ].map((f, i) => (
                            <div key={i} className="flex gap-8 group">
                                <div className={`shrink-0 w-20 h-20 ${f.c} rounded-[2rem] flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-6 shadow-sm border border-gray-100/50`}>{f.i}</div>
                                <div>
                                    <h4 className="text-2xl font-black text-gray-950 mb-3 tracking-tight">{f.t}</h4>
                                    <p className="text-gray-400 font-medium text-lg leading-relaxed max-w-sm">{f.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Testimonials = () => (
    <section className="py-40 bg-gray-950 relative overflow-hidden">
        {/* Dark Bg Overlay */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent opacity-5" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
                <h3 className="text-indigo-500 font-black uppercase tracking-[0.5em] text-[11px] mb-6">Global Success Stories</h3>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic">From Learners To Leaders.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                    { name: "Vikram Malhotra", role: "Software Engineer", company: "Google", img: "1", text: "The production-intensity of the course was exactly what I needed. I didn't just learn React; I learned how to scale it." },
                    { name: "Ananya Iyer", role: "UX Lead", company: "Apple", img: "2", text: "EduFlow's design path is unlike anything else. The focus on human-centric systems changed my perspective entirely." },
                    { name: "Kabir Das", role: "Data Scientist", company: "NVIDIA", img: "3", text: "Deep learning modules were mind-blowing. The mentor support during my AI capstone project was elite." }
                ].map((t, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-white/5 backdrop-blur-3xl border border-white/10 p-12 rounded-[4rem] hover:bg-white/10 transition-all group relative"
                    >
                        <div className="flex gap-1 text-indigo-400 mb-10 text-xs">
                            {[1, 2, 3, 4, 5].map(s => <FaStar key={s} />)}
                        </div>
                        <FaQuoteLeft className="text-indigo-500 text-6xl absolute -top-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity" />
                        <p className="text-gray-300 text-xl font-medium leading-relaxed mb-12 italic relative z-10">"{t.text}"</p>

                        <div className="flex items-center gap-5 border-t border-white/5 pt-10">
                            <div className="w-16 h-16 bg-gray-800 rounded-2xl overflow-hidden ring-4 ring-indigo-500/10">
                                <img src={`https://i.pravatar.cc/150?u=user${i + 55}`} alt="User" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h5 className="font-bold text-white text-lg tracking-tight leading-none mb-1">{t.name}</h5>
                                <div className="flex items-center gap-2">
                                    <span className="text-indigo-400 font-black text-[9px] uppercase tracking-widest">{t.role}</span>
                                    <span className="w-1 h-1 bg-gray-600 rounded-full" />
                                    <span className="text-gray-500 font-black text-[9px] uppercase tracking-widest">{t.company}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-24 flex justify-center items-center gap-12 opacity-30 grayscale contrast-125">
                <span className="text-white font-black italic text-2xl uppercase tracking-tighter">Goldman Sachs</span>
                <span className="text-white font-black italic text-2xl uppercase tracking-tighter">Microsoft</span>
                <span className="text-white font-black italic text-2xl uppercase tracking-tighter">Tesla</span>
            </div>
        </div>
    </section>
);

const CTASection = () => (
    <section className="py-40 bg-white selection:bg-gray-950 selection:text-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="bg-indigo-600 rounded-[5rem] p-20 md:p-32 relative overflow-hidden text-center text-white shadow-[0_60px_120px_-20px_rgba(79,70,229,0.3)] group">
                {/* Animated Background Spheres */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -mr-64 -mt-64"
                />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-400/20 rounded-full blur-[80px] -ml-40 -mb-40" />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-12 border border-white/20"
                    >
                        Admission Open 2026
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl tracking-tighter leading-[1] mb-10 font-black">Turn Your Potential <br /> Into Performance.</h2>
                    <p className="text-indigo-100 text-xl md:text-2xl font-medium mb-16 max-w-2xl mx-auto opacity-80 leading-relaxed italic">Join a world-class community of 50,000+ ambitious creators building the future.</p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <Link to="/courses" className="px-14 py-7 bg-white text-indigo-700 rounded-[2.5rem] font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-3xl hover:shadow-white/20 uppercase tracking-tighter">Claim Your Path</Link>
                        <button className="px-14 py-7 bg-indigo-500/20 backdrop-blur-md border-[3px] border-white/10 text-white rounded-[2.5rem] font-bold text-lg hover:bg-white/10 transition-all uppercase tracking-tighter">View Pricing</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const FAQ = () => {
    const [open, setOpen] = useState(0);
    const faqs = [
        { q: "Is the curriculum beginner-friendly?", a: "While we start with fundamentals, our paths are designed for 'High Intensity' learning. We move fast and focus on production standards from day one." },
        { q: "Do I get 1-on-1 mentorship?", a: "Every professional enrollment includes weekly live strategy sessions and unlimited private Slack access to our mentor network." },
        { q: "What is your job placement rate?", a: "98% of our students report landing a full-time role or freelance project within 6 months of graduation. We take your career seriously." },
        { q: "How long is each bootcamp?", a: "Depending on the path, programs range from 12 to 24 weeks. Most students dedicate 15-20 hours per week for optimal results." },
    ];

    return (
        <section className="py-32 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-24">
                    <h3 className="text-indigo-600 font-black uppercase tracking-[0.4em] text-[11px] mb-4">Support</h3>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-950 tracking-tight">Clarity In Every Step.</h2>
                </div>
                <div className="space-y-6">
                    {faqs.map((f, i) => (
                        <div key={i} className={`rounded-[3rem] border-2 transition-all duration-500 overflow-hidden ${open === i ? 'border-indigo-600 bg-white shadow-[0_30px_60px_-15px_rgba(79,70,229,0.15)]' : 'border-gray-50 bg-gray-50/20'}`}>
                            <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left p-10 flex justify-between items-center group">
                                <span className={`text-xl md:text-2xl font-black tracking-tighter ${open === i ? 'text-indigo-600' : 'text-gray-800'}`}>{f.q}</span>
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${open === i ? 'bg-indigo-600 text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-indigo-50 group-hover:text-indigo-600'}`}>
                                    {open === i ? <FaMinus size={14} /> : <FaPlus size={14} />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {open === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="px-10 pb-10 text-gray-400 font-medium text-xl leading-relaxed max-w-2xl"
                                    >
                                        {f.a}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


// --- MAIN WRAPPER ---
const Home = () => {
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState({ t: "", p: "" });
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchTopCourses = async () => {
            try {
                setIsLoading(true);
                const res = await axios.get("/api/courses");
                // Get top 3 rated courses for best sellers
                const topCourses = res.data.slice(0, 3);
                setCourses(topCourses);
            } catch (err) {
                console.error("Error fetching home courses:", err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchTopCourses();
    }, []);

    const handleEnroll = (title, price) => {
        setSelectedCourse({ t: title, p: price });
        setIsPaymentModalOpen(true);
    };

    const handleAddToCart = (course) => {
        addToCart(course);
    };

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900 scroll-smooth">
            <Navbar />
            <Hero />
            <StatsBar />
            <Categories />
            <BestSellingCourses courses={courses} isLoading={isLoading} onEnroll={handleEnroll} onAddToCart={handleAddToCart} />
            <WhyChooseUs />
            <Testimonials />
            <CTASection />
            <FAQ />
            <Footer />

            <PaymentModal
                isOpen={isPaymentModalOpen}
                onClose={() => setIsPaymentModalOpen(false)}
                courseTitle={selectedCourse.t}
                price={selectedCourse.p}
            />
        </div>
    );
};

export default Home;
