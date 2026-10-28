import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ActivityCard from './ActivityCard';
import ProjectModal from './ProjectModal';
import ScrollReveal from './ScrollReveal';

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
      
      {/* Header & Filters */}
      <ScrollReveal direction="up" delay={0.1}>
        <div id="activities" className="flex flex-col items-center text-center mb-12 md:mb-16 px-6 scroll-mt-32">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
               Computer Laboratory <br />
              <span className="italic font-serif text-[var(--accent-mint)] dark:text-[var(--accent-mint-glow)]">
                Activities
              </span>
            </h2>
          </div>

          <div className="flex items-center justify-center gap-3">
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
      </ScrollReveal>

      {/* CAROUSEL CONTAINER - 3D Perspective */}
      <ScrollReveal direction="up" delay={0.2}>
        <div 
          className="relative flex justify-center items-center h-[450px] md:h-[600px]" 
          style={{ perspective: "1200px" }} // Binaba natin nang konti para mas visible ang 3D tilt
        >
          
          <div 
            className="flex items-center justify-center w-full relative h-full select-none touch-pan-y"
            style={{ transformStyle: "preserve-3d" }}
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

              let cardStyle = {};
              
              // 3D COVER FLOW MATH (Gayahin ang reference)
              if (position === 0) {
                // Center Card: Deretso, malaki, may shadow
                cardStyle = {
                  transform: 'translateX(0%) translateZ(0px) rotateY(0deg) scale(1)',
                  zIndex: 30,
                  opacity: 1,
                  boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.2)',
                };
              } else if (position === -1) {
                // Left Card: Naka-angulo paharap sa gitna, bahagyang itinulak sa likod
                cardStyle = {
                  transform: 'translateX(-65%) translateZ(-120px) rotateY(25deg) scale(0.9)',
                  zIndex: 10,
                  opacity: 0.9, // 0.9 para kita pa rin ang kulay
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                };
              } else if (position === 1) {
                // Right Card: Naka-angulo paharap sa gitna, bahagyang itinulak sa likod
                cardStyle = {
                  transform: 'translateX(65%) translateZ(-120px) rotateY(-25deg) scale(0.9)',
                  zIndex: 10,
                  opacity: 0.9,
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                };
              } else {
                // Hidden Cards
                cardStyle = {
                  transform: 'translateX(0%) translateZ(-300px) scale(0.5)',
                  opacity: 0,
                  zIndex: 0,
                  pointerEvents: 'none',
                };
              }

              return (
                <div 
                  key={activity.id}
                  className="absolute transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer"
                  style={cardStyle}
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

        </div>

        {/* Bottom Controls */}
        <div className="flex flex-col items-center justify-center mt-0 md:mt-6 gap-4">
          <div className="flex items-center justify-center gap-5 md:gap-6">
            <button 
              onClick={prevSlide}
              className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/90 dark:bg-[#1a221e]/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-600 dark:text-white hover:scale-110 transition-transform border border-gray-100 dark:border-white/5"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {currentActivities.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-[var(--accent-mint)] dark:bg-[var(--accent-mint-glow)] w-8' 
                      : 'bg-gray-300 dark:bg-gray-600 w-2.5 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/90 dark:bg-[#1a221e]/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-600 dark:text-white hover:scale-110 transition-transform border border-gray-100 dark:border-white/5"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <span className="text-[11px] font-bold tracking-[0.2em] text-gray-400 dark:text-gray-500 uppercase mt-2">
            {currentIndex + 1} <span className="text-gray-300 dark:text-gray-600 mx-1">/</span> {currentActivities.length}
          </span>
        </div>

      </ScrollReveal>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

    </div>
  );
}