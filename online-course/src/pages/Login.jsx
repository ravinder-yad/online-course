import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FaEnvelope, FaLock, FaEye, FaEyeSlash,
    FaGoogle, FaGithub
} from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900">
            <Navbar initialScrolled={true} />

            <div className="flex-1 flex items-center justify-center p-6 lg:p-12 pt-32 lg:pt-40">
                <div className="w-full max-w-[1240px] bg-white rounded-[4rem] shadow-2xl shadow-gray-200/50 overflow-hidden flex flex-col lg:flex-row min-h-[700px]">

                    {/* LEFT SIDE: BRANDING */}
                    <div className="lg:w-1/2 bg-indigo-600 relative overflow-hidden p-16 lg:p-24 flex flex-col">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] -mr-64 -mt-64" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-400/20 rounded-full blur-[80px] -ml-40 -mb-40" />

                        <div className="relative z-10 flex flex-col h-full justify-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black text-white uppercase tracking-[0.3em] mb-10 border border-white/20 w-fit"
                            >
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                Premium Education
                            </motion.div>

                            <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-10">
                                Welcome back <br />
                                <span className="text-indigo-300">to your <br /> Dashboard.</span>
                            </h2>

                            <p className="text-indigo-100 text-xl font-medium max-w-sm mb-12 opacity-80 leading-relaxed italic">
                                Access your courses, track progress, and sharpen your skills with ease.
                            </p>

                            <div className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-[2rem] border border-white/10 w-fit">
                                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                                    <HiOutlineAcademicCap size={28} />
                                </div>
                                <div>
                                    <h4 className="text-white font-black text-[10px] uppercase tracking-widest leading-none mb-1">Industry Certificates</h4>
                                    <p className="text-indigo-200 text-[9px] font-bold uppercase tracking-widest opacity-60">Recognized by top companies</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: AUTH FORM */}
                    <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center relative bg-white">
                        <div className="max-w-md mx-auto w-full">
                            <div className="mb-16">
                                <h3 className="text-4xl lg:text-5xl font-black text-gray-950 tracking-tighter mb-4">
                                    Welcome <span className="text-indigo-600 italic">Back</span>
                                </h3>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Access Your Learning Dashboard</p>
                            </div>

                            <form className="space-y-8">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] ml-2">Email Address</label>
                                    <div className="relative group">
                                        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-indigo-600 transition-colors">
                                            <FaEnvelope />
                                        </div>
                                        <input
                                            type="email"
                                            placeholder="name@email.com"
                                            className="w-full bg-gray-50 border-2 border-transparent focus:border-indigo-100 focus:bg-white rounded-[1.5rem] py-6 pl-16 pr-8 outline-none text-sm font-bold text-gray-950 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center ml-2">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Password</label>
                                        <Link to="#" className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.4em] hover:opacity-70">Forgot?</Link>
                                    </div>
                                    <div className="relative group">
                                        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-indigo-600 transition-colors">
                                            <FaLock />
                                        </div>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            className="w-full bg-gray-50 border-2 border-transparent focus:border-indigo-100 focus:bg-white rounded-[1.5rem] py-6 pl-16 pr-16 outline-none text-sm font-bold text-gray-950 transition-all"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 hover:text-indigo-600 transition-colors"
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                    className="w-full bg-indigo-600 text-white rounded-[1.5rem] py-6 text-[11px] font-black uppercase tracking-[0.4em] shadow-2xl shadow-indigo-200 hover:bg-indigo-700 transition-all"
                                >
                                    Sign In Now
                                </motion.button>
                            </form>

                            <div className="mt-16 text-center">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-10">Or Continue With</p>
                                <div className="grid grid-cols-2 gap-6">
                                    <button className="flex items-center justify-center gap-3 py-5 border-2 border-gray-50 rounded-[1.5rem] hover:bg-gray-50 transition-all">
                                        <FaGoogle className="text-rose-500" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Google</span>
                                    </button>
                                    <button className="flex items-center justify-center gap-3 py-5 border-2 border-gray-50 rounded-[1.5rem] hover:bg-gray-50 transition-all">
                                        <FaGithub className="text-gray-950" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">GitHub</span>
                                    </button>
                                </div>
                            </div>

                            <div className="mt-16 text-center">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">
                                    Not a member? <Link to="/signup" className="text-indigo-600 font-bold hover:opacity-70 ml-2 uppercase">Create Account</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
