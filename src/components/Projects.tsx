import React from "react";
import { ExternalLink, Github, Eye } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Projects: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  const projects = [
    {
      title: "LECO AI Chatbot (SLT Trainee Project)",
      description:
        "Developed an AI-powered chatbot for LECO with RAG architecture, integrating retrieval-based and generative AI for context-aware responses. Implemented multilabel intent classification using Random Forest and TF-IDF.",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["FastAPI", "LangChain", "HuggingFace", "FAISS", "BM25", "Python"],
      liveDemo: "#",
      github: "#",
    },
    {
      title: "Traffic Flow Clustering",
      description:
        "Built an AI-powered solution to classify urban traffic flow using Convolutional Autoencoders and clustering on SUMO-simulated data. Interactive Streamlit dashboard with Gemini-powered chatbot.",
      image:
        "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Python", "MLflow", "Optuna", "FastAPI", "Streamlit", "SUMO"],
      liveDemo: "#",
      github: "https://github.com/yourusername/Traffic-Flow-Clustering",
    },
    {
      title: "Parking Spot Detection System",
      description:
        "Developed a real-time smart parking system using Computer Vision and CNN to classify parking spot availability. Applied ROI-based change detection for improved efficiency.",
      image:
        "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Python", "OpenCV", "TensorFlow", "Keras", "NumPy", "Matplotlib"],
      liveDemo: "#",
      github: "https://github.com/yourusername/Parking-Spot-Detection",
    },
    {
      title: "CAPTCHA Detection Model",
      description:
        "Developed a robust CAPTCHA recognition system using CNN and RNN with TensorFlow and Keras in Python for automated text extraction from distorted images.",
      image:
        "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Python", "TensorFlow", "Keras", "CNN", "RNN"],
      liveDemo: "#",
      github: "https://github.com/sachintharx/CAPTCHA-Detection-Model",
    },
    {
      title: "Potato Disease Classification",
      description:
        "Developed a CNN using TensorFlow and Keras to classify potato diseases from leaf images, enabling early detection and treatment recommendations for farmers.",
      image:
        "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Python", "TensorFlow", "Keras", "CNN", "Image Processing"],
      liveDemo: "#",
      github: "https://github.com/sachintharx/Potato-Disease-Classification",
    },
    {
      title: "Smokers & Drinkers Predictor",
      description:
        "Developed a machine learning model using Logistic Regression and SVM in Python to predict individuals' smoking and drinking behavior. Published research paper.",
      image:
        "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Python", "Scikit-learn", "Logistic Regression", "SVM", "ML"],
      liveDemo: "#",
      github: "https://github.com/sachintharx/ML_Project_Group_21",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden bg-gray-50"
    >
      {/* Decorative blob shapes */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full blur-3xl opacity-30 -mr-48"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full blur-3xl opacity-30 -ml-40"></div>

      {/* Dot patterns */}
      <div className="absolute top-1/3 left-20 grid grid-cols-4 gap-2 opacity-20">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-pink-500"></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-pink-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing innovative AI/ML solutions that make a real-world impact
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ${
                gridVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-95"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 px-5 py-2.5 rounded-full hover:bg-pink-50 transition-all duration-300 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 font-semibold shadow-xl"
                  >
                    <Eye size={16} />
                    Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 delay-75 font-semibold shadow-xl"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-xs font-medium border border-pink-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800 flex items-center gap-1.5 text-sm font-semibold transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 flex items-center gap-1.5 text-sm font-semibold transition-colors"
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
