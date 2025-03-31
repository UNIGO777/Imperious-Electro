import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import image from '../assets/image.png'

const NeedHelp = () => {
  return (
    <section className="relative pt-10 sm:pt-0 bg-[#1e1e1e]  overflow-hidden">
      {/* Grid background with gradient overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Vertical grid lines */}
        <div className="relative w-full hidden md:block h-full">
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.div 
              key={i} 
              className="absolute h-full border-r border-white/50"
              style={{ left: `${(i / 24) * 100}%`, width: '1px' }}
              animate={{
                boxShadow: ['0 0 0px #4f46e5', '0 0 25px #6366f1', '0 0 5px #a5b4fc', '0 0 0px white'],
                opacity: [0.1, 0.9, 0.5, 0.1],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            ></motion.div>
          ))}
        </div>

        {/* Horizontal grid lines */}
        <div className="absolute top-0 hidden md:block left-0 w-full h-full">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div 
              key={i} 
              className="absolute w-full border-b border-white/50"
              style={{ top: `${(i / 10) * 100}%`, height: '1px' }}
              animate={{
                boxShadow: ['0 0 0px #feb700', '0 0 20px #feb700', '0 0 10px #fcd34d', '0 0 0px #feb700'],
                opacity: [0.2, 1, 0.6, 0.2],
                width: ['100%', '101%', '100%']
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.08,
                ease: "easeInOut"
              }}
            ></motion.div>
          ))}
        </div>
        {/* Gradient overlay - adjusted for better grid visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e1e1e]/30 to-[#1e1e1e]/80 w-full h-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left content */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            {/* Yellow label with arrow */}
            <div className="flex items-center mb-6">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <div className="text-[#feb700] mr-2">←</div>
                <div className="text-[#feb700] font-medium tracking-wider text-sm">NEED HELP?</div>
              </motion.div>
            </div>
            
            {/* Heading */}
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              LET'S BUILD<br />
              SOMETHING<br />
              GREAT<br />
              TOGETHER!
            </motion.h2>
            
            {/* Description */}
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 mb-8 max-w-md"
            >
              Don't wait any longer to bring your construction dreams to life. Partner with Builtup
              and experience unparalleled service and quality.
            </motion.p>
            
            {/* CTA Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#feb700] hover:bg-yellow-600 text-white font-bold py-4 px-8 flex items-center transition duration-300"
                >
                  Get Free Quote
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              </Link>
            </motion.div>
            
            {/* Curved arrow decoration */}
           
          </div>
          
          {/* Right content - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:w-1/2 flex justify-center md:justify-end"
          >
            <img 
              src={image} 
              alt="Construction worker with orange helmet" 
              className="max-w-full h-auto rounded-lg"
              
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NeedHelp;