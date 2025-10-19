import React from "react";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Predictive Analytics Dashboard",
      description:
        "A comprehensive machine learning platform for business intelligence with real-time predictions and interactive visualizations.",
      image:
        "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
      liveDemo: "#",
      github: "#",
    },
    {
      title: "Computer Vision System",
      description:
        "An advanced object detection and recognition system using deep learning for automated quality control in manufacturing.",
      image:
        "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["PyTorch", "OpenCV", "Docker", "AWS", "Flask"],
      liveDemo: "#",
      github: "#",
    },
    {
      title: "NLP Sentiment Analyzer",
      description:
        "A sophisticated natural language processing tool for analyzing customer feedback and social media sentiment.",
      image:
        "https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["BERT", "Transformers", "Streamlit", "MongoDB", "Scikit-learn"],
      liveDemo: "#",
      github: "#",
    },
    {
      title: "Recommendation Engine",
      description:
        "A scalable recommendation system using collaborative filtering and deep learning for personalized content delivery.",
      image:
        "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Apache Spark", "Keras", "Redis", "Kafka", "Elasticsearch"],
      liveDemo: "#",
      github: "#",
    },
    {
      title: "Time Series Forecasting",
      description:
        "An automated forecasting system for financial markets using LSTM networks and statistical models.",
      image:
        "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["LSTM", "Prophet", "Plotly", "MLflow", "Airflow"],
      liveDemo: "#",
      github: "#",
    },
    {
      title: "AI Chatbot Platform",
      description:
        "An intelligent conversational AI system with multi-language support and contextual understanding.",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["GPT-3", "Rasa", "WebSockets", "Node.js", "MySQL"],
      liveDemo: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/50 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing innovative AI/ML solutions that make a real-world impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group backdrop-blur-sm bg-white/70 rounded-2xl overflow-hidden border border-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                  <button className="backdrop-blur-md bg-white/90 text-gray-900 px-5 py-2.5 rounded-xl hover:bg-white transition-all duration-300 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 font-medium shadow-lg">
                    <Eye size={16} />
                    Demo
                  </button>
                  <button className="backdrop-blur-md bg-gray-900/90 text-white px-5 py-2.5 rounded-xl hover:bg-gray-900 transition-all duration-300 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 delay-75 font-medium shadow-lg">
                    <Github size={16} />
                    Code
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="backdrop-blur-sm bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <a
                    href={project.liveDemo}
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1.5 text-sm font-medium transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="text-gray-600 hover:text-gray-800 flex items-center gap-1.5 text-sm font-medium transition-colors"
                  >
                    <Github size={14} />
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
