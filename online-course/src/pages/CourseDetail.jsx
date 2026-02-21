import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FaStar, FaClock, FaUsers, FaArrowLeft, FaPlay, FaCheck,
    FaLock, FaGlobe, FaCertificate, FaInfinity
} from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PaymentModal from "../components/PaymentModal";
import { useCart } from "../context/CartContext";
import { coursesData } from "../data/courses";

const CourseDetail = () => {
    const { id: courseId } = useParams();
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const { addToCart } = useCart();

    const course = coursesData.find(c => c.id === parseInt(courseId)) || coursesData[0];

    if (!course) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
                <Navbar initialScrolled={true} />
                <h1 className="text-4xl font-black text-gray-950 mb-4">Course Not Found</h1>
                <Link to="/courses" className="text-indigo-600 font-bold uppercase tracking-widest text-xs">Back to Catalog</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-indigo-600 selection:text-white">
            <Navbar initialScrolled={true} />

            {/* TOP HEADER / BREADCRUMB */}
            <div className="pt-32 lg:pt-40 pb-10 bg-gray-50/50">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <Link to="/courses" className="inline-flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-indigo-600 transition-colors mb-8">
                        <FaArrowLeft /> Back to Catalog
                    </Link>

                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-2/3">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg text-[9px] font-black uppercase tracking-widest mb-6"
                            >
                                <FaStar className="animate-pulse" /> Bestseller
                            </motion.div>

                            <h1 className="text-4xl lg:text-5xl font-black text-gray-950 tracking-tighter leading-tight mb-8">
                                {course.title}
                            </h1>

                            <p className="text-lg text-gray-500 font-medium mb-10 max-w-2xl leading-relaxed">
                                {course.description}
                            </p>

                            <div className="flex flex-wrap items-center gap-10">
                                <div className="flex items-center gap-2">
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => <FaStar key={i} size={14} />)}
                                    </div>
                                    <span className="text-sm font-black text-gray-950">{course.rating}</span>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest underline decoration-2 underline-offset-4">{course.reviews}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <FaUsers size={16} />
                                    <span className="text-[10px] font-black uppercase tracking-widest">{course.students}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <FaClock size={16} />
                                    <span className="text-[10px] font-black uppercase tracking-widest">{course.duration}</span>
                                </div>
                            </div>
                        </div>

                        {/* FLOATING ACTION CARD (Sticky on Desktop) */}
                        <div className="lg:w-1/3 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="lg:absolute top-0 right-0 w-full bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden z-20"
                            >
                                <div className="relative aspect-video group cursor-pointer">
                                    <img src={course.image} className="w-full h-full object-cover" alt="" />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                                            <FaPlay className="ml-1" size={24} />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-6 w-full text-center">
                                        <span className="text-[10px] font-black text-white uppercase tracking-[0.3em] drop-shadow-lg">Preview This Course</span>
                                    </div>
                                </div>

                                <div className="p-10">
                                    <div className="flex items-center gap-4 mb-8">
                                        <span className="text-5xl font-black text-gray-950 tracking-tighter">${course.price}</span>
                                        <span className="text-xl text-gray-400 line-through decoration-gray-300 decoration-2">${course.originalPrice}</span>
                                        <span className="ml-auto text-green-600 font-black text-[10px] uppercase tracking-widest">50% OFF</span>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                        onClick={() => setIsPaymentModalOpen(true)}
                                        className="w-full py-6 bg-indigo-600 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] shadow-2xl shadow-indigo-200 mb-4"
                                    >
                                        Enroll Now
                                    </motion.button>

                                    <button
                                        onClick={() => addToCart({ id: courseId, title: course.title, price: course.price, image: course.image })}
                                        className="w-full py-6 border-2 border-gray-100 rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] text-gray-500 hover:bg-gray-50 transition-all mb-10"
                                    >
                                        Add to Cart
                                    </button>

                                    <div className="space-y-4">
                                        <h5 className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-4 border-b border-gray-50 pb-4">This Course Includes</h5>
                                        {[
                                            { t: "Full lifetime access", i: <FaInfinity /> },
                                            { t: "Certificate of completion", i: <FaCertificate /> },
                                            { t: "Access on mobile and TV", i: <FaGlobe /> },
                                            { t: "12 Downloadable resources", i: <HiOutlineAcademicCap /> }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-4 text-gray-600">
                                                <div className="text-indigo-600">{item.i}</div>
                                                <span className="text-xs font-bold">{item.t}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN CONTENT AREA */}
            <section className="py-24">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex gap-20">
                    <div className="lg:w-2/3">
                        {/* WHAT YOU WILL LEARN */}
                        <div className="bg-gray-50 rounded-[3rem] p-12 lg:p-16 mb-20 border border-gray-100">
                            <h2 className="text-3xl font-black text-gray-950 tracking-tighter mb-10">What you'll <span className="text-indigo-600 italic">Master</span></h2>
                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                                {course.willLearn.map((item, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="mt-1 w-5 h-5 bg-green-100 text-green-600 rounded-md flex items-center justify-center shrink-0">
                                            <FaCheck size={8} />
                                        </div>
                                        <p className="text-sm font-bold text-gray-600 leading-snug">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CURRICULUM */}
                        <div className="mb-20">
                            <h2 className="text-3xl font-black text-gray-950 tracking-tighter mb-10">Course <span className="text-indigo-600 italic">Structure</span></h2>
                            <div className="space-y-4">
                                {course.curriculum.map((module, i) => (
                                    <div key={i} className="p-8 bg-white border border-gray-100 rounded-3xl hover:border-indigo-100 transition-colors flex items-center justify-between group cursor-pointer shadow-sm shadow-gray-50">
                                        <div className="flex items-center gap-6">
                                            <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all">
                                                <FaLock size={12} />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-black text-gray-950 tracking-tight">{module.title}</h4>
                                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{module.lessons}</p>
                                            </div>
                                        </div>
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-gray-300 group-hover:text-indigo-600 transition-colors">
                                            <FaPlay size={12} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* INSTRUCTOR */}
                        <div className="pt-10 border-t border-gray-50">
                            <h2 className="text-3xl font-black text-gray-950 tracking-tighter mb-10">Your <span className="text-indigo-600 italic">Mentor</span></h2>
                            <div className="flex flex-col md:flex-row gap-10 items-start">
                                <div className="w-32 h-32 rounded-full overflow-hidden shrink-0 border-4 border-white shadow-2xl">
                                    <img src={course.instructorImg} className="w-full h-full object-cover" alt={course.instructor} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-2xl font-black text-gray-950 tracking-tighter mb-2">{course.instructor}</h4>
                                    <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-6">{course.instructorRole}</p>
                                    <p className="text-gray-500 font-medium leading-relaxed mb-8">
                                        Sarah is a software-engineer turned educator with over 15 years of industry experience. She has worked with Fortune 500 companies to build resilient and accessible web applications.
                                    </p>
                                    <div className="flex gap-4">
                                        <button className="px-6 py-2 bg-gray-950 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-800 transition-all">View Profile</button>
                                        <button className="px-6 py-2 border-2 border-gray-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-500 hover:bg-gray-50 transition-all">Follow</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <PaymentModal
                isOpen={isPaymentModalOpen}
                onClose={() => setIsPaymentModalOpen(false)}
                courseTitle={course.title}
                price={course.price}
            />
            <Footer />
        </div>
    );
};

export default CourseDetail;
