import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiPlus, FiImage, FiLink, FiArrowRight, FiCheckCircle, FiInfo } from 'react-icons/fi';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ["Web Development", "App Development", "UI/UX", "AI / ML"];
const DIFFICULTIES = ["Beginner", "Intermediate", "Advanced"];

const AddProject = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: 'Web Development',
        techStack: '',
        image: '',
        demoLink: '',
        githubLink: '',
        difficulty: 'Beginner'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formattedData = {
                ...formData,
                techStack: formData.techStack.split(',').map(s => s.trim())
            };

            const response = await fetch('http://localhost:5001/api/projects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formattedData)
            });

            if (response.ok) {
                navigate('/projects');
            }
        } catch (err) {
            console.error("Error creating project:", err);
        }
    };

    return (
        <div className="min-h-screen bg-[#F9FAFB]">
            <div className="section-padding py-12 lg:py-24 max-w-4xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-[3rem] p-10 lg:p-20 shadow-2xl shadow-gray-200 border border-gray-100">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-2xl text-white shadow-xl shadow-primary/30"><FiPlus className="text-2xl" /></div>
                        <div>
                           <h1 className="text-3xl font-black text-gray-900 leading-tight">Submit Your Project</h1>
                           <p className="text-sm font-medium text-gray-400">Build your professional portfolio and help others learn.</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-12">
                        <div className="grid md:grid-cols-2 gap-10">
                            {/* Basic Info */}
                            <div className="space-y-8">
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 ml-1">Project Title</label>
                                    <input 
                                        type="text" 
                                        name="title"
                                        required
                                        placeholder="e.g. Modern SaaS Hub"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl text-sm font-bold focus:bg-white focus:border-primary transition-all outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 ml-1">Category</label>
                                    <select 
                                        name="category"
                                        value={formData.category}
                                        onChange={handleInputChange}
                                        className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl text-sm font-bold focus:bg-white focus:border-primary transition-all outline-none appearance-none"
                                    >
                                        {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 ml-1">Difficulty</label>
                                    <div className="flex gap-2">
                                        {DIFFICULTIES.map(d => (
                                            <button 
                                                key={d}
                                                type="button"
                                                onClick={() => setFormData(p => ({ ...p, difficulty: d }))}
                                                className={`flex-1 py-3 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border-2 ${
                                                    formData.difficulty === d ? 'bg-gray-900 border-gray-900 text-white' : 'bg-gray-50 border-transparent text-gray-400 hover:border-gray-200'
                                                }`}
                                            >
                                                {d}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Tech Stack & Links */}
                            <div className="space-y-8">
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 ml-1">Tech Stack (comma separated)</label>
                                    <input 
                                        type="text" 
                                        name="techStack"
                                        required
                                        placeholder="e.g. React, Tailwind, Node.js"
                                        value={formData.techStack}
                                        onChange={handleInputChange}
                                        className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl text-sm font-bold focus:bg-white focus:border-primary transition-all outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 ml-1">Thumbnail Image URL</label>
                                    <div className="relative">
                                        <FiImage className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300" />
                                        <input 
                                            type="text" 
                                            name="image"
                                            placeholder="https://images.unsplash.com/..."
                                            value={formData.image}
                                            onChange={handleInputChange}
                                            className="w-full pl-14 pr-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl text-sm font-bold focus:bg-white focus:border-primary transition-all outline-none"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 ml-1">Live Demo Link</label>
                                    <div className="relative">
                                        <FiLink className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300" />
                                        <input 
                                            type="text" 
                                            name="demoLink"
                                            placeholder="https://yourdemo.com"
                                            value={formData.demoLink}
                                            onChange={handleInputChange}
                                            className="w-full pl-14 pr-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl text-sm font-bold focus:bg-white focus:border-primary transition-all outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 ml-1">Project Description</label>
                            <textarea 
                                name="description"
                                required
                                rows="5"
                                placeholder="Describe the project goal, core features, and technical hurdles you solved."
                                value={formData.description}
                                onChange={handleInputChange}
                                className="w-full px-8 py-6 bg-gray-50 border-2 border-transparent rounded-[2rem] text-sm font-bold focus:bg-white focus:border-primary transition-all outline-none resize-none leading-relaxed"
                            ></textarea>
                        </div>

                        <div className="p-8 bg-gray-50 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-100">
                             <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-2xl text-primary shadow-sm"><FiInfo className="text-xl" /></div>
                                <p className="text-xs font-medium text-gray-500 max-w-xs">By submitting, you agree to our Project Portfolio guidelines and high-quality standards.</p>
                             </div>
                             <button type="submit" className="w-full md:w-auto px-16 py-5 bg-primary text-white rounded-2xl text-sm font-black uppercase tracking-widest shadow-2xl shadow-primary/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                                Publish Project <FiArrowRight className="text-xl" />
                             </button>
                        </div>
                    </form>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default AddProject;
