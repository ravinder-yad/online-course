import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Front-end Developer',
    review: 'This platform completely changed my career. The courses are high quality and the projects are very relevant to industry standards.',
    image: 'https://i.pravatar.cc/100?img=1',
    rating: 5
  },
  {
    id: 2,
    name: 'Maria Garcia',
    role: 'Data Scientist',
    review: 'I love the flexible learning schedule. The instructors are experts and the community support is amazing. Highly recommended!',
    image: 'https://i.pravatar.cc/100?img=26',
    rating: 5
  },
  {
    id: 3,
    name: 'David Smith',
    role: 'Product Manager',
    review: 'The certificates helped me land my dream job. The content is structured perfectly for beginners and intermediate learners.',
    image: 'https://i.pravatar.cc/100?img=3',
    rating: 5
  }
];

const Reviews = () => {
  return (
    <section className="bg-gray-50 py-24 overflow-hidden">
      <div className="section-padding">
        <div className="flex flex-col items-center text-center gap-3 lg:gap-4 mb-10 lg:mb-16">
          <span className="px-4 py-2 rounded-full bg-primary/5 text-primary text-[10px] lg:text-sm font-black uppercase tracking-widest w-fit">Testimonials</span>
          <h2 className="text-3xl lg:text-5xl font-black text-gray-900 leading-[1.1]">
            What Our <span className="text-gradient">Students Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-10 rounded-[3rem] bg-white border border-gray-100 shadow-xl shadow-gray-200/40 relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute top-8 right-8 text-6xl text-primary/10 group-hover:text-primary/20 transition-colors">
                <FaQuoteRight />
              </div>
              
              <div className="flex flex-col gap-6 lg:gap-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed font-bold tracking-tight italic">
                  "{rev.review}"
                </p>
                
                <div className="flex items-center gap-4 mt-2 pt-6 lg:pt-8 border-t border-gray-50">
                  <img src={rev.image} alt={rev.name} className="w-12 lg:w-16 h-12 lg:h-16 rounded-xl lg:rounded-2xl object-cover shadow-lg border-2 lg:border-4 border-gray-50" />
                  <div>
                    <h3 className="text-lg lg:text-xl font-black text-gray-900">{rev.name}</h3>
                    <p className="text-[10px] lg:text-sm font-bold text-gray-400 uppercase tracking-widest leading-none mt-1">{rev.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
