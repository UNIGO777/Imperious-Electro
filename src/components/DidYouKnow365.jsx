import { motion, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const DidYouKnow365 = () => {
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
  
  // State for 365 rotating text
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Array of 365 construction-related facts (shortened for demonstration)
  const yearlyFacts = [
    "Day 1: Construction industry employs over 7% of the global workforce",
    "Day 2: The first construction crane was invented by Ancient Greeks",
    "Day 3: Concrete is the most used building material in the world",
    "Day 4: The tallest building took only 5 years to construct",
    "Day 5: Green buildings use 30% less energy than conventional ones",
    "Day 6: The construction industry generates 30% of global waste",
    "Day 7: The Great Wall of China took over 2,000 years to build",
    "Day 8: Modern skyscrapers can sway up to 3 feet in strong winds",
    "Day 9: The first recorded architect was Imhotep from Ancient Egypt",
    "Day 10: Construction is one of the oldest professions in human history",
    "Day 11: The Empire State Building was built in just 410 days",
    "Day 12: The construction industry accounts for 13% of global GDP"
    // In a real implementation, you would include all 365 days
  ];
  
  // Animation variants for rotating text
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };
  
  useEffect(() => {
    // Animate the counters when component mounts
    const residentialAnimation = animate(residentialCount, 768, { duration: 2 });
    const commercialAnimation = animate(commercialCount, 98, { duration: 2 });
    const renovationAnimation = animate(renovationCount, 970, { duration: 2 });
    const sustainableAnimation = animate(sustainableCount, 46, { duration: 2 });
    
    // Set up interval for rotating text
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % yearlyFacts.length);
    }, 5000); // Change every 5 seconds
    
    return () => {
      // Clean up animations and interval
      residentialAnimation.stop();
      commercialAnimation.stop();
      renovationAnimation.stop();
      sustainableAnimation.stop();
      clearInterval(interval);
    };
  }, [yearlyFacts.length]);
  
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
    <>
      {/* 365 Rotating Text Banner */}
      <div className="bg-[#feb700] py-4 overflow-hidden relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white flex items-center justify-center mr-3 sm:mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <div className="h-12 overflow-hidden flex items-center">
              <AnimatePresence mode="wait">
                <motion.p 
                  key={currentIndex}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="text-white font-medium text-sm sm:text-base md:text-lg"
                >
                  {yearlyFacts[currentIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute left-0 top-0 h-full w-4 sm:w-8 bg-yellow-600 opacity-20"></div>
        <div className="absolute right-0 top-0 h-full w-4 sm:w-8 bg-yellow-600 opacity-20"></div>
      </div>
      
      {/* Original DidYouKnow Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white relative overflow-hidden" ref={sectionRef}>
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
            className="flex items-center mb-3 sm:mb-4"
          >
            <div className="h-0.5 w-4 sm:w-6 bg-[#feb700] mr-2"></div>
            <span className="text-yellow-500 font-medium tracking-wider text-xs sm:text-sm">DID YOU KNOW?</span>
          </motion.div>
          
          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 max-w-3xl leading-tight"
          >
            EYE-OPENING FACTS ABOUT THE CONSTRUCTION INDUSTRY
          </motion.h2>
          
          {/* Divider */}
          <div className="h-px w-full bg-gray-200 mb-8 sm:mb-12"></div>
          
          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {statCards.map((card, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-100 p-4 sm:p-6"
              >
                <div className="text-yellow-500 font-bold text-sm sm:text-base mb-2">{card.number}.</div>
                <div className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">{card.title}</div>
                
                <motion.div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                  {card.stat}
                </motion.div>
                
                <div className="text-gray-800 font-medium text-sm sm:text-base">{card.description}</div>
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
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-4 border-yellow-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default DidYouKnow365;