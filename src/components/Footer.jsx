import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const companyLinks = ['Home','About Us', 'Services',  'Contact'];
  const servicesLinks = ['Building Construction', 'House Renovation', 'Interior Design', 'Project Planning', 'Architecture'];
  const supportLinks = ['FAQ', 'Terms & Conditions', 'Privacy Policy', 'Support Center', 'Sitemap'];
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6  flex items-center flex-wrap">
              <span className="text-yellow-500 mr-2">Imperious</span>
              <span className="whitespace-normal">Electro and Infratech private limited</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner in construction excellence, delivering quality projects on time and within budget.
            </p>
            
          </motion.div>
          
          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className='md:col-span-3 flex flex-col  md:items-end md:px-20'
          >
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={
                      link === 'Home' ? '/' : 
                      link === 'About Us' ? '/about' : 
                       link === 'Services' ? '/services' : 
                       link === 'Projects' ? '/projects' : 
                       link === 'Contact' ? '/contact' : 
                       '/'} 
                    className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Services Links */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {servicesLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to="#" 
                    className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div> */}
          
          {/* Support Links */}
          
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} Imperious electro and Infratech private limited. All rights reserved.
            </p>
            <div className="flex ">
            Developed by <a href="https://naman-web.netlify.app" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-600 ml-2 mr-2">Naman Jain</a> from<a href="https://nxt-gen-digitals.vercel.app" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-600 ml-2">NxtGenDigitals</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;