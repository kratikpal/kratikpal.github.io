import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Palette, GraduationCap } from 'lucide-react';

const skills = [
  'JavaScript (ES6+)',
  'TypeScript',
  'React',
  'Next.js',
  'CSS & SCSS',
  'Tailwind CSS',
  'Node.js',
  'Express',
  'MongoDB',
  'SQL',
  'Git',
  'Jest'
];

const About: React.FC = () => {
  return (
    <section id="about" className="bg-surface py-20">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-300 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo ligula in nunc fermentum, quis elementum purus tincidunt. 
              Nullam sed scelerisque purus, non faucibus eros. Etiam facilisis euismod nulla, ut condimentum nibh suscipit id.
            </p>
            
            <p className="text-gray-300 mb-6">
              Cras pharetra dui eu placerat venenatis. Sed vel metus eros. Donec congue mauris massa, id pulvinar augue vehicula a. 
              Curabitur ac lacus a tortor semper maximus. Ut consectetur sem ac elementum lobortis.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Code size={20} className="text-accent-400" />
                <span className="text-gray-300">Web Development</span>
              </div>
              <div className="flex items-center gap-3">
                <Palette size={20} className="text-accent-400" />
                <span className="text-gray-300">UI/UX Design</span>
              </div>
              <div className="flex items-center gap-3">
                <Lightbulb size={20} className="text-accent-400" />
                <span className="text-gray-300">Problem Solving</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap size={20} className="text-accent-400" />
                <span className="text-gray-300">Continuous Learning</span>
              </div>
            </div>

            <p className="text-gray-300">
              When I'm not coding, you'll find me hiking, reading, or exploring new coffee shops in the city.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4 text-gray-200">
              Skills & Technologies
            </h3>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-400"></div>
                  <span className="text-gray-300 text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;