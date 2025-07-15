import React from 'react';
import { Award, Users, Coffee, Code } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Award className="w-8 h-8 text-blue-600" />, value: '5+', label: 'Years Experience' },
    { icon: <Code className="w-8 h-8 text-blue-600" />, value: '50+', label: 'Projects Completed' },
    { icon: <Users className="w-8 h-8 text-blue-600" />, value: '20+', label: 'Happy Clients' },
    { icon: <Coffee className="w-8 h-8 text-blue-600" />, value: '1000+', label: 'Cups of Coffee' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated AI/ML engineer with a passion for innovation and problem-solving
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                I'm a passionate AI/ML engineer with over 5 years of experience in developing 
                cutting-edge solutions that bridge the gap between complex algorithms and 
                practical applications.
              </p>
              <p className="text-lg leading-relaxed">
                My expertise spans across machine learning, deep learning, computer vision, 
                and natural language processing. I've had the privilege of working on diverse 
                projects ranging from predictive analytics to autonomous systems.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you can find me exploring the latest research papers, 
                contributing to open-source projects, or mentoring aspiring data scientists.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;