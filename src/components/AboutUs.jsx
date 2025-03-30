import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const AboutUs = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true });
  const isImageInView = useInView(imageRef, { once: true });

  useEffect(() => {
    // Ensure framer-motion animations are properly initialized
    const init = async () => {
      await document.fonts.ready;
    };
    init();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, x: -30 }}
            animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <div className="flex items-center mb-4">
              <div className="w-6 h-0.5 bg-[#feb700] mr-2"></div>
              <span className="text-yellow-500 font-medium">ABOUT US</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              YOUR TRUSTED PARTNER IN CONSTRUCTION EXCELLENCE
            </h2>
            
            <p className="text-gray-600 mb-8">
              We specialize in a wide range of construction services, including
              residential, commercial, and industrial projects. From initial design to final
              inspection, we work closely with our clients to understand their unique
              needs and vision.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-[#feb700] p-1 rounded-sm mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Unmatched Expertise With Decades Of Experience</p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#feb700] p-1 rounded-sm mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Commitment To Quality And Precision</p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#feb700] p-1 rounded-sm mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Sustainable And Responsible Building Practices</p>
              </div>
            </div>
            
            <motion.button
              initial={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#feb700] hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 inline-flex items-center transition duration-300"
            >
              About Us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </motion.div>
          
          {/* Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
              alt="Modern architectural building" 
              className="w-full h-auto max-h-[60vh] rounded-lg shadow-lg"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;