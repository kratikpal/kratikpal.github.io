import React from 'react';
import { Code2, Database, Smartphone, Wrench, Users, Brain } from 'lucide-react';
import { resumeData } from '../data/resume';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      color: 'blue',
      skills: resumeData.skills['Programming Languages']
    },
    {
      title: 'Technologies/Frameworks',
      icon: Wrench,
      color: 'purple',
      skills: resumeData.skills['Technologies/Frameworks']
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'green',
      skills: resumeData.skills['Databases']
    },
    {
      title: 'Domains',
      icon: Smartphone,
      color: 'orange',
      skills: resumeData.skills['Domains']
    },
    {
      title: 'Tools',
      icon: Wrench,
      color: 'red',
      skills: resumeData.skills['Tools']
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: 'teal',
      skills: resumeData.skills['Soft Skills']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 border-blue-500/50 hover:border-blue-400',
      purple: 'from-purple-500 to-purple-600 border-purple-500/50 hover:border-purple-400',
      green: 'from-green-500 to-green-600 border-green-500/50 hover:border-green-400',
      orange: 'from-orange-500 to-orange-600 border-orange-500/50 hover:border-orange-400',
      red: 'from-red-500 to-red-600 border-red-500/50 hover:border-red-400',
      teal: 'from-teal-500 to-teal-600 border-teal-500/50 hover:border-teal-400'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and skills I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className={`bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:${getColorClasses(category.color).split(' ')[2]} transition-all duration-300 hover:scale-105 hover:shadow-lg group animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${getColorClasses(category.color).split(' ')[0]} ${getColorClasses(category.color).split(' ')[1]} mr-4`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600 hover:border-blue-500/50 hover:text-white transition-all duration-200 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Animation */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700">
            <Brain className="text-blue-400" size={20} />
            <span className="text-gray-300">Always learning, always growing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;