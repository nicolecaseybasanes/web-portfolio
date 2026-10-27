import { ArrowUpRight } from 'lucide-react';
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal'; // <-- ADDED

const socials = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/nicolecaseybasanes',
    username: '@nicolecaseybasanes'
  },
  {
    name: 'Facebook',
    icon: FaFacebook,
    url: 'https://facebook.com/nickyhindiminaj',
    username: 'Nicky Basanes'
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    url: 'https://instagram.com/nickyhindiminaj',
    username: '@nickyhindiminaj'
  }
];

export default function Contact() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 pb-24 overflow-hidden relative">
      
      {/* Header Section */}
      <ScrollReveal direction="up" delay={0.1}> {/* <-- ADDED */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 px-6">
          <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-[var(--accent-mint)] dark:text-[var(--accent-mint-glow)] mb-4 flex items-center gap-2 transition-colors duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-mint)] dark:bg-[var(--accent-mint-glow)]"></span>
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            Get in <span className="italic font-serif text-[var(--accent-mint)] dark:text-[var(--accent-mint-glow)]">touch.</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-md text-sm transition-colors">
            Whether you want to collaborate on a project, discuss systems thinking, or just say hi, my inbox is always open.
          </p>
        </div>
      </ScrollReveal> {/* <-- ADDED */}

      {/* Socials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-6">
        {socials.map((social, index) => { /* <-- ADDED 'index' to the map parameters */
          const Icon = social.icon;
          return (
            /* ADDED ScrollReveal wrapper for staggering the animation */
            <ScrollReveal key={social.name} direction="up" delay={index * 0.15}> 
              <a 
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center py-10 px-6 neu-card bg-white dark:bg-[#1a221e] rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Icon Container with Neumorphic Inner shadow on hover */}
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-gray-50 dark:bg-[#111814] group-hover:bg-[var(--accent-mint-glow)] dark:group-hover:bg-[#1f3a2c] transition-colors duration-300">
                  <Icon 
                    size={28} 
                    className="text-gray-600 dark:text-gray-300 group-hover:text-[var(--accent-mint)] dark:group-hover:text-[var(--accent-mint-glow)] transition-colors duration-300" 
                  />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {social.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                  {social.username}
                </p>
                
                <div className="flex items-center gap-1 text-[var(--accent-mint)] dark:text-[var(--accent-mint-glow)] text-xs font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-300">
                  Visit Profile <ArrowUpRight size={14} />
                </div>
              </a>
            </ScrollReveal>
          );
        })}
      </div>

    </div>
  );
}