import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Home, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1.5 p-2 rounded-full bg-white/90 dark:bg-[#1a221e]/90 backdrop-blur-xl border border-white/40 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-all duration-300">
        
        {/* Home Tab */}
        <Link 
          to="/" 
          className={`flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 ease-out ${
            isActive('/') 
              ? 'bg-[#e6f4ea] dark:bg-[#1f3a2c] text-[var(--accent-mint)] dark:text-[var(--accent-mint-glow)] shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),inset_-2px_-2px_5px_rgba(255,255,255,0.8)] dark:shadow-none' 
              : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
          }`}
        >
          <Home size={20} strokeWidth={isActive('/') ? 2.5 : 2} />
        </Link>

        <div className="h-6 w-px bg-gray-200 dark:bg-gray-700/50 mx-1"></div>

        {/* About Tab */}
        <Link 
          to="/about" 
          className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-full transition-all duration-300 ease-out ${
            isActive('/about') 
              ? 'text-gray-900 dark:text-white font-bold bg-gray-100 dark:bg-white/5' 
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium hover:bg-gray-50 dark:hover:bg-white/5'
          }`}
        >
          <Users size={18} strokeWidth={isActive('/about') ? 2.5 : 2} />
          <span className="hidden sm:inline text-sm">About</span>
        </Link>

        {/* WORK TAB REMOVED HERE */}

        <div className="h-6 w-px bg-gray-200 dark:bg-gray-700/50 mx-1"></div>

        {/* Dark Mode Toggle */}
        <button 
          onClick={() => setDark(!dark)} 
          className="flex items-center justify-center w-11 h-11 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white transition-all duration-300"
        >
          {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
}