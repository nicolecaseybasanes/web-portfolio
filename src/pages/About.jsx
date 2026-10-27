export default function About() {
  return (
    <section className="min-h-screen py-32 px-6 max-w-4xl mx-auto">
      <div className="neu-card p-10 md:p-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">About Nicole Casey</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 transition-colors">
          I am currently a 3rd year College Student focused on building accessible, 
          minimalist digital interfaces. I believe that good design is should 
          guide the user effortlessly without unnecessary friction.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">Education</h2>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-mint)] dark:text-[var(--accent-mint-glow)] mb-4 transition-colors">Pambayang Dalubhasaan ng Marilao</h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400 transition-colors">
              <li>BS in Information Technology</li>
              </ul>

  
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-mint)] dark:text-[var(--accent-mint-glow)] mb-4 transition-colors">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'JavaScript', 'CSS Grid', 'Figma', 'Tailwind', 'Node.js', 'UI/UX'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-xs font-medium border border-emerald-100 dark:border-emerald-800/50 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}