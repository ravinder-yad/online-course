import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
    FaSearch, FaBars, FaTimes, FaChevronDown, FaStar,
    FaUsers, FaArrowRight, FaCheck, FaClock, FaLinkedin,
    FaTwitter, FaPlus, FaMinus, FaQuoteLeft, FaRocket, FaCertificate,
    FaCode, FaDatabase, FaShieldAlt, FaBullhorn, FaBrain, FaPaintBrush,
    FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaArrowUp, FaGraduationCap, FaGlobeAmericas,
    FaPlay, FaHeart, FaUserTie, FaFilter, FaGithub
} from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

// --- SUB-COMPONENTS ---
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MentorCard = ({ mentor }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="group bg-white rounded-[3rem] p-8 border border-gray-100 hover:shadow-[0_45px_100px_-30px_rgba(0,0,0,0.12)] transition-all duration-500 flex flex-col items-center text-center"
    >
        <div className="relative mb-8">
            <div className="w-40 h-40 rounded-[2.5rem] overflow-hidden border-[8px] border-gray-50 group-hover:border-indigo-50 transition-colors">
                <img src={mentor.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={mentor.name} />
            </div>
            <div className="absolute -bottom-4 right-2 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xl border border-gray-50 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <FaLinkedin size={20} />
            </div>
            {mentor.topPick && (
                <div className="absolute -top-4 -left-4 px-5 py-2 bg-gray-950 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-2xl skew-x-[-12deg]">
                    Elite Mentor
                </div>
            )}
        </div>

        <h3 className="text-2xl font-black text-gray-950 mb-2 group-hover:text-indigo-600 transition-colors">{mentor.name}</h3>
        <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">{mentor.role}</p>

        <div className="flex items-center gap-2 mb-8 p-3 bg-gray-50 rounded-2xl px-6">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">At {mentor.company}</span>
        </div>

        <div className="w-full grid grid-cols-2 gap-4 mb-8 pt-8 border-t border-gray-50">
            <div className="flex flex-col items-center">
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Students</span>
                <span className="text-lg font-black text-gray-950">{mentor.students}</span>
            </div>
            <div className="flex flex-col items-center border-l border-gray-50">
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Rating</span>
                <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" size={12} />
                    <span className="text-lg font-black text-gray-950">{mentor.rating}</span>
                </div>
            </div>
        </div>

        <motion.button
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            className="w-full py-5 bg-gray-50 text-gray-950 rounded-[1.5rem] text-[11px] font-black uppercase tracking-[0.2em] group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm"
        >
            View Portfolio
        </motion.button>
    </motion.div>
);

const Mentors = () => {
    const mentors = [
        { id: 1, name: "Sarah Drasner", role: "VPE @ Netlify", company: "Netlify", students: "12k+", rating: 4.9, topPick: true, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" },
        { id: 2, name: "Guillermo Rauch", role: "CEO @ Vercel", company: "Vercel", students: "25k+", rating: 5.0, topPick: true, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" },
        { id: 3, name: "Cassidy Williams", role: "Head of DX", company: "Remote", students: "15k+", rating: 4.9, topPick: false, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" },
        { id: 4, name: "Josh W. Comeau", role: "Indie Educator", company: "Joy of React", students: "8k+", rating: 5.0, topPick: true, image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" },
        { id: 5, name: "Dr. Angela Yu", role: "Lead Instructor", company: "App Brewery", students: "500k+", rating: 4.9, topPick: true, image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" },
        { id: 6, name: "Chris Do", role: "Founder @ The Futur", company: "The Futur", students: "100k+", rating: 4.8, topPick: false, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop" },
        { id: 7, name: "The Primeagen", role: "Senior Engineer", company: "Netflix", students: "30k+", rating: 4.9, topPick: true, image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop" },
        { id: 8, name: "Sarah Dayan", role: "Staff Engineer", company: "Algolia", students: "5k+", rating: 4.9, topPick: false, image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop" },
    ];

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            {/* HERO SECTION */}
            <section className="pt-48 pb-32 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30">
                    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-200 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-200 rounded-full blur-[100px]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-3 px-6 py-2 bg-white rounded-full shadow-xl border border-gray-100 mb-10">
                        <div className="flex -space-x-3">
                            {mentors.slice(0, 4).map((m, i) => (
                                <img key={i} src={m.image} className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="" />
                            ))}
                        </div>
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Join 100+ Elite Mentors</span>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-8xl font-black text-gray-950 tracking-tighter leading-[0.9] mb-10">
                        Learn From The <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600">Top 1%.</span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-gray-400 font-bold max-w-2xl mx-auto leading-relaxed mb-16">
                        Stop watching tutorials. Start building with veterans from Google, Vercel, Netflix, and top-tier startups.
                    </motion.p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <button className="px-12 py-6 bg-gray-950 text-white rounded-[2rem] font-black text-lg shadow-2xl hover:scale-105 transition-all uppercase tracking-tighter">Find My Mentor</button>
                        <button className="px-12 py-6 bg-white text-gray-950 border-2 border-gray-100 rounded-[2rem] font-bold text-lg hover:bg-gray-50 transition-all uppercase tracking-tighter">Become a Mentor</button>
                    </div>
                </div>
            </section>

            {/* MENTORS GRID */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-24">
                        <div>
                            <h2 className="text-[11px] font-black text-indigo-600 uppercase tracking-[0.4em] mb-4">Elite Directory</h2>
                            <h3 className="text-4xl md:text-5xl font-black text-gray-950 tracking-tight">World-Class Expertise. <br /> Dedicated To You.</h3>
                        </div>
                        <div className="flex bg-gray-50 p-2 rounded-2xl border border-gray-100">
                            {["All", "Dev", "Design", "Business"].map(tab => (
                                <button key={tab} className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${tab === "All" ? "bg-white text-gray-950 shadow-md" : "text-gray-400 hover:text-gray-600"}`}>{tab}</button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {mentors.map(mentor => (
                            <MentorCard key={mentor.id} mentor={mentor} />
                        ))}
                    </div>

                    <div className="mt-24 text-center">
                        <button className="px-10 py-5 bg-white border-2 border-gray-100 rounded-[2rem] font-black text-sm text-gray-400 hover:border-indigo-100 hover:text-indigo-600 transition-all uppercase tracking-widest shadow-sm">Load More Mentors</button>
                    </div>
                </div>
            </section>

            {/* BECOME A MENTOR CTA */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto bg-indigo-600 rounded-[4rem] p-12 lg:p-32 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] -mr-64 -mt-64" />
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-10 leading-[1]">Share Your Knowledge. <br /> Cultivate The Future.</h2>
                        <p className="text-indigo-100 text-xl font-medium mb-16 max-w-2xl mx-auto opacity-80 leading-relaxed italic">Join our global network of experts and help the next generation of creators reach their full potential.</p>
                        <button className="px-16 py-8 bg-white text-indigo-600 rounded-[2.5rem] font-black text-xl shadow-2xl hover:scale-105 transition-all uppercase tracking-tighter">Apply to Mentor</button>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <Footer />
        </div>
    );
};

export default Mentors;
