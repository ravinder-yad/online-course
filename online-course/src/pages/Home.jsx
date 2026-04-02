import React from 'react';
import Hero from '../components/home/Hero';
import Categories from '../components/home/Categories';
import TrendingCourses from '../components/home/TrendingCourses';
import LiveClasses from '../components/home/LiveClasses';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Instructors from '../components/home/Instructors';
import Reviews from '../components/home/Reviews';
import ProjectLearning from '../components/home/ProjectLearning';
import Pricing from '../components/home/Pricing';
import FinalCTA from '../components/home/FinalCTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Top Categories */}
      <Categories />

      {/* 3. Trending Courses */}
      <TrendingCourses />

      {/* 4. Live Classes Section */}
      <LiveClasses />

      {/* 5. Why Choose Us */}
      <WhyChooseUs />

      {/* 6. Instructors Section */}
      <Instructors />

      {/* 7. Student Reviews */}
      <Reviews />

      {/* 8. Project Based Learning */}
      <ProjectLearning />

      {/* 9. Pricing Plans */}
      <Pricing />

      {/* 10. Final CTA Section */}
      <FinalCTA />

      {/* 11. Footer */}
      <Footer />
    </div>
  );
};

export default Home;

