import React from 'react';
import { User, Award, Target } from 'lucide-react';
import { resumeData } from '../data/resume';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <User className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Professional Summary</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {resumeData.summary}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-3">
                  <Award className="text-purple-400 mr-3" size={20} />
                  <h4 className="text-lg font-semibold text-white">Experience</h4>
                </div>
                <p className="text-gray-300">2+ Years</p>
                <p className="text-sm text-gray-400">Professional Development</p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-3">
                  <Target className="text-green-400 mr-3" size={20} />
                  <h4 className="text-lg font-semibold text-white">Focus</h4>
                </div>
                <p className="text-gray-300">Full Stack</p>
                <p className="text-sm text-gray-400">Mobile & Web Development</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">KD</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{resumeData.personal.name}</h3>
                <p className="text-blue-400 mb-4">{resumeData.personal.title}</p>
                
                <div className="space-y-2 text-gray-300">
                  <p className="flex items-center justify-center">
                    <span className="text-gray-400 mr-2">📧</span>
                    {resumeData.personal.email}
                  </p>
                  <p className="flex items-center justify-center">
                    <span className="text-gray-400 mr-2">📞</span>
                    {resumeData.personal.phone}
                  </p>
                </div>
              </div>
            </div>

            {/* Floating elements for visual interest */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-20 animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-30 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;