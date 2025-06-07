import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { resumeData } from '../data/resume';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-purple-900/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Kratikpal Singh Dodiya
            </div>
            <p className="text-gray-400 leading-relaxed">
              Software Engineer passionate about creating innovative solutions and building high-performance applications.
            </p>
            <div className="flex space-x-4">
              <a
                href={resumeData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-200 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${resumeData.personal.email}`}
                className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-green-400 hover:bg-gray-700 transition-all duration-200 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="text-gray-500">Email:</span>{' '}
                <a 
                  href={`mailto:${resumeData.personal.email}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {resumeData.personal.email}
                </a>
              </p>
              <p className="text-gray-400">
                <span className="text-gray-500">Phone:</span>{' '}
                <a 
                  href={`tel:${resumeData.personal.phone}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {resumeData.personal.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Kratikpal Singh Dodiya. All rights reserved.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="text-red-500 mx-2" size={16} />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;