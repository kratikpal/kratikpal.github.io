import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would be replaced with actual form submission logic
    alert('Form submitted! In a real app, this would send your message.');
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            <p className="text-gray-300 mb-8">
              I'm currently available for freelance work or full-time positions. 
              If you have a project that needs help or a position that matches my skills, 
              feel free to reach out.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center text-primary-200">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:example@example.com" className="text-accent-400 hover:text-accent-300 transition-colors">
                    example@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center text-primary-200">
                  <Linkedin size={18} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-accent-400 hover:text-accent-300 transition-colors">
                    linkedin.com/in/username
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center text-primary-200">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-surface p-6 rounded-xl">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 bg-surface-light border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 bg-surface-light border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-300 mb-2 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 bg-surface-light border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;