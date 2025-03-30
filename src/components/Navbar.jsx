import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Home, Briefcase, Info, Phone, ArrowUpRight, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Only make navbar transparent on home page
  const isHomePage = location.pathname === '/';
  const shouldBeTransparent = isHomePage && !scrolled;
  
  // Close mobile menu when scrolling
  useEffect(() => {
    if (scrolled && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [scrolled, isMobileMenuOpen]);
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <nav className={`fixed w-full z-50 px-4 transition-all duration-300 ${shouldBeTransparent ? 'bg-transparent py-4' : 'bg-white py-4'}`}>
      <div className="container mx-auto py">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className={`text-2xl font-bold ${shouldBeTransparent ? 'text-white' : 'text-gray-900'} flex items-center`}>
            Imperious <span className="text-yellow-500 mr-1 ml-2"> Electro</span> 
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <motion.ul 
            className="hidden md:flex space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, staggerChildren: 0.1 }}
          >
            {['Home', 'Services', 'About', 'Contact'].map((item, index) => (
              <motion.li 
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className={`${shouldBeTransparent ? 'text-white' : 'text-gray-900'} hover:text-yellow-500 transition-colors duration-300 font-medium`}
                >
                  {item.toUpperCase()}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50 relative"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <motion.div
              initial={false}
              animate={isMobileMenuOpen ? "open" : "closed"}
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-gray-900" />
              ) : (
                <Menu size={24} className={shouldBeTransparent ? "text-white" : "text-gray-900"} />
              )}
            </motion.div>
          </button>
          
        
            <Link 
              to="/contact"
              id='GETAQUOTELINK' 
              className="bg-[#feb700] hover:bg-yellow-600 text-black font-bold py-3 px-6 transition-all duration-300 hidden md:inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-[0.98]"
            >
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <span className='text text-lg'>GET A QUOTE</span>
                <ArrowUpRight size={20} className='arrow font-bold' />
              </motion.div>
            </Link>

            <style>
              {`
                #GETAQUOTELINK .arrow {
                  rotate: 0deg;
                  transition: rotate 0.3s ease-in-out;
                  font-weight: bold;
                }
                
                #GETAQUOTELINK:hover .arrow {
                  rotate: 45deg;
                  color: white;
                }
                #GETAQUOTELINK:hover .text {
                  color: white;
                }
                
                /* Mobile menu animation */
                .sidebar-overlay {
                  backdrop-filter: blur(4px);
                }
              `}
            </style>
        
        </div>
      </div>
      
      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div 
              className="fixed inset-0 bg-black/50 sidebar-overlay z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMobileMenu}
            />
            
            {/* Sidebar */}
            <motion.div 
              className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white z-40 shadow-xl flex flex-col"
              initial={{ x: '100%', opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-between items-center mb-8">
                  <Link 
                    to="/" 
                    className="text-xl font-bold text-gray-900 flex items-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Imperious <span className="text-yellow-500 mr-1 ml-2">Electro</span>
                  </Link>
                </div>
                
                <motion.ul className="flex-1 space-y-6">
                  {['Home', 'Services', 'About', 'Contact'].map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link 
                        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                        className="text-gray-900 hover:text-yellow-500 transition-colors duration-300 font-medium text-lg flex items-center"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item === 'Home' && <Home className="mr-3" size={18} />}
                        {item === 'Services' && <Briefcase className="mr-3" size={18} />}
                        {item === 'About' && <Info className="mr-3" size={18} />}
                        {item === 'Contact' && <Phone className="mr-3" size={18} />}
                        {item.toUpperCase()}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
                
                <Link 
                  to="/contact"
                  className="bg-[#feb700] hover:bg-yellow-600 text-black font-bold py-3 px-6 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg mt-6"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>GET A QUOTE</span>
                  <ArrowUpRight size={20} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;