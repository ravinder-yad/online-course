import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiGithub, FiZap, FiArrowUpRight, FiLayers, FiCode, FiVideo, FiActivity } from 'react-icons/fi';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const ProjectDetailPage = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await fetch(`http://localhost:5001/api/projects/${id}`);
                const data = await response.json();
                setProject(data);
            } catch (err) {
                console.error("Error fetching project:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchProject();
    }, [id]);

    if (loading) return (
        <div className="h-screen flex items-center justify-center bg-white">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
    );

    if (!project) return (
        <div className="h-screen flex flex-col items-center justify-center bg-white">
            <h2 className="text-3xl font-black mb-4">Project Not Found</h2>
            <Link to="/projects" className="text-primary font-bold hover:underline underline-offset-8">Return to Projects Hub</Link>
        </div>
    );

    return (
        <div className="min-h-screen bg-white">
            {/* Nav Header */}
            <div className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
                <div className="section-padding py-4 max-w-7xl mx-auto flex items-center justify-between">
                    <Link to="/projects" className="flex items-center gap-3 text-gray-500 hover:text-primary transition-all font-bold text-sm uppercase tracking-widest">
                        <FiArrowLeft className="text-xl" />
                        Back to Hub
                    </Link>
                    <div className="flex gap-4">
                        {project.githubLink && (
                            <a href={project.githubLink} target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-50 flex items-center justify-center rounded-xl text-gray-900 border border-gray-200">
                                <FiGithub />
                            </a>
                        )}
                        {project.demoLink && (
                            <a href={project.demoLink} target="_blank" rel="noreferrer" className="px-6 py-2.5 bg-primary text-white flex items-center gap-2 rounded-xl text-xs font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all">
                                <FiZap /> Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <main className="section-padding py-12 lg:py-24 max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-4 py-2 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-xl">
                                {project.category}
                            </span>
                            <span className="px-4 py-2 bg-gray-50 text-gray-400 text-[10px] font-black uppercase tracking-widest rounded-xl border border-gray-100">
                                {project.difficulty}
                            </span>
                        </div>
                        <h1 className="text-4xl lg:text-7xl font-black text-gray-900 mb-8 leading-[1.1]">
                            {project.title}
                        </h1>
                        <p className="text-lg text-gray-500 font-medium leading-relaxed mb-12">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-6 items-center">
                            <button className="px-12 py-5 bg-gray-900 text-white rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-primary transition-all shadow-2xl shadow-gray-900/10 hover:shadow-primary/40">
                                Build this Project
                            </button>
                            <Link to="/courses" className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-all group">
                                Explore Courses <FiArrowUpRight className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                    
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="relative">
                        <div className="absolute -inset-10 bg-primary/5 rounded-[4rem] -z-10 animate-pulse"></div>
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-auto rounded-[3rem] shadow-2xl shadow-gray-200 border-8 border-white group-hover:scale-105 transition-transform duration-700" 
                        />
                    </motion.div>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-3 gap-24">
                    <div className="lg:col-span-2 space-y-16">
                        <section>
                            <h2 className="text-3xl font-black text-gray-900 mb-8 flex items-center gap-4">
                                <span className="w-10 h-10 bg-gray-900 flex items-center justify-center rounded-2xl text-white"><FiCode /></span>
                                Technical Overview
                            </h2>
                            <div className="prose prose-lg max-w-none text-gray-500 font-medium leading-[1.8]">
                                {project.longDescription || "This project is built using modern cloud architecture. It covers real-world challenges like state management, authentication, and complex data handling. Build it and deploy it to your portfolio."}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-black text-gray-900 mb-8 flex items-center gap-4">
                                <span className="w-10 h-10 bg-gray-900 flex items-center justify-center rounded-2xl text-white"><FiActivity /></span>
                                Key Features
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                {["Responsive Design", "API Integration", "State Management", "Deployment Ready"].map((feat, i) => (
                                    <div key={i} className="p-6 bg-gray-50 rounded-3xl border border-gray-100/50 flex flex-col gap-3">
                                        <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary"><FiZap /></div>
                                        <h4 className="text-lg font-black text-gray-900">{feat}</h4>
                                        <p className="text-sm text-gray-400">High-performance implementation focusing on scalability.</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Details */}
                    <div className="space-y-12">
                        <div className="p-10 bg-white rounded-[3rem] border border-gray-100 shadow-2xl shadow-gray-100 flex flex-col gap-8 sticky top-32">
                           <div className="space-y-4">
                               <p className="text-[10px] font-black uppercase tracking-widest text-gray-300">Stack Breakdown</p>
                               <div className="flex flex-col gap-3">
                                   {project.techStack.map(tech => (
                                       <div key={tech} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                           <span className="text-sm font-black text-gray-900">{tech}</span>
                                           <FiLayers className="text-gray-300" />
                                       </div>
                                   ))}
                               </div>
                           </div>
                           
                           <div className="space-y-6 pt-4 border-t border-gray-50">
                                <button className="w-full py-5 bg-primary text-white rounded-2xl text-sm font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-primary/30">
                                    <FiVideo className="text-xl" />
                                    Watch Video Demo
                                </button>
                                <button className="w-full py-5 bg-white text-gray-900 border-2 border-gray-900 rounded-2xl text-sm font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-gray-900 hover:text-white transition-all">
                                    Download Case Study PDF
                                </button>
                           </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProjectDetailPage;
