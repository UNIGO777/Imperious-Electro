import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const YearlyRotator = () => {
  // State to track the current day index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);
  
  // Array of 365 construction-related facts or days
  // For demonstration, we'll use a smaller set that repeats
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
  
  useEffect(() => {
    // Set up interval to rotate through the facts
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % yearlyFacts.length);
        setIsAnimating(false);
      }, 500); // Half of the transition time
    }, 5000); // Change every 5 seconds
    
    return () => clearInterval(interval);
  }, [yearlyFacts.length]);
  
  // Animation variants
  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };
  
  return (
    <div 
      ref={containerRef}
      className="bg-[#feb700] py-4 overflow-hidden relative"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <div className="h-12 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p 
                key={currentIndex}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="text-white font-medium text-lg"
              >
                {yearlyFacts[currentIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 h-full w-8 bg-yellow-600 opacity-20"></div>
      <div className="absolute right-0 top-0 h-full w-8 bg-yellow-600 opacity-20"></div>
    </div>
  );
};

export default YearlyRotator;