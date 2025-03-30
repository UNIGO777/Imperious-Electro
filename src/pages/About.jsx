import { motion } from 'framer-motion';
import AboutUs from '../components/AboutUs';
import TeamContact from '../components/TeamContact';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <AboutUs />
      <TeamContact />
      <Footer />
    </div>
  );
};

export default About;