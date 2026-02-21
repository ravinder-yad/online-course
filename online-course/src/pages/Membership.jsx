import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
    FaSearch, FaBars, FaTimes, FaChevronDown, FaStar,
    FaUsers, FaArrowRight, FaCheck, FaClock, FaLinkedin,
    FaTwitter, FaPlus, FaMinus, FaQuoteLeft, FaRocket, FaCertificate,
    FaCode, FaDatabase, FaShieldAlt, FaBullhorn, FaBrain, FaPaintBrush,
    FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaArrowUp, FaGraduationCap, FaGlobeAmericas,
    FaPlay, FaHeart, FaUserTie, FaCrown, FaGem, FaBolt
} from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// --- SUB-COMPONENTS ---

const PricingCard = ({ plan }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`relative group p-10 lg:p-12 rounded-[3.5rem] border ${plan.recommended ? 'bg-gray-950 text-white border-transparent' : 'bg-white text-gray-950 border-gray-100'} flex flex-col shadow-2xl transition-all hover:scale-[1.02] duration-500 shadow-gray-200/20`}
    >
        {plan.recommended && (
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-8 py-2.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-[length:200%_auto] animate-gradient text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full shadow-2xl shadow-indigo-500/30">
                Most Popular
            </div>
        )}

        <div className="flex items-center gap-6 mb-10">
            <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center text-3xl ${plan.recommended ? 'bg-white/10 text-white' : 'bg-indigo-50 text-indigo-600'}`}>
                {plan.icon}
            </div>
            <div>
                <h3 className="text-3xl font-black tracking-tighter mb-1">{plan.name}</h3>
                <p className={`text-xs font-bold uppercase tracking-widest ${plan.recommended ? 'text-gray-400' : 'text-gray-400'}`}>{plan.tagline}</p>
            </div>
        </div>

        <div className="flex items-end gap-2 mb-10">
            <span className="text-6xl font-black tracking-tighter">${plan.price}</span>
            <span className={`text-lg font-bold mb-2 uppercase tracking-widest ${plan.recommended ? 'text-gray-500' : 'text-gray-400'}`}>/{plan.period}</span>
        </div>

        <ul className="space-y-6 mb-12 flex-1">
            {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${plan.recommended ? 'bg-indigo-500/20 text-indigo-400' : 'bg-green-50 text-green-600'}`}>
                        <FaCheck size={10} />
                    </div>
                    <span className={`text-sm font-bold ${plan.recommended ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
                </li>
            ))}
        </ul>

        <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className={`w-full py-6 rounded-[2rem] text-[11px] font-black uppercase tracking-[0.2em] transition-all shadow-xl ${plan.recommended ? 'bg-white text-gray-950 hover:bg-indigo-50' : 'bg-gray-950 text-white hover:bg-gray-800 shadow-gray-200/50'}`}
        >
            Get Started Now
        </motion.button>
    </motion.div>
);

const Membership = () => {
    const plans = [
        {
            name: "Basic",
            tagline: "Standard Access",
            price: "49",
            period: "Mo",
            icon: <FaBolt />,
            recommended: false,
            features: [
                "100+ Core Courses", "Community Access", "Course Certificates", "Weekly Newsletters", "Mobile App Access"
            ]
        },
        {
            name: "Elite",
            tagline: "The Full Stack",
            price: "129",
            period: "Mo",
            icon: <FaCrown />,
            recommended: true,
            features: [
                "Unlimited Course Catalog", "1-on-1 Strategy Calls", "Source Code Assets", "Exclusive Elite Discord", "Job Placement Support", "Priority Mentor Support"
            ]
        },
        {
            name: "Founder",
            tagline: "Lifetime Value",
            price: "999",
            period: "Once",
            icon: <FaGem />,
            recommended: false,
            features: [
                "Lifetime Platform Access", "All Upcoming Courses", "VIP Event Access", "Dedicated Success Manager", "Beta Tester Eligibility", "Personal Branding Kit"
            ]
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            {/* HERO SECTION */}
            <section className="pt-52 pb-32 relative overflow-hidden bg-white">
                <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-indigo-50/30 to-white -z-0" />
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-50 opacity-40 rounded-full blur-[150px]" />

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-3 px-6 py-2 bg-white rounded-full shadow-xl border border-gray-100 mb-10">
                        <FaCrown className="text-indigo-600" size={14} />
                        <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest">Join 25,000+ Elite Members</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black text-gray-950 tracking-tighter leading-[0.9] mb-12"
                    >
                        Invest In Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600">Legendary Future.</span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-gray-400 font-bold max-w-xl mx-auto leading-relaxed mb-20 italic">
                        Choose the path that fits your ambition. From basic upskilling to world-class career mastery.
                    </motion.p>
                </div>

                {/* PRICING GRID */}
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {plans.map((plan, i) => (
                            <PricingCard key={i} plan={plan} />
                        ))}
                    </div>
                </div>
            </section>

            {/* COMPARISON TABLE */}
            <section className="py-32 hidden md:block">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-[11px] font-black text-indigo-600 uppercase tracking-[0.4em] mb-4">Deep Dive</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-gray-950 tracking-tight">Feature Comparison.</h3>
                    </div>

                    <div className="bg-white rounded-[3rem] border border-gray-100 shadow-2xl overflow-hidden shadow-gray-200/20">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50/50">
                                <tr>
                                    <th className="p-10 text-[10px] font-black text-gray-400 uppercase tracking-widest">Platform Features</th>
                                    <th className="p-10 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Free</th>
                                    <th className="p-10 text-[10px] font-black text-indigo-600 uppercase tracking-widest text-center">Elite</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {[
                                    "Access to 100+ Courses", "Source Code Files", "Certified Certificates", "1-on-1 Mentor Support", "Private Slack Channel", "Job Referrals"
                                ].map((feature, i) => (
                                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="p-10 text-lg font-black text-gray-950 tracking-tight">{feature}</td>
                                        <td className="p-10 text-center">
                                            {i < 2 ? <FaCheck className="mx-auto text-green-500" /> : <div className="w-2 h-2 rounded-full bg-gray-200 mx-auto" />}
                                        </td>
                                        <td className="p-10 text-center">
                                            <FaCheck className="mx-auto text-indigo-600" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-32 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-20 text-gray-950">
                        <h2 className="text-4xl font-black tracking-tighter">Membership FAQs.</h2>
                    </div>
                    <div className="space-y-6">
                        {[
                            { q: "Can I cancel anytime?", a: "Yes, you can cancel your subscription at any time from your settings with zero penalties." },
                            { q: "Is there a refund policy?", a: "We offer a 14-day no-questions-asked refund policy for all monthly and annual plans." },
                            { q: "Do certificates ever expire?", a: "Never. Once you earn a certificate with EduFlow, it's valid for life and verifiable online." }
                        ].map((item, i) => (
                            <div key={i} className="p-10 bg-white rounded-[2.5rem] border border-gray-100">
                                <h4 className="text-xl font-black text-gray-950 tracking-tight mb-4">{item.q}</h4>
                                <p className="text-gray-500 font-bold leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <Footer />
        </div>
    );
};

export default Membership;
