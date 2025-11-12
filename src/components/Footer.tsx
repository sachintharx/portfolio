import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Hashara Vidusanka
            </h3>
            <p className="text-dark-400 text-sm leading-relaxed mb-4">
              AI/ML Engineer passionate about creating intelligent solutions and
              pushing the boundaries of technology.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/in/sachintha-hashara-vidusanka-a4289028b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-dark-800 rounded-lg hover:bg-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/sachintharx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-dark-800 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-dark-400 hover:text-accent-500 transition-colors text-sm flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    Home
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-dark-400 hover:text-accent-500 transition-colors text-sm flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    About
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-dark-400 hover:text-accent-500 transition-colors text-sm flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    Skills
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-dark-400 hover:text-accent-500 transition-colors text-sm flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    Projects
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-dark-400 hover:text-accent-500 transition-colors text-sm flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    Contact
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Services/Expertise */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Expertise</h3>
            <ul className="space-y-2 text-sm text-dark-400">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2"></span>
                Machine Learning
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2"></span>
                Deep Learning
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2"></span>
                Computer Vision
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2"></span>
                NLP & LLMs
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2"></span>
                Full-Stack Development
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Get In Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:sachinthahashara@gmail.com"
                  className="flex items-start text-dark-400 hover:text-accent-500 transition-colors text-sm group"
                >
                  <Mail size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                  <span className="group-hover:translate-x-1 transition-transform">
                    sachinthahashara@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+94778725277"
                  className="flex items-start text-dark-400 hover:text-accent-500 transition-colors text-sm group"
                >
                  <Phone size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                  <span className="group-hover:translate-x-1 transition-transform">
                    +94 77 872 5277
                  </span>
                </a>
              </li>
              <li className="flex items-start text-dark-400 text-sm">
                <MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                <span>Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-800 pt-8">
          <div className="flex justify-center items-center">
            <p className="text-dark-400 text-sm text-center">
              © {new Date().getFullYear()} Hashara Vidusanka. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
