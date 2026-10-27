import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ActivityCard from './ActivityCard';
import ProjectModal from './ProjectModal';

const activitiesData = {
  Midterm: [
    { id: 1, title: 'Introduction to HTML', category: 'Midterm', type: 'HTML and CSS', desc: 'A foundational exercise focusing on semantic HTML structure and basic CSS styling to build a clean, functional user registration form..', mockColor: 'bg-blue-300 dark:bg-blue-900/50', link: '/lab/midterm/act-1/registration.html', image: '/images/midterm-1.png' },
    { id: 2, title: 'Activity 2', category: 'Midterm', type: 'HTML & CSS', desc: 'A responsive personal portal layout utilizing CSS Grid and Flexbox to organize multi-page navigation, sidebars, and main content areas.', mockColor: 'bg-rose-300 dark:bg-rose-900/50', link: '/lab/midterm/act-2/homepage.html',image: '/images/midterm-2.png' },
    { id: 3, title: 'Activity 3', category: 'Midterm', type: 'HTML and CSS', desc: 'A modern, single-page landing page designed to showcase a personal profile, and distinct sections for skills, projects, and contact..', mockColor: 'bg-purple-300 dark:bg-purple-900/50', link: '/lab/midterm/act-3/landingpage.html',image: '/images/midterm-3.png' },
  ],
  Finals: [
    { id: 4, title: 'Introduction to Javascript', category: 'Finals', type: 'Javascript', desc: 'An introductory JavaScript exercise demonstrating fundamental DOM manipulation and event handling through an interactive, styled form interface.', mockColor: 'bg-amber-300 dark:bg-amber-900/50' , link: '/lab/finals/act-1/html/index.html',image: '/images/finals-1.png'},
    { id: 5, title: 'Introduction to JQuery', category: 'Finals', type: 'JQuery', desc: 'This file is currently corrupted.', mockColor: 'bg-emerald-300 dark:bg-emerald-900/50', link: '/lab/midterm/act-2/index.html',image: '/images/finals-2.png' },
    { id: 6, title: 'Student Information', category: 'Finals', type: 'JQuery', desc: 'An interactive dashboard featuring dynamic table manipulation, where users can toggle row colors and update profile information using jQuery.', mockColor: 'bg-sky-300 dark:bg-sky-900/50', link: '/lab/finals/act-3/index.html',image: '/images/finals-3.png' },
    { id: 7, title: 'E-HAW', category: 'Finals', type: 'Case Study', desc: 'A web-based ordering system for 4 M.E Bacolod Inasal.', mockColor: 'bg-indigo-300 dark:bg-indigo-900/50' , link: 'https://e-haw-system-for-4me-bacolod-inasal.vercel.app',image: '/images/finals-4.png'},
  ]
};

export default function LabCarousel() {
  const [activeFilter, setActiveFilter] = useState('Finals'); 
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const [selectedProject, setSelectedProject] = useState(null);
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
      
      {/* Header & Filters (Now aligned to the left) */}
      <div className="flex flex-col mb-12 md:mb-16 px-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
             Computer Laboratory <br />
            <span className="italic font-serif text-[var(--accent-mint)] dark:text-[var(--accent-mint-glow)]">
              Activities
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-md text-sm transition-colors mb-6">
            
          </p>
        </div>

        {/* MOVED HERE: Now stacks below the description on the left */}
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
          className="flex items-center justify-center w-full relative h-full select-none touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {currentActivities.map((activity, index) => {
            let offset = (index - currentIndex + currentActivities.length) % currentActivities.length;
            let position = offset;
            
            if (offset === currentActivities.length - 1) {
              position = -1; 
            } else if (offset > 1) {
              position = 2; 
            }

            return (
              <div 
                key={activity.id}
                className={`absolute transition-all duration-500 ease-out cursor-pointer ${
                  position === 2 ? 'pointer-events-none' : ''
                }`}
                style={{
                  transform: `translateX(${position * 80}%) scale(${position === 0 ? 1 : 0.85})`,
                  opacity: position === 2 ? 0 : (position === 0 ? 1 : 0.35),
                  zIndex: position === 0 ? 20 : 10,
                  filter: position === 0 ? 'none' : 'blur(2px)'
                }}
                onClick={() => {
                  if (position !== 0) setCurrentIndex(index);
                }}
              >
                <ActivityCard 
                  activity={activity} 
                  isActive={position === 0} 
                  onOpenModal={setSelectedProject} 
                />
              </div>
            );
          })}
        </div>

        {/* Left Arrow */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 md:left-4 lg:left-12 top-1/2 -translate-y-1/2 z-40 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 dark:bg-[#1a221e]/90 backdrop-blur-sm shadow-xl flex items-center justify-center text-gray-600 dark:text-white hover:scale-110 transition-transform"
        >
          <ChevronLeft size={24} />
        </button>
        
        {/* Right Arrow */}
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

      {/* Render Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

    </div>
  );
}