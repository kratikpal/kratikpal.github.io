import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { resumeData } from '../data/resume';

const Education = () => {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-teal-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey in computer science and applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {resumeData.education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-teal-600 rounded-lg">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 mb-2">
                      {edu.institution}
                    </h3>
                    <p className="text-lg text-blue-400 font-semibold mb-2">{edu.degree}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-400 text-sm">
                      <div className="flex items-center mb-2 sm:mb-0">
                        <Calendar size={16} className="mr-2" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Award size={16} className="mr-2" />
                        <span className="text-green-400 font-semibold">{edu.score}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;