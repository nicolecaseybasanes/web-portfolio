import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ActivityCard from './ActivityCard';

const activitiesData = {
  Midterm: [
    { id: 1, title: 'Introduction to HTML', category: 'Midterm', type: 'HTML and CSS', desc: ' ', mockColor: 'bg-blue-300 dark:bg-blue-900/50' },
    { id: 2, title: 'Activity 2', category: 'Midterm', type: 'HTML & CSS', desc: 'Responsive product grid utilizing CSS Grid and Flexbox for modern retail flows.', mockColor: 'bg-rose-300 dark:bg-rose-900/50' },
    { id: 3, title: 'Activity 3', category: 'Midterm', type: 'HTML and CSS', desc: ' ', mockColor: 'bg-purple-300 dark:bg-purple-900/50' },
  ],
  Finals: [
    { id: 4, title: 'Introduction to Javascript', category: 'Finals', type: 'Javascript', desc: 'A comprehensive deep dive into Javascript.', mockColor: 'bg-amber-300 dark:bg-amber-900/50' },
    { id: 5, title: 'Introduction to JQuery', category: 'Finals', type: 'JQuery', desc: 'This file is corrupted.', mockColor: 'bg-emerald-300 dark:bg-emerald-900/50' },
    { id: 6, title: 'Student Information', category: 'Finals', type: 'JQuery', desc: 'Student Information with DOM manipulation.', mockColor: 'bg-sky-300 dark:bg-sky-900/50' },
    { id: 7, title: 'E-HAW', category: 'Finals', type: 'Case Study', desc: 'A web-based ordering system for 4 M.E Bacolod Inasal.', mockColor: 'bg-indigo-300 dark:bg-indigo-900/50' , link: 'https://e-haw-system-for-4me-bacolod-inasal.vercel.app'},
  ]
};

export default function LabCarousel() {
  const [activeFilter, setActiveFilter] = useState('Midterm');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const currentActivities = activitiesData[activeFilter];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === currentActivities.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? currentActivities.length - 1 : prev - 1));
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentIndex(0); 
  };

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 pt-32 pb-24 overflow-hidden relative">
      
      {/* Header & Filters */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 md:mb-16 gap-6 px-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            Computer laboratory <br />
            <span className="italic font-serif text-[var(--accent-mint)] dark:text-[var(--accent-mint-glow)]">
              Activities
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-md text-sm transition-colors">
            A closer look to my Web Development progress. Swipe left and right to see my works.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => handleFilterChange('Midterm')}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-colors ${
              activeFilter === 'Midterm' 
                ? 'bg-[var(--accent-mint)] text-white dark:bg-[var(--accent-mint-glow)] dark:text-black shadow-md' 
                : 'bg-gray-200 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-white/10'
            }`}
          >
            Midterm
          </button>
          <button 
            onClick={() => handleFilterChange('Finals')}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-colors ${
              activeFilter === 'Finals' 
                ? 'bg-[var(--accent-mint)] text-white dark:bg-[var(--accent-mint-glow)] dark:text-black shadow-md' 
                : 'bg-gray-200 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-white/10'
            }`}
          >
            Finals
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative flex justify-center items-center h-[600px] md:h-[450px]">
        
        {/* Cards Track */}
        <div 
          className="flex items-center justify-center w-full relative h-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {currentActivities.map((activity, index) => {
            let offset = (index - currentIndex + currentActivities.length) % currentActivities.length;
            let position = offset === 0 ? 0 : offset === 1 ? 1 : -1;

            return (
              <div 
                key={activity.id}
                className="absolute transition-all duration-500 ease-out cursor-pointer"
                style={{
                  transform: `translateX(${position * 80}%) scale(${position === 0 ? 1 : 0.85})`,
                  opacity: position === 0 ? 1 : 0.35,
                  zIndex: position === 0 ? 20 : 10,
                  filter: position === 0 ? 'none' : 'blur(2px)'
                }}
                onClick={() => setCurrentIndex(index)}
              >
                <ActivityCard activity={activity} isActive={position === 0} />
              </div>
            );
          })}
        </div>

        {/* Left Arrow (Absolute positioned on the left side) */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 md:left-4 lg:left-12 top-1/2 -translate-y-1/2 z-40 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 dark:bg-[#1a221e]/90 backdrop-blur-sm shadow-xl flex items-center justify-center text-gray-600 dark:text-white hover:scale-110 transition-transform"
        >
          <ChevronLeft size={24} />
        </button>
        
        {/* Right Arrow (Absolute positioned on the right side) */}
        <button 
          onClick={nextSlide}
          className="absolute right-0 md:right-4 lg:right-12 top-1/2 -translate-y-1/2 z-40 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 dark:bg-[#1a221e]/90 backdrop-blur-sm shadow-xl flex items-center justify-center text-gray-600 dark:text-white hover:scale-110 transition-transform"
        >
          <ChevronRight size={24} />
        </button>

      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8 md:mt-12">
        {currentActivities.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-[var(--accent-mint)] dark:bg-[var(--accent-mint-glow)] w-8' 
                : 'bg-gray-300 dark:bg-gray-600 w-2'
            }`}
          />
        ))}
      </div>

    </div>
  );
}