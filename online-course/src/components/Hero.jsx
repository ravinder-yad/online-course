import { motion } from "framer-motion";
import { FaPlay, FaRocket, FaGlobeAmericas, FaCertificate } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 -right-20 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50" />
            <div className="absolute top-40 -left-20 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-50" />

            <div className="container mx-auto px-4 md:px-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full font-semibold text-sm mb-6"
                        >
                            <FaRocket className="text-indigo-500" />
                            <span>Shape your future with EduFlow</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
                        >
                            Master Any Skill with{" "}
                            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Expert Guidance
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0"
                        >
                            Access thousands of professional courses taught by industry leaders. Start your journey today and unlock your potential with our flexible learning system.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                        >
                            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-200 transition-all flex items-center gap-2 group">
                                Explore Courses
                                <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                                    →
                                </motion.span>
                            </button>
                            <button className="flex items-center gap-3 text-gray-800 hover:text-indigo-600 px-6 py-4 font-bold transition-all group">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                    <FaPlay className="ml-1" />
                                </div>
                                See How It Works
                            </button>
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start items-center text-gray-400"
                        >
                            <div className="flex items-center gap-2">
                                <FaGlobeAmericas size={20} />
                                <span className="text-sm font-medium">10k+ Global Students</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCertificate size={20} />
                                <span className="text-sm font-medium">Verified Certificates</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content - Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                alt="Learning Platform"
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent" />
                        </div>

                        {/* Floating UI Elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 hidden md:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                    <span className="font-bold">85%</span>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-medium">Completion Rate</p>
                                    <p className="text-sm font-bold">Excellent student progress!</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
