import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      
      <div className="section-container z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-lg md:text-xl text-accent-400 font-medium mb-4">
              Hello, I'm
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="gradient-text">Your Name</span>
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-300 mb-6">
              Web Developer & Designer
            </h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg text-gray-400 mb-8 max-w-2xl">
              I build exceptional and accessible digital experiences for the web.
              Specializing in modern frontend technologies and creative solutions.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#"
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-all duration-300 flex items-center gap-2"
            >
              <Mail size={18} />
              Contact Me
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-surface hover:bg-surface-light border border-gray-700 text-white rounded-md transition-all duration-300 flex items-center gap-2"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-surface hover:bg-surface-light border border-gray-700 text-white rounded-md transition-all duration-300 flex items-center gap-2"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer text-gray-400 hover:text-accent-400 transition-colors duration-300"
        >
          <ArrowDown size={24} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;