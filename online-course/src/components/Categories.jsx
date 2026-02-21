import {
    FaCode,
    FaDatabase,
    FaShieldAlt,
    FaBullhorn,
    FaBrain,
    FaPaintBrush
} from "react-icons/fa";
import { motion } from "framer-motion";

const categories = [
    { icon: <FaCode />, title: "Software Development", count: "1,240+ Courses", color: "bg-blue-50 text-blue-600" },
    { icon: <FaDatabase />, title: "Data Science", count: "850+ Courses", color: "bg-green-50 text-green-600" },
    { icon: <FaShieldAlt />, title: "Cyber Security", count: "430+ Courses", color: "bg-red-50 text-red-600" },
    { icon: <FaBullhorn />, title: "Digital Marketing", count: "920+ Courses", color: "bg-purple-50 text-purple-600" },
    { icon: <FaBrain />, title: "AI & Machine Learning", count: "610+ Courses", color: "bg-indigo-50 text-indigo-600" },
    { icon: <FaPaintBrush />, title: "Graphic Design", count: "780+ Courses", color: "bg-pink-50 text-pink-600" },
];

const Categories = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-10">
                <div className="text-center mb-16">
                    <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-3">Top Categories</h2>
                    <h3 className="text-4xl font-extrabold text-gray-900">Explore by Interest</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all cursor-pointer group"
                        >
                            <div className={`w-14 h-14 ${cat.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                                {cat.icon}
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">{cat.title}</h4>
                            <p className="text-gray-500 mb-6">{cat.count}</p>
                            <button className="text-indigo-600 font-bold text-sm flex items-center gap-2 group/btn">
                                Explore Now
                                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
