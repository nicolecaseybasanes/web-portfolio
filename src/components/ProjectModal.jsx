import { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Close on Escape key press
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Content Container */}
      <div className="relative w-full max-w-6xl h-[85vh] bg-white dark:bg-[#1a221e] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-white/10 bg-white dark:bg-[#1a221e]">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-xs text-[var(--accent-mint)] dark:text-[var(--accent-mint-glow)] font-semibold tracking-wider uppercase mt-1">
              {project.category} • {project.type}
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Fallback button to open in new tab */}
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 rounded-full transition-colors"
            >
              Open in New Tab <ExternalLink size={16} />
            </a>
            
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/30 dark:hover:text-red-400 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Iframe Container (The Live Project) */}
        <div className="flex-1 w-full bg-gray-50 dark:bg-[#0f1412] relative">
          <iframe 
            src={project.link} 
            title={project.title}
            className="w-full h-full border-0 bg-white"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
          />
        </div>

      </div>
    </div>
  );
}