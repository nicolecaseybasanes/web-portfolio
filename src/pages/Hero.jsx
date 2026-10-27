import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import LabCarousel from '../components/LabCarousel';

export default function Hero() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center pt-20 pb-10">
        
        {/* Top Label */}
        <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-[var(--accent-mint)] dark:text-[var(--accent-mint-glow)] mb-8 flex items-center gap-2 transition-colors duration-300">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-mint)] dark:bg-[var(--accent-mint-glow)]"></span>
          
        </span>
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-semibold leading-tight max-w-4xl text-gray-900 dark:text-white mb-2 transition-colors duration-300">
          I love designing <br /> interfaces that is
        </h1>

        {/* Italic Serif Sub-headline */}
        <h2 className="italic font-serif text-[var(--accent-mint)] dark:text-[var(--accent-mint-glow)] text-6xl md:text-8xl mb-8 transition-colors duration-300">
          effortlessly simple.
        </h2>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-12 transition-colors duration-300">
          I'm Nicole Casey! I am into minimalist and soft neumorphism <br className="hidden md:block" /> UI designs.
        </p>

        {/* Profile Pill Badge */}
        <Link 
          to="/about" 
          className="group flex items-center p-2 pr-3 rounded-full neu-card bg-white dark:bg-[#1a221e] transition-all duration-300 hover:scale-105"
        >
          <img 
            src="/profile.png" 
            alt="Nicole Casey" 
            className="w-12 h-12 rounded-full object-cover"
            onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }}
          />
          
          <span className="text-sm font-semibold text-gray-800 dark:text-white px-5 transition-colors duration-300">
            About Nicole Casey
          </span>

          <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-[#252e29] flex items-center justify-center transition-colors duration-300 group-hover:bg-gray-100 dark:group-hover:bg-[#2c3731]">
            <ArrowRight size={18} className="text-[var(--accent-mint)] dark:text-[var(--accent-mint-glow)] transition-colors duration-300" />
          </div>
        </Link>
      </section>

      {/* Carousel appended below Hero */}
      <LabCarousel />
    </div>
  );
}