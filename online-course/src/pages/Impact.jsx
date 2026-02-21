import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Impact = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-indigo-600 selection:text-white">
            <Navbar initialScrolled={true} />

            <section className="pt-40 pb-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1]">Beyond the <span className="text-indigo-600 italic">Classroom.</span></h1>
                        <p className="text-xl text-gray-500 font-medium leading-relaxed">We measure our success not by revenue, but by the impact our graduates have on the world. From open-source contributions to carbon-neutral systems, EduFlow alumni are leading the charge.</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="relative rounded-[4rem] overflow-hidden shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800" alt="Impact" className="w-full h-[500px] object-cover" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-4xl font-black text-gray-950 mb-8 tracking-tight italic">$2.5B+</h2>
                        <p className="text-lg text-gray-500 font-medium leading-relaxed mb-8">Combined increase in annual salary across our alumni network. We are building the backbone of the next economic revolution.</p>
                        <ul className="space-y-6">
                            {[
                                "12,000+ Scholarship seats provided in 2025",
                                "Zero carbon footprint digital infrastructure",
                                "100% Remote-first employment advocacy"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-gray-950 font-black tracking-tight">
                                    <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Impact;
