import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Web Developer',
    company: 'Company Name 1',
    location: 'New York, NY',
    period: 'Jan 2023 - Present',
    description: [
      'Led frontend development for multiple high-profile projects, increasing user engagement by 40%',
      'Architected and implemented scalable React applications using TypeScript and Next.js',
      'Mentored junior developers and conducted code reviews to ensure best practices',
      'Collaborated with design team to implement responsive, accessible interfaces'
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'Company Name 2',
    location: 'San Francisco, CA',
    period: 'Jun 2020 - Dec 2022',
    description: [
      'Developed and maintained responsive web applications using React, Redux, and modern JavaScript',
      'Implemented UI components using Tailwind CSS and Styled Components',
      'Collaborated with backend developers to integrate RESTful APIs',
      'Improved page load performance by 30% through code optimization'
    ]
  },
  {
    title: 'Web Developer Intern',
    company: 'Company Name 3',
    location: 'Remote',
    period: 'Jan 2020 - May 2020',
    description: [
      'Assisted in developing web applications using HTML, CSS, and JavaScript',
      'Collaborated with senior developers to implement new features',
      'Performed code reviews and bug fixes',
      'Participated in daily stand-up meetings and sprint planning'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-12 md:gap-4 items-start">
                <div className="md:col-span-3 text-gray-400 mb-2 md:mb-0 flex flex-col space-y-1">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2 text-accent-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2 text-accent-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <div className="md:col-span-9">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-primary-400 font-medium mb-4">{exp.company}</p>
                  
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Timeline indicator */}
              <div className="absolute left-0 top-1 w-4 h-4 bg-primary-500 rounded-full md:hidden"></div>
              {index < experiences.length - 1 && (
                <div className="absolute left-2 top-5 h-full w-0.5 bg-gray-700 md:hidden"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;