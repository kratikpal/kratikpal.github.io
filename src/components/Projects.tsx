import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  githubLink: string;
  category: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Online Compiler',
    description: 'An online compiler supporting C++, Java, Python, and JavaScript, enabling users to compile code securely with Docker isolation.',
    image: 'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Node.js', 'React.js', 'Docker', 'REST API', 'AWS EC2', 'AWS Elastic Containers'],
    githubLink: 'https://github.com/kratikpal',
    category: ['fullstack', 'node']
  },
  {
    id: 2,
    title: 'AudioVibe',
    description: 'A music streaming app allowing users to navigate a library of 1 million+ tracks with seamless playback using Flutter and REST APIs.',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Dart', 'Flutter', 'Riverpod', 'REST API', 'Just Audio', 'Node.js', 'Express.js', 'JWT', 'MongoDB'],
    githubLink: 'https://github.com/kratikpal',
    category: ['mobile', 'flutter', 'fullstack']
  },
  {
    id: 3,
    title: 'DivineCare App',
    description: 'A multi-platform app deployed on Android, iOS, and web with secure video streaming and OAuth 2.0 authentication.',
    image: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Flutter', 'Firebase', 'Spring Boot', 'OAuth 2.0', 'Gumlet'],
    demoLink: '#',
    githubLink: 'https://github.com/kratikpal',
    category: ['mobile', 'flutter']
  },
  {
    id: 4,
    title: 'Library Management System',
    description: 'A REST API built with Spring Boot and MongoDB for library data storage with JWT authentication and automated email reminders.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Spring Boot', 'MongoDB', 'JWT', 'REST API', 'Java'],
    githubLink: 'https://github.com/kratikpal',
    category: ['backend', 'java']
  }
];

const filters = [
  { name: 'All', value: 'all' },
  { name: 'Mobile', value: 'mobile' },
  { name: 'Flutter', value: 'flutter' },
  { name: 'Fullstack', value: 'fullstack' },
  { name: 'Backend', value: 'backend' }
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <section id="projects" className="bg-surface py-20">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        
        <motion.div 
          className="flex flex-wrap gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                activeFilter === filter.value
                  ? 'bg-primary-600 text-white'
                  : 'bg-surface-light text-gray-400 hover:bg-gray-700'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-surface-light rounded-xl overflow-hidden shadow-lg"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs bg-background text-primary-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-accent-400 hover:text-accent-300 transition-colors"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-accent-400 hover:text-accent-300 transition-colors"
                  >
                    <Github size={16} /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;