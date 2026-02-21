import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => (
    <footer className="bg-white pt-40 pb-12 border-t border-gray-50 selection:bg-indigo-600 selection:text-white mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
            <div className="lg:col-span-1">
                <Link to="/" className="text-4xl font-black mb-10 tracking-tighter italic block">EDU<span className="text-indigo-600">FLOW.</span></Link>
                <p className="text-gray-400 font-bold leading-relaxed mb-12 text-lg">We don't just teach code. We build careers. Join the elite rank of EduFlow graduates and lead the industry.</p>
                <div className="flex gap-6">
                    {[FaFacebook, FaLinkedin, FaTwitter, FaInstagram].map((Icon, i) => (
                        <motion.a
                            key={i}
                            whileHover={{ y: -5, scale: 1.1 }}
                            href="#"
                            className="w-14 h-14 bg-gray-50 text-gray-400 rounded-2xl flex items-center justify-center border border-transparent hover:border-indigo-100 hover:text-indigo-600 hover:bg-white transition-all shadow-sm"
                        >
                            <Icon size={24} />
                        </motion.a>
                    ))}
                </div>
            </div>

            {[
                { t: "Platform", l: [{ n: "Our Catalog", h: "/courses" }, { n: "Membership", h: "/membership" }, { n: "Free Content", h: "/free-content" }, { n: "Certifications", h: "/certifications" }] },
                { t: "Company", l: [{ n: "About Our Mission", h: "/about" }, { n: "Mentors", h: "/mentors" }, { n: "Careers (Hiring!)", h: "/careers" }, { n: "Impact", h: "/impact" }] },
                { t: "Legal", l: [{ n: "Terms of Sale", h: "/terms" }, { n: "Privacy Policy", h: "/privacy" }, { n: "Cookie Policy", h: "/cookies" }, { n: "Accessibility", h: "/accessibility" }] }
            ].map((col, i) => (
                <div key={i}>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300 mb-12">{col.t}</h4>
                    <ul className="space-y-6">
                        {col.l.map((link, idx) => (
                            <li key={idx}>
                                <Link to={link.h} className="text-lg font-black text-gray-600 hover:text-indigo-600 transition-colors tracking-tight relative group block">
                                    {link.n}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-500 rounded-full" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>

        <div className="pt-16 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-8 px-6">
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Platform Status: Optimal</span>
            </div>
            <div className="text-[10px] font-black text-gray-200 uppercase tracking-[1em] mb-4 md:mb-0">EDUFLOW GLOBAL &copy; 2026</div>
            <div className="flex gap-6 opacity-30">
                <span className="text-[9px] font-black tracking-widest">VISA</span>
                <span className="text-[9px] font-black tracking-widest">STRIPE</span>
                <span className="text-[9px] font-black tracking-widest">PAYPAL</span>
            </div>
        </div>
    </footer>
);

export default Footer;
