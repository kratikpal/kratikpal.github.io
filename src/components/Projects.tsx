import React from 'react';
import { Github, ExternalLink, Code, Database, Smartphone, Brain, Globe, Server } from 'lucide-react';
import { resumeData } from '../data/resume';

const Projects = () => {
  const getProjectIcon = (technologies: string[]) => {
    if (technologies.some(tech => tech.toLowerCase().includes('flutter') || tech.toLowerCase().includes('dart'))) {
      return Smartphone;
    } else if (technologies.some(tech => tech.toLowerCase().includes('python') || tech.toLowerCase().includes('scikit'))) {
      return Brain;
    } else if (technologies.some(tech => tech.toLowerCase().includes('spring boot') || tech.toLowerCase().includes('java'))) {
      return Server;
    } else if (technologies.some(tech => tech.toLowerCase().includes('database') || tech.toLowerCase().includes('mongodb'))) {
      return Database;
    } else if (technologies.some(tech => tech.toLowerCase().includes('azure') || tech.toLowerCase().includes('aws'))) {
      return Globe;
    }
    return Code;
  };

  const getProjectColor = (index: number) => {
    const colors = [
      'from-blue-500 to-purple-600',
      'from-green-500 to-teal-600', 
      'from-orange-500 to-red-600',
      'from-purple-500 to-pink-600',
      'from-teal-500 to-blue-600',
      'from-red-500 to-orange-600'
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="projects" className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-orange-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-orange-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing some of my recent work that demonstrates my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {resumeData.projects.map((project, index) => {
            const IconComponent = getProjectIcon(project.technologies);
            const gradientColor = getProjectColor(index);
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] group overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 bg-gradient-to-br ${gradientColor} rounded-lg`}>
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                          {project.name}
                        </h3>
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-200 text-sm mt-1"
                          >
                            <Globe size={14} className="mr-1" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-700/50 rounded-lg text-gray-400 hover:text-white hover:bg-gray-600/50 transition-all duration-200 hover:scale-110"
                      >
                        <Github size={20} />
                      </a>
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-700/50 rounded-lg text-gray-400 hover:text-green-400 hover:bg-gray-600/50 transition-all duration-200 hover:scale-110"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    {project.description.map((desc, descIndex) => (
                      <div key={descIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-700 pt-6">
                    <p className="text-sm text-gray-400 mb-3">Technologies Used:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-orange-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30 hover:border-purple-400/50 transition-all duration-200 hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${gradientColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href={resumeData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
          >
            <Github size={20} />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;