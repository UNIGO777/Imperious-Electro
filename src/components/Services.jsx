import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Services = () => {
  const location = useLocation();
  const isServicesPage = location.pathname === '/services';

  const services = [
    {
      title: 'Building Construction',
      description: 'We offer quality building construction services with innovative solutions, ensuring timely completion and functional, aesthetically pleasing structures.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      title: 'General Contracting',
      description: 'We offer quality building construction services with innovative solutions, ensuring timely completion and functional, aesthetically pleasing structures.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="2"/>
          <path d="M4 12h16"/>
          <path d="M12 6v12"/>
          <path d="M2 12l2-2 2 2"/>
          <path d="M18 12l2-2 2 2"/>
        </svg>
      )
    },
    {
      title: 'New Home Construction',
      description: 'We offer quality building construction services with innovative solutions, ensuring timely completion and functional, aesthetically pleasing structures.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      )
    }
  ];

  const WrapperComponent = isServicesPage ? 'div' : motion.div;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <WrapperComponent 
            {...(!isServicesPage && {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              viewport: { once: true }
            })}
            className="mb-6 md:mb-0"
          >
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 font-bold mr-2">SERVICES</span>
              <div className="w-12 h-0.5 bg-[#feb700]"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              A FULL RANGE OF EXPERT<br />SOLUTIONS
            </h2>
          </WrapperComponent>
          
          <WrapperComponent
            {...(!isServicesPage && {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              transition: { duration: 0.5, delay: 0.2 },
              viewport: { once: true }
            })}
          >
            
          </WrapperComponent>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <WrapperComponent
              key={index}
              {...(!isServicesPage && {
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                transition: { delay: index * 0.1, duration: 0.5 },
                viewport: { once: true }
              })}
              className="bg-white p-8 border border-gray-200 hover:border-yellow-500 transition-all duration-300"
            >
              <div className="mb-6 text-yellow-500">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <motion.div
                whileHover={{ x: 5 }}
                className="text-yellow-500 font-semibold flex items-center"
              >
               
              </motion.div>
            </WrapperComponent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;