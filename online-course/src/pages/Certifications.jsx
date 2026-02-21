import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { FaCertificate, FaShieldAlt, FaBriefcase } from "react-icons/fa";

const Certifications = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-indigo-600 selection:text-white">
            <Navbar initialScrolled={true} />

            <section className="pt-40 pb-24 bg-gray-950 text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1]">Hard-Earned <br /> <span className="text-indigo-500 italic">Credentials.</span></h1>
                        <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">EduFlow certifications aren't participation trophies. They are recognized by the world's leading technology companies as a mark of true mastery.</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {[
                        { t: "Industry Trust", d: "Our curriculum is co-designed with hiring managers from Google, Amazon, and Meta.", i: <FaShieldAlt /> },
                        { t: "Verified Skills", d: "Every certificate is backed by a blockchain-verified production project.", i: <FaCertificate /> },
                        { t: "Career Boost", d: "Alumni report a 64% increase in interview callbacks after adding our credentials.", i: <FaBriefcase /> }
                    ].map((item, i) => (
                        <div key={i} className="p-12 bg-gray-50 rounded-[4rem]">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl text-indigo-600 mx-auto mb-8 shadow-sm">{item.i}</div>
                            <h3 className="text-2xl font-black text-gray-950 mb-4 tracking-tight">{item.t}</h3>
                            <p className="text-gray-500 font-medium leading-relaxed">{item.d}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Certifications;
