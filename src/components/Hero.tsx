import React, { useState } from "react";
import { ArrowRight, Download } from "lucide-react";

const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  const handleViewWork = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    try {
      const link = document.createElement("a");
      link.href = "/Hashara_CV.pdf";
      link.download = "Hashara_Vidusanka_CV.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading CV:", error);
      // Fallback: open the PDF in a new tab
      window.open("/Hashara_CV.pdf", "_blank");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Hashara Vidusanka
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-blue-200">
              AI/ML Engineer & Data Scientist
            </h2>
            <p className="text-lg mb-8 text-blue-100 leading-relaxed">
              Passionate about leveraging artificial intelligence and machine
              learning to solve real-world problems. I specialize in building
              intelligent systems that make a meaningful impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleViewWork}
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                View My Work
                <ArrowRight size={20} />
              </button>
              <button
                onClick={handleDownloadCV}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2"
              >
                Download CV
                <Download size={20} />
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
              {!imageError ? (
                <img
                  src="/profile-image.jpg"
                  alt="Hashara Vidusanka"
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                  HV
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
