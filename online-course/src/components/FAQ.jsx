import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
    {
        question: "How long do I have access to the courses?",
        answer: "You get lifetime access! Once you enroll in a course, you can watch it anytime, anywhere, and as many times as you like. We don't believe in time limits for learning."
    },
    {
        question: "Will I get a certificate upon completion?",
        answer: "Yes, every professional course on EduFlow comes with a verifiable digital certificate that you can share on LinkedIn or with potential employers."
    },
    {
        question: "Do you offer a refund if I'm not satisfied?",
        answer: "Absolutely. We offer a 7-day money-back guarantee. If you're not happy with the course, just let us know and we'll refund your full amount, no questions asked."
    },
    {
        question: "Can I learn on my mobile device?",
        answer: "Yes! Our platform is fully responsive. You can learn on your phone, tablet, or laptop. We also have a dedicated mobile app for offline learning."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-10 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-3">Support</h2>
                    <h3 className="text-4xl font-extrabold text-gray-900">Common Questions</h3>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border-2 rounded-2xl transition-all duration-300 ${openIndex === index ? 'border-indigo-600 shadow-lg' : 'border-gray-100 hover:border-indigo-100'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left px-8 py-6 flex items-center justify-between"
                            >
                                <span className="text-lg font-bold text-gray-800">{faq.question}</span>
                                <span className={`text-indigo-600 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-56' : 'max-h-0'}`}
                            >
                                <div className="px-8 pb-8 text-gray-500 leading-relaxed font-medium">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
