import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import './ContactForm.css';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [focused, setFocused] = useState({
    name: false,
    email: false,
    phone: false,
    message: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleFocus = (name) => {
    setFocused(prev => ({
      ...prev,
      [name]: true
    }));
  };
  
  const handleBlur = (name) => {
    setFocused(prev => ({
      ...prev,
      [name]: formState[name].trim() !== ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    console.log('Form submitted:', formState);
    alert('Thanks for your message! This is a demo, so no message was actually sent.');
    setFormState({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left side - Content */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              CONTACT OUR ENGINEERING SERVICE PROJECTS
            </h2>
            <div className="w-20 h-1 bg-[#feb700] mb-8"></div>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#feb700] hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-50 mb-4 group-hover:bg-[#feb700] transition-colors duration-300 contact-icon">
                  <Phone className="w-6 h-6 text-[#feb700] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </motion.div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#feb700] hover:shadow-lg transition-shadow duration-300 group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-50 mb-4 group-hover:bg-[#feb700] transition-colors duration-300 contact-icon">
                  <Mail className="w-6 h-6 text-[#feb700] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Email</h3>
                <p className="text-gray-600">info@multiup.com</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#feb700] hover:shadow-lg transition-shadow duration-300 group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-50 mb-4 group-hover:bg-[#feb700] transition-colors duration-300 contact-icon">
                  <MapPin className="w-6 h-6 text-[#feb700] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Address</h3>
                <p className="text-gray-600">123 Construction Ave, New York, NY</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#feb700] hover:shadow-lg transition-shadow duration-300 group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-50 mb-4 group-hover:bg-[#feb700] transition-colors duration-300 contact-icon">
                  <Clock className="w-6 h-6 text-[#feb700] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Working Hours</h3>
                <p className="text-gray-600">Mon-Fri: 8am - 6pm</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right side - Form */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-10 rounded-xl  border border-gray-100  transition-all duration-500">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Get In Touch</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={() => handleBlur('name')}
                      className="peer w-full px-4 pt-5 pb-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#feb700] focus:ring-2 focus:ring-[#feb700] focus:ring-opacity-50 shadow-sm transition-all duration-300 hover:border-gray-300 bg-gray-50 hover:bg-white focus:bg-white"
                      required
                    />
                    <label 
                      htmlFor="name" 
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${focused.name || formState.name ? 'text-xs text-[#feb700] top-2' : 'text-gray-500 top-4'}`}
                    >
                      Your Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={() => handleBlur('email')}
                      className="peer w-full px-4 pt-5 pb-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#feb700] focus:ring-2 focus:ring-[#feb700] focus:ring-opacity-50 shadow-sm transition-all duration-300 hover:border-gray-300 bg-gray-50 hover:bg-white focus:bg-white"
                      required
                    />
                    <label 
                      htmlFor="email" 
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${focused.email || formState.email ? 'text-xs text-[#feb700] top-2' : 'text-gray-500 top-4'}`}
                    >
                      Your Email
                    </label>
                  </div>
                </div>
                
                <div className="mb-6 relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    onFocus={() => handleFocus('phone')}
                    onBlur={() => handleBlur('phone')}
                    className="peer w-full px-4 pt-5 pb-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#feb700] focus:ring-1 focus:ring-[#feb700] shadow-sm transition-all duration-300 bg-gray-50 hover:bg-white focus:bg-white"
                  />
                  <label 
                    htmlFor="phone" 
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${focused.phone || formState.phone ? 'text-xs text-[#feb700] top-2' : 'text-gray-500 top-4'}`}
                  >
                    Phone Number
                  </label>
                </div>
                
                <div className="mb-8 relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={() => handleBlur('message')}
                    rows="4"
                    className="peer w-full px-4 pt-5 pb-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#feb700] focus:ring-1 focus:ring-[#feb700] shadow-sm transition-all duration-300 resize-none bg-gray-50 hover:bg-white focus:bg-white"
                    required
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${focused.message || formState.message ? 'text-xs text-[#feb700] top-2' : 'text-gray-500 top-4'}`}
                  >
                    Your Message
                  </label>
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(254, 183, 0, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#feb700] hover:bg-yellow-600 text-white font-bold py-4 px-6 rounded-lg transition duration-300 shadow-md flex items-center justify-center gap-2"
                >
                  <span>SEND MESSAGE</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;