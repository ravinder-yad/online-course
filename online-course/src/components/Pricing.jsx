import { FaCheck, FaClock } from "react-icons/fa";

const Pricing = () => {
    return (
        <section className="py-24 bg-gray-900 overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -ml-48 -mb-48" />

            <div className="container mx-auto px-6 md:px-10 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 shadow-indigo-500/50 shadow-lg text-white rounded-full text-sm font-bold mb-8">
                            <FaClock /> <span>Limited Time Offer: 60% OFF</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            Get Unlimited Access to <span className="text-indigo-400">All 100+ Courses</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto lg:mx-0">
                            Join the EduFlow PRO membership and unlock every course, certificate, and resource on our platform for one low price.
                        </p>

                        <div className="space-y-4 mb-10">
                            {["New courses added every month", "Exclusive community access", "Downloadable project files", "Verified certificates"].map((p, i) => (
                                <div key={i} className="flex items-center gap-3 text-gray-300 justify-center lg:justify-start">
                                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-[10px]"><FaCheck /></div>
                                    <span className="font-medium">{p}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-md">
                        <div className="bg-white rounded-[2.5rem] p-10 shadow-3xl text-center relative overflow-hidden">
                            {/* Popular Badge */}
                            <div className="absolute top-0 right-0 bg-indigo-600 text-white px-8 py-2 rotate-45 translate-x-10 translate-y-4 font-bold text-xs">
                                BEST VALUE
                            </div>

                            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-4">Annual Plan</p>
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <span className="text-gray-400 line-through text-2xl font-bold">$499</span>
                                <span className="text-5xl font-extrabold text-gray-900">$199</span>
                                <span className="text-gray-400 font-bold">/year</span>
                            </div>
                            <p className="text-indigo-600 font-bold text-sm mb-10">Save $300 today!</p>

                            <button className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-indigo-100 transition-all hover:-translate-y-1 mb-6">
                                Choose Education PRO
                            </button>

                            <p className="text-xs text-gray-400 font-medium italic">30-day money-back guarantee. No questions asked.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Pricing;
