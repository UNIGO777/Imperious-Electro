import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const TextSlider = () => {
  const text = "Imperious Electro";
  const [replay, setReplay] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  
  // Split the text into individual letters for animation
  const letters = text.split('');
  
  useEffect(() => {
    // Only start the interval when the component is in view
    let interval;
    if (isInView) {
      interval = setInterval(() => {
        setReplay(prev => !prev);
      }, 6000); // Replay every 6 seconds
    }
    
    return () => clearInterval(interval);
  }, [isInView]);
  
  // Background text animation variants
  const backgroundTextVariants = {
    initial: { opacity: 0, scale: 1.2 },
    animate: { 
      opacity: 0.50, 
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.8 }
    }
  };
  
  return (
    <div className="bg-gray-900 py-8 sm:py-10 md:py-12 text-center overflow-hidden" ref={ref}>
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex justify-center items-center mb-3 sm:mb-4">
          <div className="h-0.5 w-3 sm:w-4 bg-[#feb700] mr-2"></div>
          <span className="text-yellow-500 font-medium tracking-wider text-xs sm:text-sm">OUR BRAND</span>
          <div className="h-0.5 w-3 sm:w-4 bg-[#feb700] ml-2"></div>
        </div>
        
        <div className="relative h-20 sm:h-24 md:h-28 flex justify-center items-center">
          {/* Large background text */}
          <AnimatePresence mode="wait">
            {isInView && (
              <motion.div
                key={`bg-${replay ? 'replay' : 'initial'}`}
                variants={backgroundTextVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-0 flex justify-center items-center pointer-events-none"
              >
                <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white opacity-5 select-none">
                  {text}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Main animated text */}
          <AnimatePresence mode="wait">
            {isInView && (
              <motion.div 
                key={replay ? 'replay' : 'initial'}
                className="flex overflow-hidden z-10"
              >
                {letters.map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: 100, opacity: 0, scale: 0.5 }}
                    animate={{ 
                      y: 0, 
                      opacity: 1,
                      scale: 1,
                      transition: {
                        delay: index * 0.08,
                        duration: 0.6,
                        ease: [0.215, 0.61, 0.355, 1]
                      }
                    }}
                    exit={{ 
                      y: -100, 
                      opacity: 0,
                      transition: {
                        duration: 0.3,
                        delay: (letters.length - index) * 0.04
                      }
                    }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white inline-block mx-[0.5px] sm:mx-[1px] md:mx-[2px]"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : { width: 0 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="h-0.5 bg-[#feb700] mx-auto mt-4 sm:mt-5 md:mt-6 max-w-md"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-gray-400 mt-3 sm:mt-4 text-xs sm:text-sm max-w-xs sm:max-w-sm md:max-w-md mx-auto px-4"
        >
          Powering your electrical solutions with excellence and innovation
        </motion.p>
      </div>
    </div>
  );
};

export default TextSlider;