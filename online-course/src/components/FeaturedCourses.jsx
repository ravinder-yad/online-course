import { FaStar, FaClock, FaSignal } from "react-icons/fa";

const courses = [
    {
        id: 1,
        title: "Full-stack Web Development with Next.js",
        instructor: "Sarah Jenkins",
        rating: 4.8,
        reviews: 1240,
        price: "$89.99",
        oldPrice: "$149.99",
        category: "Development",
        level: "Advanced",
        duration: "40 Hours",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 2,
        title: "Complete Digital Marketing Masterclass",
        instructor: "Mike Rivera",
        rating: 4.7,
        reviews: 3500,
        price: "$49.99",
        oldPrice: "$99.99",
        category: "Marketing",
        level: "Beginner",
        duration: "25 Hours",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 3,
        title: "UI/UX Design Essentials with Figma",
        instructor: "Elena Gilbert",
        rating: 4.9,
        reviews: 890,
        price: "$59.99",
        oldPrice: "$120.00",
        category: "Design",
        level: "Intermediate",
        duration: "18 Hours",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
];

const FeaturedCourses = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3">Popular Courses</h2>
                        <h3 className="text-4xl font-bold">Learn from the Best</h3>
                    </div>
                    <button className="text-indigo-600 font-bold hover:underline">View All Courses →</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <div key={course.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col">
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-md text-indigo-800 px-3 py-1 rounded-lg text-xs font-bold uppercase shadow-sm">
                                        {course.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-1 text-yellow-400 mb-3">
                                    <FaStar size={14} />
                                    <span className="text-sm font-bold text-gray-800">{course.rating}</span>
                                    <span className="text-xs text-gray-400 font-medium">({course.reviews} reviews)</span>
                                </div>

                                <h4 className="text-xl font-bold mb-3 line-clamp-2 hover:text-indigo-600 transition-colors cursor-pointer">
                                    {course.title}
                                </h4>

                                <p className="text-sm text-gray-500 mb-6 flex items-center gap-2">
                                    by <span className="font-semibold text-gray-800 underline decoration-indigo-200 cursor-pointer">{course.instructor}</span>
                                </p>

                                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium mb-6 mt-auto">
                                    <div className="flex items-center gap-1">
                                        <FaClock className="text-gray-400" />
                                        {course.duration}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FaSignal className="text-gray-400" />
                                        {course.level}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                                    <div className="flex flex-col">
                                        <span className="text-2xl font-bold text-indigo-600">{course.price}</span>
                                        <span className="text-sm text-gray-400 line-through">{course.oldPrice}</span>
                                    </div>
                                    <button className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                                        <span className="text-xl font-bold">+</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCourses;
