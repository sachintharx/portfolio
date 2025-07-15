import React from 'react';
import { Brain, Database, Code, BarChart3, Cloud, GitBranch } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Machine Learning',
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'XGBoost', 'Random Forest'],
    },
    {
      title: 'Programming',
      icon: <Code className="w-8 h-8 text-green-600" />,
      skills: ['Python', 'R', 'SQL', 'JavaScript', 'Java', 'C++'],
    },
    {
      title: 'Data Science',
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Jupyter'],
    },
    {
      title: 'Databases',
      icon: <Database className="w-8 h-8 text-orange-600" />,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'BigQuery'],
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-8 h-8 text-cyan-600" />,
      skills: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Jenkins', 'MLflow'],
    },
    {
      title: 'Tools & Frameworks',
      icon: <GitBranch className="w-8 h-8 text-red-600" />,
      skills: ['Git', 'Apache Spark', 'Airflow', 'Flask', 'FastAPI', 'Streamlit'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building intelligent solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900 ml-3">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;