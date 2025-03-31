import { motion } from 'framer-motion';
import { useState } from 'react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import TeamContact from '../components/TeamContact';



const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    console.log('Form submitted:', formState);
    alert('Thanks for your message! This is a demo, so no message was actually sent.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <>
    <div className=" mx-auto pt-20  min-h-screen flex flex-col items-center justify-center">
    <TeamContact />
    </div>
      <Footer/></>
  );
};

export default Contact;