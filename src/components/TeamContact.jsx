import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Users, Award, Calendar } from 'lucide-react';

const TeamContact = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      email: 'john@imperiouselectro.com',
      phone: '+1 (555) 123-4567'
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
      content: '+1 (555) 123-4567',
      icon: <Phone className="w-6 h-6 text-[#feb700] group-hover:text-white transition-colors duration-300" />
    },
    {
      title: 'Email',
      content: 'info@imperiouselectro.com',
      icon: <Mail className="w-6 h-6 text-[#feb700] group-hover:text-white transition-colors duration-300" />
    },
    {
      title: 'Address',
      content: '123 Construction Ave, New York, NY',
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

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
       

        {/* Team Members */}
        

        {/* Company History & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
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
        </motion.div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#feb700] hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 w-full"
                type="submit"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
          
          {/* Right side - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
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
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-[#feb700] hover:bg-yellow-600 text-white p-3 rounded-full transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-[#feb700] hover:bg-yellow-600 text-white p-3 rounded-full transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-[#feb700] hover:bg-yellow-600 text-white p-3 rounded-full transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="bg-[#feb700] hover:bg-yellow-600 text-white p-3 rounded-full transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamContact;