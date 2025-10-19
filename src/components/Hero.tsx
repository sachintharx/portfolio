import React, { useState, useEffect } from "react";
import { ArrowRight, Download } from "lucide-react";

const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Background images for slider
  const backgroundImages = [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80", // Tech/Network
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&q=80", // Data visualization
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80", // AI/Circuit
    "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&q=80", // Digital tech
  ];

  // Auto-slide background images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const handleViewWork = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    try {
      const link = document.createElement("a");
      link.href = "/HASHARA_VIDUSANKA_RESUME_AI_ML.pdf";
      link.download = "HASHARA_VIDUSANKA_RESUME_AI_ML.pdf";
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
    <section className="min-h-screen relative overflow-hidden flex items-center pt-16">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-purple-900/90 to-indigo-900/95"></div>
      </div>

      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-float"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Animated lines/connections */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <svg className="w-full h-full">
          <defs>
            <linearGradient
              id="line-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {[...Array(5)].map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="url(#line-gradient)"
              strokeWidth="1"
              className="animate-pulse-slow"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </svg>
      </div>

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl animate-pulse-slow"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div className="inline-block animate-fade-in">
              <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-sm font-medium border border-white/20 shadow-lg">
                👋 Welcome to my portfolio
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Hi, I'm{" "}
              <span className="block mt-2 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-gradient drop-shadow-lg">
                Hashara Vidusanka
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-100 font-semibold drop-shadow-md">
              Computer Engineering Undergraduate | AI/ML Engineer
            </h2>
            <p className="text-lg text-blue-50/90 leading-relaxed max-w-xl drop-shadow-md">
              Undergraduate at University of Ruhuna, specializing in AI/ML, Deep
              Learning, and Computer Vision. Passionate about building
              intelligent systems that solve real-world problems through
              innovative technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleViewWork}
                className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1 hover:scale-105"
              >
                View My Work
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={handleDownloadCV}
                className="group backdrop-blur-md bg-white/10 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1 hover:scale-105"
              >
                Download CV
                <Download
                  size={20}
                  className="group-hover:translate-y-1 transition-transform"
                />
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>

              {/* Rotating ring */}
              <div className="absolute -inset-2 border-2 border-white/10 rounded-full animate-spin-slow"></div>

              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm bg-gradient-to-br from-cyan-400/20 to-blue-500/20 hover:scale-105 transition-transform duration-500">
                {!imageError ? (
                  <img
                    src="/profile-image.jpg"
                    alt="Hashara Vidusanka"
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-400 to-blue-500">
                    <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white">
                      HV
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "w-8 h-3 bg-white"
                  : "w-3 h-3 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
