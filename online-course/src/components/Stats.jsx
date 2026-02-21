import { FaUsers, FaLaptopCode, FaAward, FaChalkboardTeacher } from "react-icons/fa";

const Stats = () => {
    const stats = [
        { icon: <FaUsers />, value: "15k+", label: "Active Students" },
        { icon: <FaLaptopCode />, value: "1.2k+", label: "Quality Courses" },
        { icon: <FaChalkboardTeacher />, value: "300+", label: "Expert Mentors" },
        { icon: <FaAward />, value: "95%", label: "Satisfaction Rate" },
    ];

    return (
        <div className="bg-indigo-600 py-16">
            <div className="container mx-auto px-4 md:px-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center text-white">
                            <div className="text-3xl lg:text-4xl mb-3 flex justify-center opacity-80">
                                {stat.icon}
                            </div>
                            <div className="text-3xl lg:text-4xl font-extrabold mb-1">{stat.value}</div>
                            <div className="text-indigo-100 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;
