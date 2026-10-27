import { ArrowUpRight } from 'lucide-react';

export default function ActivityCard({ activity, isActive, onOpenModal }) {
  return (
    <div 
      className={`neu-card w-[320px] md:w-[800px] h-[550px] md:h-[400px] flex flex-col md:flex-row overflow-hidden transition-all duration-500 
        ${isActive ? 'opacity-100 shadow-2xl' : 'opacity-40 shadow-none'}`}
    >
      {/* Top Side (Mobile) / Left Side (Desktop) - FULL IMAGE */}
      <div className="w-full md:w-1/2 h-[45%] md:h-full relative overflow-hidden border-b md:border-b-0 md:border-r border-gray-200 dark:border-white/5 bg-gray-100 dark:bg-[#111814]">
        <img 
          src={activity.image} 
          alt={activity.title} 
          className="w-full h-full object-cover object-top absolute inset-0 transition-transform duration-700 hover:scale-105"
          // Fallback in case the image doesn't load
          onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Preview+Not+Available'; }}
        />
      </div>

      {/* Bottom Side (Mobile) / Right Side (Desktop) - Details & Button */}
      <div className="w-full md:w-1/2 h-[55%] md:h-full p-6 md:p-10 flex flex-col justify-between bg-white dark:bg-[#1a221e] transition-colors duration-300">
        <div>
          <div className="flex justify-between items-center mb-3 md:mb-6">
            <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--accent-mint)] dark:text-[var(--accent-mint-glow)]">
              {activity.category}
            </span>
            <span className="text-[10px] text-gray-400">{activity.type}</span>
          </div>
          
          <h3 className="text-2xl md:text-4xl font-serif text-gray-900 dark:text-white leading-tight mb-2 md:mb-4 transition-colors">
            {activity.title}
          </h3>
          
          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm transition-colors line-clamp-3 md:line-clamp-none">
            {activity.desc ? activity.desc : 'No description provided.'}
          </p>
        </div>

        {/* Button triggers the modal */}
        <button 
          onClick={(e) => {
            e.stopPropagation(); 
            onOpenModal(activity);
          }}
          className="w-full py-3 md:py-3.5 mt-2 md:mt-6 bg-[#98ff98] hover:bg-emerald-300 text-black font-semibold rounded-full transition-colors flex items-center justify-between px-6 cursor-pointer"
        >
          <span>View Live</span>
          <ArrowUpRight size={18} />
        </button>
      </div>
    </div>
  );
}