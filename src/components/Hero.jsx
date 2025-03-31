import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const projectCount = useMotionValue(0);
  const clientCount = useMotionValue(0);
  
  const projectCountText = useTransform(projectCount, value => `${Math.floor(value)}+`);
  const clientCountText = useTransform(clientCount, value => `${Math.floor(value)}+`);
  
  useEffect(() => {
    const projectAnimation = animate(projectCount, 851, { duration: 2.5 });
    const clientAnimation = animate(clientCount, 978, { duration: 2.5 });
    
    return () => {
      projectAnimation.stop();
      clientAnimation.stop();
    };
  }, []);
  return (
    <div className="relative min-h-[70vh] py-16 sm:py-10 md:py-16 lg:p-20 bg-gray-900 text-white overflow-hidden">
      {/* Background image with overlay */}
      <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            
            className="bg-white hidden absolute bottom-0 right-0 text-gray-900 rounded-lg p-6 shadow-lg z-20 rounded-b-none md:flex items-center gap-6"
          >
            {/* Client avatars */}
            <div className="flex -space-x-2 sm:-space-x-3">
              <img src="/avatar1.svg" alt="Client" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border-2 border-white" />
              <img src="/avatar2.svg" alt="Client" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border-2 border-white" />
              <img src="/avatar3.svg" alt="Client" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border-2 border-white" />
              <img src="/avatar4.svg" alt="Client" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border-2 border-white" />
            </div>
            
            {/* Stats */}
            <div className="text-center sm:text-left">
              <motion.p className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-900">{clientCountText}</motion.p>
              <p className="text-xs sm:text-sm font-medium text-gray-600">Satisfied client all over the world</p>
            </div>
          </motion.div>
      <div className="absolute inset-0 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')`,
          filter: 'brightness(0.7)'
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24 lg:py-32 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
              <span className="text-yellow-400">BUILDING DREAMS</span> <br className="md:block hidden" />
              <span className="md:inline">WITH BULTIP</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-full sm:max-w-xl">
              Your trusted partner in construction excellence, delivering quality projects on time and within budget.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/contact" ><motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="bg-[#feb700] text-xs sm:text-sm hover:bg-yellow-600 text-gray-900 font-bold py-2 sm:py-[14px] px-4 sm:px-6  transition duration-300 w-full sm:w-auto"
              >
                GET STARTED
              </motion.button></Link>
              
              <Link to="/about"><motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-xs sm:text-sm border-2 border-white hover:bg-white/10 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 transition duration-300 w-full sm:w-auto"
              >
                LEARN MORE
              </motion.button></Link>
            </div>
          </motion.div>
          
          {/* Stats box */}
          
        </div>
       
      </div>
      
    </div>
  );
};

export default Hero;