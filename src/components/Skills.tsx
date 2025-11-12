import React from "react";
import {
  Brain,
  Database,
  Code,
  BarChart3,
  Cloud,
  GitBranch,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Skills: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: "AI/ML & Deep Learning",
      icon: <Brain className="w-8 h-8 text-primary-600" />,
      skills: [
        "TensorFlow",
        "Keras",
        "PyTorch",
        "OpenCV",
        "Scikit-learn",
        "CNN, RNN, Autoencoders",
      ],
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8 text-green-600" />,
      skills: ["Python", "C++", "C#", "Java", "JavaScript", "Dart", "SQL"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <BarChart3 className="w-8 h-8 text-accent-700" />,
      skills: [
        "FastAPI",
        "React.js",
        "Node.js",
        "Flutter",
        "WPF",
        "Spring Boot",
      ],
    },
    {
      title: "AI/ML Tools",
      icon: <Database className="w-8 h-8 text-orange-600" />,
      skills: ["LangChain", "HuggingFace", "FAISS", "BM25", "MLflow", "Optuna"],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8 text-cyan-600" />,
      skills: ["AWS", "Docker", "Terraform", "DBMS", "GitHub", "Jira"],
    },
    {
      title: "Data & Visualization",
      icon: <GitBranch className="w-8 h-8 text-red-600" />,
      skills: [
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Streamlit",
        "Figma",
        "Adobe Suite",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-accent-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>

      {/* Dot pattern */}
      <div className="absolute top-40 right-1/4 grid grid-cols-3 gap-2 opacity-20">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-accent-500"></div>
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
            My Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
            Technical <span className="text-accent-600">Arsenal</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent solutions
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${
                gridVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-accent-100 rounded-xl group-hover:scale-110 group-hover:bg-accent-200 transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-900 ml-4">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center group/item"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent-500 mr-3 group-hover/item:scale-150 transition-transform"></div>
                    <span className="text-dark-600 group-hover/item:text-dark-900 group-hover/item:translate-x-1 transition-all">
                      {skill}
                    </span>
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
