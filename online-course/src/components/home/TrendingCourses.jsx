import React from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiUser, FiClock, FiShoppingCart } from 'react-icons/fi';

const courses = [
  {
    id: 1,
    title: 'Full Stack Web Development Bootcamp 2024',
    instructor: 'Dr. Angela Yu',
    rating: 4.8,
    reviews: '12,500',
    price: '$99.99',
    oldPrice: '$189.99',
    image: 'https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg',
    tag: 'Bestseller'
  },
  {
    id: 2,
    title: 'Advanced React Part 2: Patterns & Performance',
    instructor: 'Kent C. Dodds',
    rating: 4.9,
    reviews: '8,400',
    price: '$79.99',
    oldPrice: '$149.99',
    image: 'https://img-c.udemycdn.com/course/480x270/2018828_41ab_3.jpg',
    tag: 'Trending'
  },
  {
    id: 3,
    title: 'Python for Data Science and Machine Learning',
    instructor: 'Jose Portilla',
    rating: 4.7,
    reviews: '25,000',
    price: '$89.99',
    oldPrice: '$199.99',
    image: 'https://img-c.udemycdn.com/course/480x270/903744_8da2.jpg',
    tag: 'Popular'
  },
  {
    id: 4,
    title: 'Complete UI/UX Design Masterclass 2024',
    instructor: 'Gary Simon',
    rating: 4.8,
    reviews: '4,200',
    price: '$129.99',
    oldPrice: '$199.99',
    image: 'https://img-c.udemycdn.com/course/480x270/3228347_1636_5.jpg',
    tag: 'New'
  }
];

const TrendingCourses = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="section-padding">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 lg:mb-16">
          <div className="flex flex-col gap-3 lg:gap-4">
            <span className="px-4 py-2 rounded-full bg-primary/5 text-primary text-xs lg:text-sm font-black uppercase tracking-widest w-fit mb-2">🔥 Top Rated</span>
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 leading-tight">
              Trending <span className="text-gradient">Courses</span>
            </h2>
          </div>
          <button className="hidden sm:flex px-8 py-4 bg-white text-gray-700 font-black text-xs uppercase tracking-widest rounded-2xl border-2 border-gray-100 shadow-sm hover:border-primary/20 transition-all items-center gap-2">
            View All Courses
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-premium group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 font-bold"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-primary shadow-lg">
                  {course.tag}
                </div>
              </div>
              
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-lg font-black text-gray-900 leading-tight group-hover:text-primary transition-colors line-clamp-2 min-h-[3rem]">
                  {course.title}
                </h3>
                
                <div className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest">
                  <FiUser className="text-primary" />
                  {course.instructor}
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FiStar 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} 
                    />
                  ))}
                  <span className="text-sm font-black text-gray-900 ml-1">{course.rating}</span>
                  <span className="text-xs text-gray-400 font-bold">({course.reviews})</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black text-gray-900">{course.price}</span>
                    <span className="text-sm text-gray-400 line-through font-bold">{course.oldPrice}</span>
                  </div>
                  <button className="w-10 h-10 rounded-2xl bg-primary/5 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <FiShoppingCart className="text-xl" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingCourses;
