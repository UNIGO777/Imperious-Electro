import { motion } from 'framer-motion';

// Import components
import Hero from '../components/Hero';
import TextSlider from '../components/TextSlider';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';

import DidYouKnow365 from '../components/DidYouKnow365';
import TestimonialsSlider from '../components/TestimonialsSlider';
import WhatWeDo from '../components/WhatWeDo';
import FAQAccordion from '../components/FAQAccordion';
import NeedHelp from '../components/NeedHelp';

import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <TextSlider />
      <DidYouKnow365 />
      <TestimonialsSlider />
      <WhatWeDo />
      <FAQAccordion />
      {/* <Projects /> */}
      
      <NeedHelp />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;