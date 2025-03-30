import { motion } from 'framer-motion';
import Services from '../components/Services';
import Footer from '../components/Footer';

const ServicesPage = () => {
  return (
    <div className="min-h-screen pt-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 mb-12"
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Our Services
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg p-6 mb-8 text-gray-800"
        >
          <p className="mb-4 text-lg">
            At Imperious Electro, we provide a comprehensive range of electrical services designed to meet all your needs. 
            Our team of experienced professionals is committed to delivering high-quality solutions with exceptional customer service.
          </p>
          <p className="text-lg">
            Whether you need residential, commercial, or industrial electrical services, we have the expertise and resources to handle projects of any size and complexity.
          </p>
        </motion.div>
      </motion.div>
      
      <Services />
      <Footer />
    </div>
  );
};

export default ServicesPage;