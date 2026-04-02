import React, { useState, useMemo } from 'react';
import { FiX } from 'react-icons/fi';
import CourseHeader from '../components/courses/CourseHeader';
import FilterSidebar from '../components/courses/FilterSidebar';
import CourseGrid from '../components/courses/CourseGrid';
import Footer from '../components/Footer';

const MOCK_COURSES = [
  { id: 1, title: 'Full Stack Web Development 2024', instructor: 'Dr. Angela Yu', rating: 4.8, reviews: '12k', price: 99, oldPrice: 199, category: 'Web Development', level: 'Beginner', image: 'https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg', bestseller: true, trending: true },
  { id: 2, title: 'Advanced React Part 2: Patterns', instructor: 'Kent C. Dodds', rating: 4.9, reviews: '8k', price: 79, oldPrice: 149, category: 'Web Development', level: 'Intermediate', image: 'https://img-c.udemycdn.com/course/480x270/2018828_41ab_3.jpg', trending: true },
  { id: 3, title: 'Python for Data Science & ML', instructor: 'Jose Portilla', rating: 4.7, reviews: '25k', price: 89, oldPrice: 199, category: 'Data Science', level: 'Beginner', image: 'https://img-c.udemycdn.com/course/480x270/903744_8da2.jpg', bestseller: true },
  { id: 4, title: 'Complete UI/UX Design Masterclass', instructor: 'Gary Simon', rating: 4.8, reviews: '4k', price: 129, oldPrice: 199, category: 'Design', level: 'Expert', image: 'https://img-c.udemycdn.com/course/480x270/3228347_1636_5.jpg' },
  { id: 5, title: 'Deep Learning with PyTorch', instructor: 'Andrej Karpathy', rating: 4.9, reviews: '2k', price: 149, oldPrice: 299, category: 'AI & Machine Learning', level: 'Expert', image: 'https://img-c.udemycdn.com/course/480x270/4655746_c56d_2.jpg', trending: true },
  { id: 6, title: 'iOS 17 & Swift Development', instructor: 'Sean Allen', rating: 4.8, reviews: '6k', price: 119, oldPrice: 179, category: 'App Development', level: 'Beginner', image: 'https://img-c.udemycdn.com/course/480x270/1778502_f4b9_12.jpg' },
  { id: 7, title: 'AWS Certified Solutions Architect', instructor: 'Stephane Maarek', rating: 4.7, reviews: '45k', price: 95, oldPrice: 159, category: 'Cloud Computing', level: 'Intermediate', image: 'https://img-c.udemycdn.com/course/480x270/2196488_8fc7_10.jpg', bestseller: true },
  { id: 8, title: 'Ethical Hacking: Ghost in the Shell', instructor: 'Zaid Sabih', rating: 4.6, reviews: '15k', price: 0, category: 'Cyber Security', level: 'Intermediate', image: 'https://img-c.udemycdn.com/course/480x270/857010_8239_2.jpg' },
  { id: 9, title: 'Google Analytics GA4 Masterclass', instructor: 'Ben Collins', rating: 4.5, reviews: '3k', price: 49, oldPrice: 89, category: 'Marketing', level: 'Beginner', image: 'https://img-c.udemycdn.com/course/480x270/3228347_1636_5.jpg' },
  { id: 10, title: 'SQL Boot Camp for Data Analysis', instructor: 'Colt Steele', rating: 4.8, reviews: '10k', price: 69, oldPrice: 129, category: 'Data Science', level: 'Beginner', image: 'https://img-c.udemycdn.com/course/480x270/903744_8da2.jpg' },
  { id: 11, title: 'Business Strategy for Startup Founders', instructor: 'Guy Kawasaki', rating: 4.7, reviews: '1.5k', price: 0, category: 'Business', level: 'Expert', image: 'https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg' },
  { id: 12, title: 'Next.js 14 Ultimate Guide', instructor: 'Maximilian Schwarzmüller', rating: 4.9, reviews: '5k', price: 85, oldPrice: 169, category: 'Web Development', level: 'Intermediate', image: 'https://img-c.udemycdn.com/course/480x270/2018828_41ab_3.jpg', trending: true }
];

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Courses');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    category: [],
    price: [],
    level: [],
    rating: []
  });
  const [sortBy, setSortBy] = useState('popularity');

  const filteredCourses = useMemo(() => {
    return MOCK_COURSES.filter(course => {
      // Search check
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Category quick-pill check
      const matchesQuickCategory = activeCategory === 'All Courses' || course.category === activeCategory;
      
      // Sidebar filter checks
      const matchesSidebarCategory = activeFilters.category.length === 0 || activeFilters.category.includes(course.category);
      const matchesPrice = activeFilters.price.length === 0 || 
                          (activeFilters.price.includes('Free') && course.price === 0) || 
                          (activeFilters.price.includes('Paid') && course.price > 0);
      const matchesLevel = activeFilters.level.length === 0 || activeFilters.level.includes(course.level);
      const matchesRating = activeFilters.rating.length === 0 || 
                           (activeFilters.rating.includes('4.5 & up') && course.rating >= 4.5) ||
                           (activeFilters.rating.includes('4.0 & up') && course.rating >= 4.0) ||
                           (activeFilters.rating.includes('3.5 & up') && course.rating >= 3.5);

      return matchesSearch && matchesQuickCategory && matchesSidebarCategory && matchesPrice && matchesLevel && matchesRating;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return b.id - a.id;
      return b.reviews.length - a.reviews.length; // Simplified popularity
    });
  }, [searchQuery, activeCategory, activeFilters, sortBy]);

  const handleFilterChange = (groupId, option) => {
    setActiveFilters(prev => ({
      ...prev,
      [groupId]: prev[groupId].includes(option)
        ? prev[groupId].filter(o => o !== option)
        : [...prev[groupId], option]
    }));
  };

  const handleClearFilters = () => {
    setActiveFilters({ category: [], price: [], level: [], rating: [] });
    setActiveCategory('All Courses');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <CourseHeader 
        onSearch={setSearchQuery} 
        onCategoryChange={setActiveCategory}
        activeCategory={activeCategory}
        onMobileFilterToggle={() => setShowMobileFilters(true)}
      />

      <div className="section-padding py-8 lg:py-16 flex flex-col lg:flex-row gap-12 relative">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <FilterSidebar 
            activeFilters={activeFilters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
          />
        </div>

        {/* Mobile Filter Drawer */}
        {showMobileFilters && (
          <div className="fixed inset-0 z-[200] lg:hidden">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowMobileFilters(false)}></div>
            <div className="absolute left-0 top-0 bottom-0 w-[320px] bg-white shadow-2xl animate-slide-in-left overflow-y-auto p-4">
               <div className="flex justify-between items-center mb-6 px-4">
                  <h3 className="text-xl font-black uppercase tracking-widest">Filters</h3>
                  <button onClick={() => setShowMobileFilters(false)} className="p-2 bg-gray-100 rounded-xl"><FiX/></button>
               </div>
               <FilterSidebar 
                activeFilters={activeFilters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
              />
            </div>
          </div>
        )}
        
        <CourseGrid 
          courses={filteredCourses}
          onSortChange={setSortBy}
          sortBy={sortBy}
        />
      </div>

      <Footer />
    </div>
  );
};

export default CoursesPage;
