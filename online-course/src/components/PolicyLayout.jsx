import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const PolicyLayout = ({ title, lastUpdated, children }) => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-indigo-600 selection:text-white">
            <Navbar initialScrolled={true} />
            <div className="pt-40 pb-24 bg-gray-50/50">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-black text-gray-950 tracking-tighter mb-6">{title}</h1>
                        <p className="text-sm font-black text-gray-400 uppercase tracking-widest">Last Updated: {lastUpdated}</p>
                    </motion.div>
                </div>
            </div>
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-6 prose prose-indigo prose-lg">
                    {children}
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default PolicyLayout;
