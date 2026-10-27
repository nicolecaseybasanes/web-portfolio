import { motion } from 'framer-motion';

export default function ScrollReveal({ children, delay = 0, direction = 'up' }) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      // Changed 'once: true' to 'once: false' so it replays every time
      viewport={{ once: false, margin: "-50px" }} 
      transition={{ 
        duration: 0.7, 
        delay: delay, 
        ease: "easeOut" 
      }}
    >
      {children}
    </motion.div>
  );
}