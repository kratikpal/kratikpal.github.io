import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Software Developer Intern',
    company: 'Prismberry Technologies',
    location: 'Remote',
    period: 'February 2025 - Present',
    description: [
      'Developed a REST API using Spring Boot and MongoDB to store data for library management systems',
      'Used Spring Security with JWT tokens to implement token-based and role-based authentication',
      'Used a cron job to send reminder emails to users to return their books before the due date'
    ]
  },
  {
    title: 'Flutter Developer Intern',
    company: 'Divine Care',
    location: 'Remote',
    period: 'October 2024 - February 2025',
    description: [
      'Developed DivineCare app deployed on Android, iOS and web, resulting in a seamless multi-platform experience for users',
      'Integrated Gumlet for secure video streaming alongside YouTube for a diverse range of content',
      'Implemented OAuth 2.0 for Google login using Firebase and Spring Boot to enable secure authentication for users'
    ]
  },
  {
    title: 'Flutter Developer Intern',
    company: 'Neonflake Enterprises',
    location: 'Remote',
    period: 'June 2024 - October 2024',
    description: [
      'Worked on a WhatsApp keyword tracking app using Flutter, enabling users to track specific keywords',
      'Integrated Razor pay for handling in-app purchases, resulting in increased revenue by 30%',
      'Implemented a robust KYC verification system for Cheminova Territory Manager App',
      'Implemented an attendance system, allowing the organization to keep track of employee attendance'
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