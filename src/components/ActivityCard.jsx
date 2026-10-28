import { ArrowUpRight } from 'lucide-react';

export default function ActivityCard({ activity, isActive, onOpenModal }) {
  return (
    <div 
      // Eksaktong sukat para magkasya ang 3 cards sa mobile
      className={`w-[260px] sm:w-[300px] md:w-[420px] h-[380px] sm:h-[420px] md:h-[550px] flex flex-col bg-white dark:bg-[#1a221e] rounded-[1.5rem] md:rounded-[2rem] p-3 md:p-6 shadow-2xl border border-gray-100 dark:border-white/5 transition-all duration-500 
        ${isActive ? 'opacity-100' : 'opacity-100'}`}
    >
      {/* Top Side: Image Preview */}
      <div className="w-full h-[150px] sm:h-[180px] md:h-[45%] rounded-[1rem] md:rounded-[1.5rem] overflow-hidden relative bg-gray-50 dark:bg-[#111814] border border-gray-200 dark:border-white/5 shrink-0">
        <img 
          src={activity.image} 
          alt={activity.title} 
          className="w-full h-full object-cover object-top absolute inset-0"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Preview+Not+Available'; }}
        />
      </div>

      {/* Bottom Side: Text Content */}
      <div className="flex flex-col flex-grow pt-3 md:pt-5 px-1">
        <div className="flex justify-between items-center mb-1 md:mb-2">
          <span className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-[var(--accent-mint)] dark:text-[var(--accent-mint-glow)]">
            {activity.category}
          </span>
          <span className="text-[9px] md:text-[10px] text-gray-400">{activity.type}</span>
        </div>
        
        <h3 className="text-lg md:text-3xl font-serif text-gray-900 dark:text-white leading-tight mb-1 md:mb-3 transition-colors line-clamp-2">
          {activity.title}
        </h3>
        
        <p className="text-[10px] md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed transition-colors line-clamp-3">
          {activity.desc ? activity.desc : 'No description provided.'}
        </p>

        {/* Button */}
        <div className="mt-auto pt-2 md:pt-4">
          <button 
            onClick={(e) => {
              e.stopPropagation(); 
              onOpenModal(activity);
            }}
            className="w-full py-2.5 md:py-3.5 bg-[#98ff98] hover:bg-emerald-300 text-black font-bold text-[10px] md:text-sm rounded-full transition-colors flex items-center justify-between px-4 md:px-6 cursor-pointer"
          >
            <span>View Live</span>
            <ArrowUpRight size={14} className="md:w-[18px] md:h-[18px]" />
          </button>
        </div>
      </div>
    </div>
  );
}