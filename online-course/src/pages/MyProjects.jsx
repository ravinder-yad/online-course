import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiEdit2, FiTrash2, FiExternalLink, FiGithub, FiLayers, FiActivity, FiUser } from 'react-icons/fi';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const MyProjects = () => {
    const [myProjects, setMyProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMyProjects = async () => {
            try {
                const response = await fetch('http://localhost:5001/api/projects'); // In real app, filter by userId
                const data = await response.json();
                setMyProjects(data.slice(0, 3)); // Mock filter for "My" projects
            } catch (err) {
                console.error("Error fetching my projects:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchMyProjects();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this project?")) return;
        try {
            const response = await fetch(`http://localhost:5001/api/projects/${id}`, { method: 'DELETE' });
            if (response.ok) {
                setMyProjects(prev => prev.filter(p => p._id !== id));
            }
        } catch (err) {
            console.error("Error deleting project:", err);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="section-padding py-12 lg:py-24 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 lg:mb-24">
                    <div>
                        <div className="flex items-center gap-3 mb-4 text-primary">
                            <FiUser className="text-xl" />
                            <span className="text-[10px] font-black uppercase tracking-widest italic">Personal Dashboard</span>
                        </div>
                        <h1 className="text-4xl lg:text-7xl font-black text-gray-900 leading-tight">My <span className="text-primary italic">Projects</span> Hub</h1>
                        <p className="text-lg text-gray-500 font-medium mt-4">Manage your professional portfolio and track your building progress.</p>
                    </div>
                    <Link to="/add-project" className="px-10 py-5 bg-primary text-white rounded-2xl text-sm font-black uppercase tracking-widest shadow-2xl shadow-primary/30 hover:-translate-y-1 transition-all flex items-center gap-3">
                        <FiPlus className="text-xl" /> Submit New Project
                    </Link>
                </div>

                <div className="grid lg:grid-cols-4 gap-12">
                    {/* Stats Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="p-8 bg-gray-900 rounded-[2.5rem] text-white shadow-2xl shadow-gray-200">
                            <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-8 italic">Performance Stats</h4>
                            <div className="space-y-8">
                                <div>
                                    <p className="text-[10px] uppercase font-black text-white/40 mb-2">Total Submissions</p>
                                    <p className="text-4xl font-black italic">{myProjects.length}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-black text-white/40 mb-2">Total Views</p>
                                    <p className="text-4xl font-black italic">1.2k</p>
                                </div>
                                <div className="pt-8 border-t border-white/5">
                                    <button className="w-full py-4 bg-white/5 hover:bg-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">View All Activity</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project List */}
                    <div className="lg:col-span-3">
                        <AnimatePresence mode="popLayout">
                            {loading ? (
                                <div className="py-20 flex justify-center"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>
                            ) : myProjects.length > 0 ? (
                                <div className="space-y-6">
                                    {myProjects.map((project) => (
                                        <motion.div
                                            key={project._id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="group bg-white p-6 lg:p-10 rounded-[3rem] border border-gray-100/50 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all flex flex-col md:flex-row items-center gap-10"
                                        >
                                            <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-[2rem] overflow-hidden flex-shrink-0 border-4 border-white shadow-xl">
                                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                            </div>

                                            <div className="flex-1 w-full text-center md:text-left">
                                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
                                                    <span className="px-3 py-1 bg-gray-50 text-[9px] font-black uppercase tracking-widest text-gray-400 border border-gray-100 rounded-lg">{project.category}</span>
                                                    <span className="px-3 py-1 bg-primary/10 text-[9px] font-black uppercase tracking-widest text-primary rounded-lg">{project.difficulty}</span>
                                                </div>
                                                <h3 className="text-2xl font-black text-gray-900 mb-2 truncate">{project.title}</h3>
                                                <p className="text-gray-400 text-sm font-medium mb-6 line-clamp-1">{project.description}</p>

                                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                                                    <a href={project.githubLink} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors">
                                                        <FiGithub className="text-lg" />
                                                        Source
                                                    </a>
                                                    <a href={project.demoLink} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:text-primary/70 transition-colors">
                                                        <FiExternalLink className="text-lg" />
                                                        Live
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="flex md:flex-col gap-3">
                                                <button className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-2xl text-gray-400 hover:bg-gray-100 hover:text-gray-900 transition-all border border-gray-100 shadow-sm">
                                                    <FiEdit2 />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(project._id)}
                                                    className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-2xl text-gray-400 hover:bg-red-500 hover:text-white transition-all border border-gray-100 shadow-sm"
                                                >
                                                    <FiTrash2 />
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <div className="py-40 flex flex-col items-center justify-center text-center bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
                                    <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-gray-200 mb-8 shadow-sm">
                                        <FiLayers className="text-4xl" />
                                    </div>
                                    <h3 className="text-2xl font-black text-gray-900 mb-2 leading-none uppercase tracking-tight italic">No Projects Yet</h3>
                                    <p className="text-gray-400 font-medium max-w-xs mx-auto mb-10">Start building your legacy. Submit your first project today!</p>
                                    <Link to="/add-project" className="px-10 py-4 bg-gray-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-gray-200">Submit Project</Link>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MyProjects;
