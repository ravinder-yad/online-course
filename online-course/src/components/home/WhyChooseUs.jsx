import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiDollarSign, FiAward, FiClock, FiCheckCircle } from 'react-icons/fi';

const features = [
  {
    id: 1,
    title: 'Expert Teachers',
    desc: 'Learn from industry pioneers and world-class educators from top universities.',
    icon: <FiUsers className="text-3xl" />,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: 2,
    title: 'Affordable Courses',
    desc: 'Premium quality education that fits your budget. Multiple tiers for everyone.',
    icon: <FiDollarSign className="text-3xl" />,
    color: 'bg-green-100 text-green-600'
  },
  {
    id: 3,
    title: 'Professional Certificates',
    desc: 'Get industry-recognized certificates for every completion to boost your career.',
    icon: <FiAward className="text-3xl" />,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    id: 4,
    title: 'Lifetime Access',
    desc: 'Learn at your own pace with lifetime access to all your enrolled courses.',
    icon: <FiClock className="text-3xl" />,
    color: 'bg-orange-100 text-orange-600'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-24 overflow-hidden">
      <div className="section-padding grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Image/Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="https://cdn.dribbble.com/userupload/26133582/file/original-b66927b2b2236a320b3707c965086575.png?resize=1024x768" 
              alt="Quality Education" 
              className="w-full h-full object-cover font-bold"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
          </div>
          
          <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl shadow-xl z-20">
            <div className="flex flex-col gap-2">
              <span className="text-4xl font-black text-primary">10+</span>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest text-[10px]">Years Experience</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <div className="flex flex-col gap-10 order-1 lg:order-2">
          <div className="flex flex-col gap-4">
            <span className="px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-bold uppercase tracking-widest w-fit">Benefit of Choice</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Why People <span className="text-gradient">Choose Us</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col gap-6"
              >
                <div className={`w-16 h-16 rounded-3xl ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-black text-gray-900 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-bold tracking-tight">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col gap-4 pt-4">
            <div className="flex items-center gap-3">
              <FiCheckCircle className="text-green-500 text-xl font-bold" />
              <span className="text-sm font-bold text-gray-700">Access to 5,000+ premium courses</span>
            </div>
            <div className="flex items-center gap-3">
              <FiCheckCircle className="text-green-500 text-xl font-bold" />
              <span className="text-sm font-bold text-gray-700">24/7 Priority support for all students</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
