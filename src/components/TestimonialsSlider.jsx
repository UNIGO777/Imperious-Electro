import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const TestimonialsSlider = () => {
  // State to track the current testimonial index
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Array of testimonials
  const testimonials = [
    {
      quote: "We had an exceptional experience with their building construction services. The team was professional, timely, and attentive to our needs, ensuring high-quality craftsmanship throughout the project. Communication was clear, and they exceeded our expectations with the final result. Highly recommend for anyone seeking reliable and skilled construction services.",
      name: "Ronald Richards",
      position: "Construction CEO",
      rating: 4.8
    },
    {
      quote: "Their attention to detail and commitment to quality is unmatched. The project was completed on time and within budget, and the results exceeded our expectations. I would highly recommend them to anyone looking for top-tier construction services.",
      name: "Sarah Johnson",
      position: "Real Estate Developer",
      rating: 4.9
    },
    {
      quote: "Working with this team was a pleasure from start to finish. They were responsive, professional, and delivered exceptional quality. Our new office building has received countless compliments, and we couldn't be happier with the outcome.",
      name: "Michael Chen",
      position: "Business Owner",
      rating: 4.7
    }
  ];
  
  // Animation variants for testimonial slides
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };
  
  // Calculate the maximum height of testimonials to prevent height changes during animation
  const getMaxQuoteHeight = () => {
    return Math.max(...testimonials.map(t => t.quote.length));
  };
  
  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  // Generate star rating display
  const renderStars = (rating) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 ${i < Math.floor(rating) ? 'text-yellow-500' : 'text-gray-300'}`} 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-black font-bold text-xl">{rating}</span>
      </div>
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Yellow label */}
        <div className="flex items-center mb-4">
          <div className="h-0.5 w-6 bg-[#feb700] mr-2"></div>
          <span className="text-yellow-500 font-medium tracking-wider text-sm">TESTIMONIALS</span>
        </div>
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 max-w-3xl">
          WE BUILD CUSTOMER TRUST AND LOYALTY
        </h2>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-6 md:mb-0">
            {renderStars(testimonials[currentIndex].rating)}
          </div>
          <div className="text-gray-600">
            Trusted By 500+ Companies
          </div>
        </div>
        
        {/* Testimonial Slider */}
        <div className="relative overflow-hidden" style={{ minHeight: '400px', height: 'auto' }}>
          <AnimatePresence mode="wait" initial={false} custom={1}>
            <motion.div
              key={currentIndex}
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="bg-white absolute w-full min-h-[400px] md:min-h-[300px]"
            >
              <div className="max-w-4xl">
                <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                <div>
                  <h4 className="font-bold text-xl">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Pagination dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-[#feb700]' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;