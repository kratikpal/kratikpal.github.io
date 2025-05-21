import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold gradient-text mb-1">Portfolio</h3>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-surface-light rounded-full flex items-center justify-center text-gray-400 hover:text-accent-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-surface-light rounded-full flex items-center justify-center text-gray-400 hover:text-accent-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:example@example.com"
              className="w-10 h-10 bg-surface-light rounded-full flex items-center justify-center text-gray-400 hover:text-accent-400 transition-colors"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-surface-light rounded-full flex items-center justify-center text-gray-400 hover:text-accent-400 transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;