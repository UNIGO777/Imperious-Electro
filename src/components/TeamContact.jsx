import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Users, Award, Calendar, Send, CheckCircle } from 'lucide-react';

const TeamContact = () => {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';
  
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });
    
    // Add the access key
    form.append('access_key', '940e7523-e120-4451-86de-35a0c08f6f3e');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: form,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
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

  const teamMembers = [
    {
      name: 'John Smith',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      email: 'john@imperiouselectro.com',
      phone: '+91 88150 11111'
    },
    {
      name: 'Sarah Johnson',
      position: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
      email: 'sarah@imperiouselectro.com',
      phone: '+1 (555) 234-5678'
    },
    {
      name: 'Michael Chen',
      position: 'Lead Engineer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      email: 'michael@imperiouselectro.com',
      phone: '+1 (555) 345-6789'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Customer Relations',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80',
      email: 'emily@imperiouselectro.com',
      phone: '+1 (555) 456-7890'
    }
  ];

  const companyInfo = [
    {
      title: 'Phone',
      content: '+91 88150 11111',
      icon: <Phone className="w-6 h-6 text-[#feb700] group-hover:text-white transition-colors duration-300" />
    },
    {
      title: 'Email',
      content: 'imperiouselectro@gmail.com',
      icon: <Mail className="w-6 h-6 text-[#feb700] group-hover:text-white transition-colors duration-300" />
    },
    {
      title: 'Address',
      content: '60 rajharsh colony kolar road bhopal.',
      icon: <MapPin className="w-6 h-6 text-[#feb700] group-hover:text-white transition-colors duration-300" />
    },
    {
      title: 'Working Hours',
      content: 'Mon-Fri: 8am - 6pm',
      icon: <Clock className="w-6 h-6 text-[#feb700] group-hover:text-white transition-colors duration-300" />
    },
    {
      title: 'Experience',
      content: '25+ Years in Industry',
      icon: <Award className="w-6 h-6 text-[#feb700] group-hover:text-white transition-colors duration-300" />
    },
    {
      title: 'Established',
      content: 'Since 1998',
      icon: <Calendar className="w-6 h-6 text-[#feb700] group-hover:text-white transition-colors duration-300" />
    }
  ];

  const ContentWrapper = isContactPage ? 'div' : 'motion.div';
  const ButtonWrapper = isContactPage ? 'button' : 'motion.button';

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
       
        {/* Team Members */}
        
        {/* Company History & Mission */}
        <div
          className="mb-16"
        >
          <div className="flex items-center mb-4">
            <div className="w-6 h-0.5 bg-[#feb700] mr-2"></div>
            <span className="text-yellow-500 font-medium">OUR STORY</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            OUR JOURNEY OF EXCELLENCE
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our History</h3>
              <p className="text-gray-600 mb-4">
                Founded in 1998, Imperious Electro began as a small electrical contracting company with a vision to provide exceptional service and innovative solutions. Over the years, we've grown into a full-service construction and engineering firm, expanding our expertise while maintaining our commitment to quality and customer satisfaction.
              </p>
              <p className="text-gray-600">
                Through economic ups and downs, technological advancements, and industry changes, we've adapted and evolved, always staying true to our core values of integrity, excellence, and innovation.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                At Imperious Electro, our mission is to deliver exceptional construction and engineering services that exceed client expectations, while maintaining the highest standards of safety, quality, and sustainability.
              </p>
              <p className="text-gray-600">
                We're committed to fostering a culture of innovation, continuous improvement, and professional development, ensuring that our team is always equipped with the knowledge and skills needed to tackle the most challenging projects.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side - Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            {/* Form with W3Forms integration */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input 
                type="hidden" 
                name="access_key" 
                value="940e7523-e120-4451-86de-35a0c08f6f3e"
              />
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white focus:bg-white"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white focus:bg-white"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white focus:bg-white"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              <button
                className={`bg-[#feb700] ${isSubmitting ? 'opacity-70' : 'hover:bg-yellow-600'} text-white font-bold py-3 px-6 rounded-md transition duration-300 w-full flex items-center justify-center gap-2`}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span>Sending...</span>
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
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
              
              {/* Error message */}
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
          
          {/* Right side - Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {companyInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#feb700] hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-50 mb-4 group-hover:bg-[#feb700] transition-colors duration-300">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{info.title}</h3>
                  <p className="text-gray-600">{info.content}</p>
                </div>
              ))}
            </div>
            
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamContact;