import { motion } from 'framer-motion';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const ProjectsPage = () => {
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
          Our Projects
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg p-6 mb-8 text-gray-800"
        >
          <p className="mb-4 text-lg">
            At Imperious Electro, we take pride in our portfolio of successful electrical projects delivered across various sectors.
            Our team has worked on residential, commercial, and industrial projects, delivering high-quality solutions that meet our clients' needs.
          </p>
          <p className="text-lg">
            Browse through our featured projects below to see examples of our work and the quality we deliver on every project we undertake.
          </p>
        </motion.div>
      </motion.div>
      
      <Projects />
      <Footer />
    </div>
  );
};

export default ProjectsPage;