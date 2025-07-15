import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Predictive Analytics Dashboard',
      description: 'A comprehensive machine learning platform for business intelligence with real-time predictions and interactive visualizations.',
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Python', 'TensorFlow', 'React', 'FastAPI', 'PostgreSQL'],
      liveDemo: '#',
      github: '#',
    },
    {
      title: 'Computer Vision System',
      description: 'An advanced object detection and recognition system using deep learning for automated quality control in manufacturing.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['PyTorch', 'OpenCV', 'Docker', 'AWS', 'Flask'],
      liveDemo: '#',
      github: '#',
    },
    {
      title: 'NLP Sentiment Analyzer',
      description: 'A sophisticated natural language processing tool for analyzing customer feedback and social media sentiment.',
      image: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['BERT', 'Transformers', 'Streamlit', 'MongoDB', 'Scikit-learn'],
      liveDemo: '#',
      github: '#',
    },
    {
      title: 'Recommendation Engine',
      description: 'A scalable recommendation system using collaborative filtering and deep learning for personalized content delivery.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Apache Spark', 'Keras', 'Redis', 'Kafka', 'Elasticsearch'],
      liveDemo: '#',
      github: '#',
    },
    {
      title: 'Time Series Forecasting',
      description: 'An automated forecasting system for financial markets using LSTM networks and statistical models.',
      image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['LSTM', 'Prophet', 'Plotly', 'MLflow', 'Airflow'],
      liveDemo: '#',
      github: '#',
    },
    {
      title: 'AI Chatbot Platform',
      description: 'An intelligent conversational AI system with multi-language support and contextual understanding.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['GPT-3', 'Rasa', 'WebSockets', 'Node.js', 'MySQL'],
      liveDemo: '#',
      github: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing innovative AI/ML solutions that make a real-world impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <button className="bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                    <Eye size={16} />
                    Demo
                  </button>
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2">
                    <Github size={16} />
                    Code
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href={project.liveDemo}
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="text-gray-600 hover:text-gray-800 flex items-center gap-1"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;