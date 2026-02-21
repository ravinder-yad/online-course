import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { FaPlayCircle } from "react-icons/fa";

const FreeContent = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-indigo-600 selection:text-white">
            <Navbar initialScrolled={true} />

            <section className="pt-40 pb-24 bg-rose-50">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1] text-gray-950">Knowledge Should <br /> Be <span className="text-rose-600 italic">Free.</span></h1>
                        <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">Access our elite workshops, open-source modules, and technical deep-dives without spending a dime.</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {[
                        { t: "React 18 Performance", d: "Deep dive into selective hydration.", c: "bg-indigo-50", i: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800" },
                        { t: "The Art of Refactoring", d: "Clean code principles for senior devs.", c: "bg-amber-50", i: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800" },
                        { t: "SEO Strategy for 2026", d: "Ranking in the age of AI search.", c: "bg-emerald-50", i: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800" }
                    ].map((item, i) => (
                        <motion.div key={i} whileHover={{ y: -10 }} className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-gray-100 group">
                            <div className="relative h-64 overflow-hidden">
                                <img src={item.i} alt={item.t} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <FaPlayCircle className="text-white text-6xl" />
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-black text-gray-950 mb-4 tracking-tight">{item.t}</h3>
                                <p className="text-gray-500 font-medium mb-8 leading-relaxed">{item.d}</p>
                                <button className="text-sm font-black text-rose-600 uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">Watch Now <FaPlayCircle /></button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default FreeContent;
