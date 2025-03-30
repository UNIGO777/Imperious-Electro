import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQAccordion = () => {
  // State to track which FAQ is open
  const [activeIndex, setActiveIndex] = useState(2); // Default to the third item open (index 2)

  // FAQ data
  const faqItems = [
    {
      question: "What types of projects do you specialize in?",
      answer: "We specialize in residential, commercial, and industrial electrical projects. Our expertise includes new installations, renovations, upgrades, smart home systems, energy-efficient solutions, and emergency electrical services."
    },
    {
      question: "How do I start a project with your company?",
      answer: "Starting a project with us is simple. Contact us through our website, phone, or email to schedule an initial consultation. We'll discuss your needs, provide a detailed quote, and once approved, we'll schedule the work and keep you informed throughout the entire process."
    },
    {
      question: "Do you offer a free, no obligation quotation?",
      answer: "Our post-construction services gives you peace of mind knowing that we are still here for you even after. We provide comprehensive support after project completion, including maintenance plans, warranty service, and quick response to any issues that may arise."
    },
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of electrical services including installation, repair, maintenance, inspections, upgrades, emergency services, energy efficiency solutions, lighting design, smart home integration, and electrical system planning for new construction."
    },
    {
      question: "How do I start a project with your company?",
      answer: "To begin a project, simply contact our team through our website form, call our office, or send us an email. We'll schedule an initial consultation to understand your requirements, provide expert recommendations, and develop a detailed project plan tailored to your needs."
    }
  ];

  // Toggle function for opening/closing FAQ items
  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Yellow label */}
          <div className="mb-6 md:mb-8">
            <div className="flex items-center mb-4">
              <div className="h-0.5 w-6 bg-[#feb700] mr-2"></div>
              <span className="text-yellow-500 font-medium tracking-wider text-xs md:text-sm">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
          
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
              COMMON QUESTIONS FROM OUR CLIENTS
            </h2>
          </div>
          
          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className={`w-full py-4 md:py-5 px-4 md:px-6 flex justify-between items-center text-left focus:outline-none transition-colors duration-200 ${
                    activeIndex === index ? 'text-black font-bold bg-gray-50' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-base md:text-lg font-medium pr-4">{item.question}</span>
                  <span className={`flex-shrink-0 flex items-center justify-center w-6 h-6 ${
                    activeIndex === index ? 'text-[#feb700]' : 'text-gray-400'
                  }`}>
                    {activeIndex === index ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    )}
                  </span>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-gray-50"
                    >
                      <div className="p-4 md:p-6 text-sm md:text-base text-gray-700">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;