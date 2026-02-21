import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { FaRocket, FaUsers, FaGraduationCap, FaGlobeAmericas } from "react-icons/fa";

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-indigo-600 selection:text-white">
            <Navbar initialScrolled={true} />

            {/* Hero Section */}
            <section className="pt-40 pb-24 bg-gray-950 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1]">We're on a Mission to <span className="text-indigo-500 italic">Accelerate</span> Human Potential.</h1>
                        <p className="text-xl text-gray-400 font-medium leading-relaxed">EduFlow was founded on a simple premise: traditional education is too slow for the modern world. We build paths that turn curious learners into industry leaders.</p>
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { t: "Production First", d: "We don't teach theory. We build real systems.", i: <FaRocket />, c: "text-indigo-600 bg-indigo-50" },
                            { t: "Elite Mentors", d: "Learn from the top 1% of the industry.", i: <FaUsers />, c: "text-rose-600 bg-rose-50" },
                            { t: "Global Community", d: "50,000+ graduates across 120 countries.", i: <FaGlobeAmericas />, c: "text-blue-600 bg-blue-50" },
                            { t: "Hard Earned", d: "Degrees are given. Certifications are earned.", i: <FaGraduationCap />, c: "text-amber-600 bg-amber-50" }
                        ].map((v, i) => (
                            <div key={i} className="group">
                                <div className={`w-16 h-16 ${v.c} rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform`}>{v.i}</div>
                                <h3 className="text-2xl font-black text-gray-950 mb-4 tracking-tight">{v.t}</h3>
                                <p className="text-gray-500 font-medium leading-relaxed">{v.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutUs;
