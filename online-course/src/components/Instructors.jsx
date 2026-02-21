import { FaLinkedin, FaTwitter, FaPlay } from "react-icons/fa";

const instructors = [
    {
        name: "Dr. Angela Yu",
        skill: "Software Engineering",
        image: "https://i.pravatar.cc/150?u=angela",
        experience: "12+ Years Exp."
    },
    {
        name: "Hitesh Choudhary",
        skill: "Full Stack Dev",
        image: "https://i.pravatar.cc/150?u=hitesh",
        experience: "10+ Years Exp."
    },
    {
        name: "Shradha Khapra",
        skill: "System Design",
        image: "https://i.pravatar.cc/150?u=shradha",
        experience: "8+ Years Exp."
    },
    {
        name: "Aman Dhattarwal",
        skill: "Career Growth",
        image: "https://i.pravatar.cc/150?u=aman",
        experience: "10+ Years Exp."
    }
];

const Instructors = () => {
    return (
        <section className="py-24 bg-gray-50/50">
            <div className="container mx-auto px-6 md:px-10">
                <div className="text-center mb-16">
                    <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-3">Our Mentors</h2>
                    <h3 className="text-4xl font-extrabold text-gray-900 mb-4">Learn from Industry Leaders</h3>
                    <p className="text-gray-500 max-w-2xl mx-auto italic">Learn the skills that matter from people who actually work in the field every single day.</p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                    {instructors.map((ins, index) => (
                        <div key={index} className="group flex flex-col items-center">
                            <div className="relative w-40 h-40 md:w-52 md:h-52 mb-6">
                                <div className="absolute inset-x-0 bottom-0 top-6 bg-indigo-100 rounded-[2.5rem] group-hover:bg-indigo-600 transition-colors duration-500" />
                                <img src={ins.image} alt={ins.name} className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] group-hover:-translate-y-4 transition-transform duration-500" />

                                <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="w-8 h-8 bg-white text-indigo-600 rounded-lg flex items-center justify-center shadow-md"><FaLinkedin size={14} /></button>
                                    <button className="w-8 h-8 bg-white text-blue-400 rounded-lg flex items-center justify-center shadow-md"><FaTwitter size={14} /></button>
                                </div>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-1">{ins.name}</h4>
                            <p className="text-indigo-600 font-bold text-xs uppercase tracking-wider mb-2">{ins.skill}</p>
                            <p className="text-gray-400 text-xs font-semibold">{ins.experience}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Instructors;
