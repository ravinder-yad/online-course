import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-16 lg:pt-24 pb-12 overflow-hidden text-white/70">
      <div className="section-padding grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        {/* About Section */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center font-black text-white text-2xl shadow-lg">E</div>
             <span className="text-2xl font-black text-white tracking-widest uppercase">EduScale</span>
          </div>
          <p className="text-sm font-bold leading-relaxed tracking-tight italic">
            Empowering curious minds with high-quality, project-based learning. Learn from the best world-class experts and join our global community.
          </p>
          <div className="flex gap-4">
             {[FiFacebook, FiTwitter, FiInstagram, FiLinkedin].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-xl bg-gray-800 border-2 border-gray-700/50 flex items-center justify-center text-white hover:bg-primary transition-all duration-300">
                   <Icon />
                </button>
             ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-8">
          <h4 className="text-xl font-black text-white uppercase tracking-widest border-b-2 border-primary w-fit pb-1">Quick Links</h4>
          <ul className="flex flex-col gap-4 font-bold text-sm tracking-widest uppercase">
            {['Explore Courses', 'About Us', 'Contact', 'Pricing', 'Terms of Service'].map(link => (
               <li key={link}>
                  <a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group">
                     <span className="w-0 group-hover:w-4 h-[2px] bg-primary transition-all duration-300"></span>
                     {link}
                  </a>
               </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-8">
          <h4 className="text-xl font-black text-white uppercase tracking-widest border-b-2 border-primary w-fit pb-1">Top Topics</h4>
          <ul className="flex flex-col gap-4 font-bold text-sm tracking-widest uppercase">
             {['Web Development', 'Data Science', 'UI/UX Design', 'App Development', 'AI / ML'].map(cat => (
                <li key={cat}>
                   <a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group">
                      <span className="w-0 group-hover:w-4 h-[2px] bg-primary transition-all duration-300"></span>
                      {cat}
                   </a>
                </li>
             ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-8">
          <h4 className="text-xl font-black text-white uppercase tracking-widest border-b-2 border-primary w-fit pb-1">Newsletter</h4>
          <p className="text-sm font-bold leading-relaxed italic">
            Subscribe to get latest updates and new course offers from our platform.
          </p>
          <div className="flex flex-col gap-4">
             <div className="relative group">
                <input 
                   type="email" 
                   placeholder="Enter your email" 
                   className="w-full bg-gray-800 border-2 border-gray-700 rounded-2xl px-6 py-4 text-white text-sm font-bold tracking-widest placeholder:text-gray-500 focus:outline-none focus:border-primary transition-all duration-300"
                />
                <button className="absolute right-2 top-2 bottom-2 px-6 bg-primary text-white rounded-xl shadow-lg hover:shadow-primary/20 transition-all font-black text-xs uppercase tracking-widest">
                   Join
                </button>
             </div>
             <div className="flex items-center gap-3 text-sm font-bold italic">
                <FiMail className="text-primary" />
                <span>support@eduscale.com</span>
             </div>
             <div className="flex items-center gap-3 text-sm font-bold italic">
                <FiPhone className="text-primary" />
                <span>+1 234 567 890</span>
             </div>
          </div>
        </div>
      </div>

      <div className="section-padding border-t border-gray-800/50 mt-12 lg:mt-16 pt-8 lg:pt-12 flex flex-col lg:flex-row justify-between items-center gap-6 text-[10px] lg:text-sm font-black uppercase tracking-widest text-center lg:text-left">
         <p className="opacity-60 italic">© 2024 EduScale Learning. Empowering the next generation of builders.</p>
         <div className="flex gap-6 lg:gap-8 italic">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
