import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

const DidYouKnow = () => {
  // Motion values for animated counters
  const residentialCount = useMotionValue(0);
  const commercialCount = useMotionValue(0);
  const renovationCount = useMotionValue(0);
  const sustainableCount = useMotionValue(0);
  
  // Transform motion values to text
  const residentialText = useTransform(residentialCount, value => `${Math.floor(value)}+`);
  const commercialText = useTransform(commercialCount, value => `${Math.floor(value)}%`);
  const renovationText = useTransform(renovationCount, value => `${Math.floor(value)}+`);
  const sustainableText = useTransform(sustainableCount, value => `${Math.floor(value)}+`);
  
  // Reference for animation trigger
  const sectionRef = useRef(null);
  
  useEffect(() => {
    // Animate the counters when component mounts
    const residentialAnimation = animate(residentialCount, 768, { duration: 2 });
    const commercialAnimation = animate(commercialCount, 98, { duration: 2 });
    const renovationAnimation = animate(renovationCount, 970, { duration: 2 });
    const sustainableAnimation = animate(sustainableCount, 46, { duration: 2 });
    
    return () => {
      // Clean up animations
      residentialAnimation.stop();
      commercialAnimation.stop();
      renovationAnimation.stop();
      sustainableAnimation.stop();
    };
  }, []);
  
  // Stat cards data
  const statCards = [
    {
      number: '01',
      title: 'Award-Winning Residential',
      stat: residentialText,
      description: 'Residential Masterpieces'
    },
    {
      number: '02',
      title: 'Retail Destinations',
      stat: commercialText,
      description: 'Commercial Successes'
    },
    {
      number: '03',
      title: 'Historic Building Restorations',
      stat: renovationText,
      description: 'Renovation Completed'
    },
    {
      number: '04',
      title: 'Green Building Projects',
      stat: sustainableText,
      description: 'Sustainable Construction'
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Background graphic element */}
      <div className="absolute right-0 top-0 w-full h-full opacity-10 z-0">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path d="M0,0 L1000,0 L1000,1000 L0,0" fill="#f0f0f0" />
          <path d="M0,0 L1000,0 L1000,1000" stroke="#e5e5e5" strokeWidth="2" fill="none" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Yellow label */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center mb-4"
        >
          <div className="h-0.5 w-6 bg-[#feb700] mr-2"></div>
          <span className="text-yellow-500 font-medium tracking-wider text-sm">DID YOU KNOW?</span>
        </motion.div>
        
        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 max-w-3xl"
        >
          EYE-OPENING FACTS ABOUT THE CONSTRUCTION INDUSTRY
        </motion.h2>
        
        {/* Divider */}
        <div className="h-px w-full bg-gray-200 mb-12"></div>
        
        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((card, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-100 p-6"
            >
              <div className="text-yellow-500 font-bold mb-2">{card.number}.</div>
              <div className="text-gray-600 text-sm mb-4">{card.title}</div>
              
              <motion.div className="text-4xl md:text-5xl font-bold mb-2">
                {card.stat}
              </motion.div>
              
              <div className="text-gray-800 font-medium">{card.description}</div>
            </motion.div>
          ))}
        </div>
        
        {/* Decorative element */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute top-10 right-10 z-10 hidden lg:block"
        >
          <div className="w-24 h-24 rounded-full border-4 border-yellow-500 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DidYouKnow;