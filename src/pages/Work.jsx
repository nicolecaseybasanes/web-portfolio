import { ArrowUpRight } from 'lucide-react';

const allActivities = [
  { id: 1, title: 'Interactive Quiz App', category: 'Javascript', desc: 'A focused browser quiz with instant feedback.' },
  { id: 2, title: 'E-Commerce UI', category: 'Midterm', desc: 'Responsive product grid utilizing CSS Grid.' },
  { id: 3, title: 'Dashboard Analytics', category: 'Finals', desc: 'Data visualization panel built with React.' },
  { id: 4, title: 'Case Study: UI Redesign', category: 'Finals', desc: 'Modernizing a legacy interface.' },
];

export default function Work() {
  return (
    // Removed the forced 'dark' class. Now it responds to the global toggle.
    <div className="min-h-screen bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] text-[var(--text-primary)] dark:text-[var(--text-primary-dark)] py-32 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-[var(--accent-mint)] dark:text-[var(--accent-mint-glow)] text-xs tracking-widest uppercase mb-2 transition-colors">
            All Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white transition-colors">
            My Work <br />
            <span className="italic font-serif text-[var(--accent-mint)] dark:text-[var(--accent-mint-glow)] transition-colors">
              archive.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {allActivities.map((act) => (
            <div key={act.id} className="neu-card p-8 flex flex-col justify-between group bg-white dark:bg-[#1a221e]">
              <div>
                <span className="text-xs font-mono text-[var(--accent-mint)] dark:text-[var(--accent-mint-glow)]">
                  {act.category}
                </span>
                <h3 className="text-2xl font-semibold mb-3 mt-2 font-serif italic text-gray-900 dark:text-white transition-colors">
                  {act.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6 transition-colors">
                  {act.desc}
                </p>
              </div>
              <button className="w-full py-3 bg-[#98ff98] text-black font-semibold rounded-full hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2">
                View Details <ArrowUpRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}