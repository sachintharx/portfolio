import React from "react";
import {
  Brain,
  Database,
  Code,
  BarChart3,
  Cloud,
  GitBranch,
} from "lucide-react";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Machine Learning",
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      skills: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "Keras",
        "XGBoost",
        "Random Forest",
      ],
    },
    {
      title: "Programming",
      icon: <Code className="w-8 h-8 text-green-600" />,
      skills: ["Python", "R", "SQL", "JavaScript", "Java", "C++"],
    },
    {
      title: "Data Science",
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Jupyter"],
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8 text-orange-600" />,
      skills: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Elasticsearch",
        "BigQuery",
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8 text-cyan-600" />,
      skills: [
        "AWS",
        "Google Cloud",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "MLflow",
      ],
    },
    {
      title: "Tools & Frameworks",
      icon: <GitBranch className="w-8 h-8 text-red-600" />,
      skills: [
        "Git",
        "Apache Spark",
        "Airflow",
        "Flask",
        "FastAPI",
        "Streamlit",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium mb-4">
            Skills & Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
            Technical Arsenal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building intelligent solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group backdrop-blur-sm bg-white/70 p-6 rounded-2xl border border-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-3">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center group/item"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mr-3 group-hover/item:scale-150 transition-transform"></div>
                    <span className="text-gray-700 group-hover/item:text-gray-900 group-hover/item:translate-x-1 transition-all">
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
