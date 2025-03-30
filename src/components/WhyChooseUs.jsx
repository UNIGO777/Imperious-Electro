import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const reasons = [
    {
      number: '01',
      title: 'Comprehensive Services',
      description: 'Offering comprehensive construction services, from installation to maintenance, ensuring efficient, eco-friendly building solutions.'
    },
    {
      number: '02',
      title: 'Advanced Technology',
      description: 'Utilizing advanced construction technology, we provide cutting-edge solutions for maximum efficiency and savings.'
    },
    {
      number: '03',
      title: 'Transparent Communication',
      description: 'Committed to transparent communication, we ensure clarity and trust throughout your entire construction journey.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-2">
          <div className="h-0.5 w-4 bg-[#feb700] mr-2"></div>
          <span className="text-yellow-500 font-medium">WHY CHOOSE US</span>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            WHY WE'RE YOUR BEST CHOICE
          </h2>
          <a href="#contact" className="mt-4 md:mt-0 bg-[#feb700] hover:bg-yellow-600 text-white py-3 px-6 rounded-md flex items-center transition-colors">
            Contact Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        
        <div className="h-px w-full bg-gray-200 mb-12"></div>
        
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left side - Image */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-full">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Construction workers" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          {/* Right side - Content */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-12">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className='flex gap-3'><div className="text-xl text-yellow-500 font-bold mb-2">{reason.number}.</div>
                  <h3 className="text-xl font-bold mb-2">{reason.title}</h3></div>
                  <div className="h-px w-full bg-gray-200 my-4"></div>
                  <p className="text-gray-600">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;