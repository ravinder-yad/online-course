import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import {
    FaCode, FaDatabase, FaPaintBrush, FaBullhorn, FaStar, FaClock,
    FaUsers, FaArrowRight, FaPlayCircle, FaChevronRight
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PaymentModal from "../components/PaymentModal";
import { useCart } from "../context/CartContext";

const Category = () => {
    const { id } = useParams();
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const { addToCart } = useCart();

    const categories = {
        "web-development": {
            title: "Web Development",
            icon: <FaCode />,
            color: "indigo",
            accent: "blue",
            tagline: "Master the art of building world-class digital experiences.",
            stats: { students: "12k+", courses: "48+", mentors: "15" }
        },
        "data-intelligence": {
            title: "Data Intelligence",
            icon: <FaDatabase />,
            color: "green",
            accent: "emerald",
            tagline: "Turn complex data into powerful insights and decisions.",
            stats: { students: "8k+", courses: "32+", mentors: "12" }
        },
        "human-design": {
            title: "Human Design",
            icon: <FaPaintBrush />,
            color: "rose",
            accent: "pink",
            tagline: "Create interfaces that resonate with human psychology.",
            stats: { students: "10k+", courses: "28+", mentors: "10" }
        },
        "growth-marketing": {
            title: "Growth Marketing",
            icon: <FaBullhorn />,
            color: "purple",
            accent: "violet",
            tagline: "Scale products with modern growth strategies.",
            stats: { students: "15k+", courses: "40+", mentors: "18" }
        }
    };

    const catInfo = categories[id] || categories["web-development"];

    useEffect(() => {
        const fetchCategoryCourses = async () => {
            try {
                setIsLoading(true);
                const res = await axios.get("/api/courses");
                // The API doesn't have a specific category filter endpoint yet, so we filter here
                // We need to match catInfo.title with course.category
                const filtered = res.data.filter(c => c.category === catInfo.title);
                setCourses(filtered);
                setError(null);
            } catch (err) {
                console.error("Error fetching category courses:", err);
                setError("Failed to load courses for this category.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchCategoryCourses();
    }, [id, catInfo.title]);

    const cat = catInfo;

    const colorClasses = {
        indigo: "from-indigo-600 to-blue-600 shadow-indigo-200 text-indigo-600 bg-indigo-50",
        green: "from-green-600 to-emerald-600 shadow-emerald-200 text-emerald-600 bg-emerald-50",
        rose: "from-rose-600 to-pink-600 shadow-rose-200 text-rose-600 bg-rose-50",
        purple: "from-purple-600 to-violet-600 shadow-purple-200 text-purple-600 bg-purple-50"
    };

    const currentColors = colorClasses[cat.color];

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-600 selection:text-white">
            <Navbar initialScrolled={true} />

            {/* HERO SECTION */}
            <section className={`relative pt-40 pb-20 overflow-hidden`}>
                <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-${cat.color}-100/50 rounded-full blur-[120px] -mr-64 -mt-64`} />
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-2/3">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className={`inline-flex items-center gap-2 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-${cat.color}-100 ${currentColors.split(' shadow-')[2]}`}
                            >
                                <span className={`w-2 h-2 rounded-full animate-pulse bg-${cat.color}-500`} />
                                Exploring {cat.title}
                            </motion.div>

                            <h1 className="text-6xl lg:text-8xl font-black text-gray-950 tracking-tighter leading-[0.9] mb-10">
                                {cat.title.split(' ')[0]} <br />
                                <span className={`italic text-${cat.color}-600`}>{cat.title.split(' ').slice(1).join(' ')}</span>
                            </h1>

                            <p className="text-xl text-gray-500 font-medium max-w-xl mb-12 leading-relaxed">
                                {cat.tagline}
                            </p>

                            <div className="flex flex-wrap gap-12">
                                {Object.entries(cat.stats).map(([label, value], i) => (
                                    <div key={i}>
                                        <div className="text-3xl font-black text-gray-950 tracking-tighter mb-1">{value}</div>
                                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/3">
                            <div className={`w-full aspect-square rounded-[4rem] bg-gradient-to-br ${currentColors.split(' shadow-')[0]} flex items-center justify-center text-white text-[120px] shadow-2xl`}>
                                {cat.icon}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COURSES GRID */}
            <section className="py-24 bg-white rounded-[5rem] shadow-sm">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between mb-16">
                        <h2 className="text-4xl font-black text-gray-950 tracking-tighter">
                            Popular <span className={`text-${cat.color}-600 italic`}>Courses</span>
                        </h2>
                        <div className="flex gap-4">
                            <button className="px-6 py-2 text-sm font-bold text-gray-400 hover:text-gray-950 transition-colors">Featured</button>
                            <button className="px-6 py-2 text-sm font-bold text-gray-400 hover:text-gray-950 transition-colors">Newest</button>
                        </div>
                    </div>

                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center py-40">
                            <div className={`w-16 h-16 border-4 border-${cat.color}-100 border-t-${cat.color}-600 rounded-full animate-spin mb-6`}></div>
                            <p className={`text-${cat.color}-600 font-black uppercase tracking-[0.2em] text-[10px]`}>Loading {cat.title} Courses...</p>
                        </div>
                    ) : error ? (
                        <div className={`text-center py-40 bg-${cat.color}-50 rounded-[3rem] border border-${cat.color}-100 p-12`}>
                            <h3 className={`text-2xl font-black text-${cat.color}-600 mb-4`}>{error}</h3>
                        </div>
                    ) : courses.length === 0 ? (
                        <div className="text-center py-40">
                            <h3 className="text-2xl font-black text-gray-950 mb-2">No Courses Found</h3>
                            <p className="text-gray-400 font-bold tracking-tight">We're still curating the perfect paths for this category.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {courses.map((course) => (
                                <motion.div
                                    key={course._id || course.id}
                                    whileHover={{ y: -15 }}
                                    className="group bg-white rounded-[3rem] overflow-hidden border border-gray-100 hover:shadow-[0_45px_100px_-30px_rgba(0,0,0,0.1)] transition-all duration-500"
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <img src={course.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
                                        <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-2xl text-[10px] font-black text-gray-950 uppercase tracking-widest shadow-xl">
                                            ${course.price}
                                        </div>
                                        <div className="absolute bottom-6 left-6 flex items-center gap-2">
                                            <div className="px-3 py-1.5 bg-indigo-600 text-white rounded-xl text-[9px] font-black uppercase tracking-widest">Best Seller</div>
                                        </div>
                                    </div>

                                    <div className="p-10">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="flex items-center gap-2 text-yellow-400">
                                                <FaStar size={12} />
                                                <span className="text-sm font-black text-gray-950">{course.rating}</span>
                                                <span className="text-[10px] font-bold text-gray-400">({course.reviews})</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-400">
                                                <FaClock size={12} />
                                                <span className="text-[10px] font-black uppercase tracking-widest">{course.duration}</span>
                                            </div>
                                        </div>

                                        <Link to={`/course/${course.id}`}>
                                            <h3 className="text-2xl font-black text-gray-950 tracking-tighter mb-4 group-hover:text-indigo-600 transition-colors leading-tight line-clamp-2">{course.title}</h3>
                                        </Link>

                                        <div className="flex items-center justify-between mt-10 pt-8 border-t border-gray-50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 overflow-hidden">
                                                    <img src={course.instructorImg} alt="" className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest leading-none mb-1">Instructor</p>
                                                    <p className="text-sm font-bold text-gray-950">{course.instructor}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={() => addToCart({ id: course._id || course.id, title: course.title, price: course.price, image: course.image })}
                                                    className={`px-4 py-3 rounded-xl font-black text-[9px] uppercase tracking-widest transition-all bg-${cat.color}-50 text-${cat.color}-600 hover:bg-${cat.color}-600 hover:text-white`}
                                                >
                                                    Add
                                                </button>
                                                <Link to={`/course/${course.id}`} className={`w-12 h-12 bg-gray-50 group-hover:bg-${cat.color}-600 group-hover:text-white rounded-2xl flex items-center justify-center transition-all`}>
                                                    <FaArrowRight size={14} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CTAs */}
            <section className="py-24">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className={`w-full bg-${cat.color}-600 rounded-[4rem] p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden shadow-2xl shadow-${cat.color}-200`}>
                        <div className="absolute top-0 left-0 w-full h-full opacity-10">
                            <div className="grid grid-cols-6 h-full">
                                {[...Array(24)].map((_, i) => (
                                    <div key={i} className="border border-white/20 aspect-square" />
                                ))}
                            </div>
                        </div>

                        <div className="relative z-10 lg:max-w-xl text-center lg:text-left mb-12 lg:mb-0">
                            <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-[0.9] mb-8">
                                Ready to become a <br />
                                <span className="text-white/60 italic">Certified Specialist?</span>
                            </h2>
                            <p className="text-white/70 text-lg font-medium">
                                Join the {cat.stats.students.split('k')[0]},000+ students already mastering {cat.title} on EduFlow.
                            </p>
                        </div>
                        <div className="relative z-10">
                            <motion.button
                                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                onClick={() => setIsPaymentModalOpen(true)}
                                className="px-12 py-7 bg-white text-gray-950 rounded-[2rem] font-black text-[11px] uppercase tracking-[0.4em] shadow-2xl flex items-center gap-4 group"
                            >
                                Start Learning Now
                                <FaChevronRight className="group-hover:translate-x-2 transition-transform" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </section>
            <PaymentModal
                isOpen={isPaymentModalOpen}
                onClose={() => setIsPaymentModalOpen(false)}
                courseTitle={`${cat.title} Mastery Path`}
                price={99}
            />
            <Footer />
        </div>
    );
};

export default Category;
