import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Ananya Sharma",
        role: "Full Stack Developer @ TechCorp",
        content: "EduFlow changed my life. The industry-ready courses helped me land my dream job in just 4 months. The instructors are amazing!",
        image: "https://i.pravatar.cc/150?u=ananya"
    },
    {
        name: "Rahul Mehra",
        role: "Digital Marketer",
        content: "The best part about EduFlow is the lifetime access. I can always come back and refresh my skills. Highly recommended for beginners!",
        image: "https://i.pravatar.cc/150?u=rahul"
    },
    {
        name: "Sneha Patel",
        role: "UI/UX Designer",
        content: "Practical projects and clear explanations. I've taken 3 courses so far and each one was top-notch quality.",
        image: "https://i.pravatar.cc/150?u=sneha"
    }
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-10">
                <div className="text-center mb-16">
                    <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-3">Testimonials</h2>
                    <h3 className="text-4xl font-extrabold text-gray-900">What Our Students Say</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div key={index} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                            <div className="text-indigo-200 mb-6">
                                <FaQuoteLeft size={40} />
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-8 italic">"{t.content}"</p>
                            <div className="flex items-center gap-4">
                                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                                    <p className="text-xs text-gray-500">{t.role}</p>
                                </div>
                                <div className="ml-auto flex text-yellow-400 gap-0.5">
                                    {[...Array(5)].map((_, i) => <FaStar key={i} size={10} />)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
