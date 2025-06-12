import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function AnimatedSection({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    triggerOnce: false, // tekrar görünür olunca tekrar animasyon
    amount: 0.2,        
  });

  return (
    <>
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>    
    </>

  );
}

export default AnimatedSection;
