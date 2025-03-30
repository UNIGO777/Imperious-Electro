import { motion } from 'framer-motion';

const WhatWeDo = () => {
  const services = [
    {
      title: 'Building Construction',
      description: 'Expert building construction And services, delivering quality.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 22h20"/>
          <path d="M3 10v12"/>
          <path d="M6 10v12"/>
          <path d="M11 10v12"/>
          <path d="M16 10v12"/>
          <path d="M21 10v12"/>
          <path d="M3 6l9-4 9 4"/>
          <path d="M14 6v4"/>
          <path d="M10 6v4"/>
        </svg>
      )
    },
    {
      title: 'Painting And Coating',
      description: 'Professional painting and coating services for durable, flawless.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
          <path d="M13 9l3 3m-3-3l-7 7m7-7l-3-3m3 3l7 7"/>
          <path d="M9 15l-3-3 7-7 3 3-7 7z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="flex flex-col md:flex-row">
      {/* Left side with yellow background */}
      <div className="w-full md:w-1/2 bg-[#ffb700] py-16 px-8 md:px-12 lg:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-6">
            <div className="w-8 h-0.5 bg-white mr-3"></div>
            <span className="text-white font-bold tracking-wider text-sm">WHAT WE DO</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 tracking-tight leading-tight">
            GET PREMIUM<br />INDUSTRIAL<br />SERVICES
          </h2>
          
          <p className="text-black mb-12 max-w-lg">
            Get premium industrial services tailored to your needs, offering expert solutions in maintenance, engineering, and safety. Our team ensures top-quality performance, efficiency, and reliability for all your industrial operations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-black"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-black/80">{service.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-6 py-3 flex items-center font-semibold"
          >
            Contact Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
      
      {/* Right side with image */}
      <div className="w-full md:w-1/2 bg-blue-100 min-h-[500px] relative">
        <img 
          src="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1534&q=80" 
          alt="Construction professional with yellow helmet" 
          className="w-full h-full object-cover absolute inset-0"
        />
      </div>
    </section>
  );
};

export default WhatWeDo;