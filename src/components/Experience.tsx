import React from 'react';
import { Building, Calendar, ExternalLink, ChevronRight } from 'lucide-react';
import { resumeData } from '../data/resume';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-blue-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My journey as a software developer across different companies and projects
          </p>
        </div>

        <div className="space-y-8">
          {resumeData.experience.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:scale-[1.02] overflow-hidden group animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                    <div className="p-3 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg">
                      <Building className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                        {exp.company}
                      </h3>
                      <p className="text-lg text-blue-400 font-semibold">{exp.role}</p>
                      <div className="flex items-center text-gray-400 mt-2">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.duration}</span>
                        {exp.link && (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-200"
                          >
                            <ExternalLink size={16} className="mr-1" />
                            Live Project
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Regular achievements */}
                {exp.achievements && (
                  <div className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, achieveIndex) => (
                      <div key={achieveIndex} className="flex items-start space-x-3">
                        <ChevronRight className="text-green-400 mt-1 flex-shrink-0" size={16} />
                        <p className="text-gray-300 leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Project-based achievements */}
                {exp.projects && (
                  <div className="space-y-6">
                    {exp.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="border-l-2 border-blue-500/30 pl-6">
                        <h4 className="text-lg font-semibold text-blue-400 mb-3">{project.name}</h4>
                        <div className="space-y-2">
                          {project.achievements.map((achievement, achieveIndex) => (
                            <div key={achieveIndex} className="flex items-start space-x-3">
                              <ChevronRight className="text-green-400 mt-1 flex-shrink-0" size={14} />
                              <p className="text-gray-300 text-sm leading-relaxed">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;