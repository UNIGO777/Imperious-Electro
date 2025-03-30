import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const companyLinks = ['About Us', 'Services', 'Projects', 'Careers', 'Contact'];
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
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-yellow-500 mr-2">Imperious</span> Electro
            </h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner in construction excellence, delivering quality projects on time and within budget.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="bg-gray-800 hover:bg-[#feb700] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <span className="sr-only">{social}</span>
                  {/* Simple placeholder for social icons */}
                  <div className="w-5 h-5 flex items-center justify-center">{social[0].toUpperCase()}</div>
                </a>
              ))}
            </div>
          </motion.div>
          
          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link === 'About Us' ? '/about' : 
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
          <motion.div
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
          </motion.div>
          
          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
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
          </motion.div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} MultiUp Construction. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="text-gray-500 hover:text-yellow-500 text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-500 hover:text-yellow-500 text-sm transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="#" className="text-gray-500 hover:text-yellow-500 text-sm transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;