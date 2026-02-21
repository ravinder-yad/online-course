import { FaPlayCircle, FaUsers, FaArrowRight } from "react-icons/fa";

const freeCourses = [
    {
        title: "HTML5 & CSS3 Essentials",
        students: "12k",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tag: "Free"
    },
    {
        title: "Python for Absolute Beginners",
        students: "18k",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tag: "Free"
    },
    {
        title: "Digital Marketing Starter Kit",
        students: "8k",
        image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tag: "Free"
    }
];

const FreeCourses = () => {
    return (
        <section className="py-20 bg-indigo-50/50">
            <div className="container mx-auto px-6 md:px-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-3">Get Started for free</h2>
                        <h3 className="text-4xl font-extrabold text-gray-900">Popular Free Courses</h3>
                    </div>
                    <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold border border-indigo-100 hover:shadow-lg transition-all flex items-center gap-2">
                        View All Free Courses <FaArrowRight size={14} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {freeCourses.map((course, index) => (
                        <div key={index} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
                            <div className="relative h-48 overflow-hidden">
                                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-4 left-4 bg-green-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                                    {course.tag}
                                </div>
                            </div>
                            <div className="p-6">
                                <h4 className="text-lg font-bold text-gray-900 mb-4 line-clamp-1">{course.title}</h4>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                                        <FaUsers />
                                        <span>{course.students} Students</span>
                                    </div>
                                    <button className="flex items-center gap-1.5 text-indigo-600 font-bold text-sm hover:underline">
                                        Start Learning <FaPlayCircle />
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

export default FreeCourses;
