import { useState } from 'react';
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const formData = new FormData();
    formData.append('access_key', '940e7523-e120-4451-86de-35a0c08f6f3e');
    Object.entries(formState).forEach(([key, value]) => {
      formData.append(key, value);
    });
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', phone: '', message: '' });
        setFocused({
          name: false,
          email: false,
          phone: false,
          message: false
        });
      } else {
        setSubmitStatus('error');
        console.error('Form submission error:', data);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left side - Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              CONTACT OUR ENGINEERING SERVICE PROJECTS
            </h2>
            <div className="w-20 h-1 bg-[#feb700] mb-8"></div>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#feb700] hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-50 mb-4 group-hover:bg-[#feb700] transition-colors duration-300 contact-icon">
                  <Phone className="w-6 h-6 text-[#feb700] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Phone</h3>
                <p className="text-gray-600">+91 88150 11111</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#feb700] hover:shadow-lg transition-shadow duration-300 group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-50 mb-4 group-hover:bg-[#feb700] transition-colors duration-300 contact-icon">
                  <Mail className="w-6 h-6 text-[#feb700] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Email</h3>
                <p className="text-gray-600 break-words">imperiouselectro@gmail.com</p>
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
          </div>
          
          {/* Right side - Form */}
          <div className="md:w-1/2">
            <div className="bg-white p-10 rounded-xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Get In Touch</h3>
              <form onSubmit={handleSubmit}>
                <input 
                  type="hidden" 
                  name="access_key" 
                  value="940e7523-e120-4451-86de-35a0c08f6f3e"
                />
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
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#feb700] ${isSubmitting ? 'opacity-70' : 'hover:bg-yellow-600'} text-white font-bold py-4 px-6 rounded-lg transition duration-300 shadow-md flex items-center justify-center gap-2`}
                >
                  {isSubmitting ? (
                    <>
                      <span>SENDING...</span>
                      <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                    </>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
                
                {/* Success message */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>Oops! Something went wrong. Please try again later.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;