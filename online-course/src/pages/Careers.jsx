import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Careers = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-indigo-600 selection:text-white">
            <Navbar initialScrolled={true} />

            <section className="pt-40 pb-24 bg-indigo-600 text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1]">Shape the Future <br /> of Education.</h1>
                        <p className="text-xl text-indigo-100 font-medium max-w-2xl mx-auto">Join a remote-first team of engineers, designers, and educators building the world's most intense learning platform.</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-32 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-black text-gray-950 mb-12 tracking-tight">Open Roles</h2>
                    <div className="space-y-6">
                        {[
                            { t: "Senior React Engineer", d: "Remote / Engineering", p: "Full-Time" },
                            { t: "Curriculum Designer (AI)", d: "Remote / Education", p: "Full-Time" },
                            { t: "Product Designer", d: "Remote / Design", p: "Contract" },
                            { t: "Junior Growth Hacker", d: "Remote / Marketing", p: "Full-Time" }
                        ].map((job, i) => (
                            <div key={i} className="p-8 border-2 border-gray-50 rounded-[2.5rem] hover:border-indigo-600 hover:bg-gray-50/50 transition-all group flex justify-between items-center cursor-pointer">
                                <div>
                                    <h3 className="text-xl font-black text-gray-950 mb-2">{job.t}</h3>
                                    <div className="flex gap-4 text-xs font-black text-gray-400 uppercase tracking-widest">
                                        <span>{job.d}</span>
                                        <span>•</span>
                                        <span className="text-indigo-600">{job.p}</span>
                                    </div>
                                </div>
                                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                    <FaArrowRight />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Careers;
