import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Contact: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-100 to-transparent rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-3xl opacity-50"></div>

      {/* Dot patterns */}
      <div className="absolute top-1/4 right-1/4 grid grid-cols-3 gap-2 opacity-20">
        {[...Array(9)].map((_, i) => (
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
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-pink-600">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let's collaborate on your next AI/ML project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            ref={leftRef}
            className={`bg-white p-8 rounded-3xl shadow-xl transition-all duration-1000 border border-gray-100 ${
              leftVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start group hover:translate-x-2 transition-transform cursor-pointer">
                <div className="p-4 bg-pink-100 rounded-2xl group-hover:bg-pink-200 group-hover:shadow-lg transition-all">
                  <Mail className="w-6 h-6 text-pink-600" />
                </div>
                <div className="ml-5">
                  <p className="text-gray-900 font-bold text-sm mb-1">Email</p>
                  <a
                    href="mailto:sachinthahashara@gmail.com"
                    className="text-gray-600 hover:text-pink-600 transition-colors"
                  >
                    sachinthahashara@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start group hover:translate-x-2 transition-transform cursor-pointer">
                <div className="p-4 bg-blue-100 rounded-2xl group-hover:bg-blue-200 group-hover:shadow-lg transition-all">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-5">
                  <p className="text-gray-900 font-bold text-sm mb-1">Phone</p>
                  <a
                    href="tel:+94778725277"
                    className="text-gray-600 hover:text-pink-600 transition-colors"
                  >
                    +94 77 872 5277
                  </a>
                </div>
              </div>
              <div className="flex items-start group hover:translate-x-2 transition-transform cursor-pointer">
                <div className="p-4 bg-purple-100 rounded-2xl group-hover:bg-purple-200 group-hover:shadow-lg transition-all">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div className="ml-5">
                  <p className="text-gray-900 font-bold text-sm mb-1">
                    Location
                  </p>
                  <p className="text-gray-600">Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-bold text-gray-900 mb-5">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/sachintha-hashara-vidusanka-a4289028b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-blue-600 rounded-2xl text-white hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <Linkedin
                    size={22}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
                <a
                  href="https://github.com/sachintharx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-gray-900 rounded-2xl text-white hover:bg-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <Github
                    size={22}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>

          <div
            ref={rightRef}
            className={`bg-white p-8 rounded-3xl shadow-xl transition-all duration-1000 delay-200 border border-gray-100 ${
              rightVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Send Message
            </h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-gray-900 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-5 py-4 bg-gray-50 border-0 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:bg-white transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-gray-900 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-5 py-4 bg-gray-50 border-0 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:bg-white transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-bold text-gray-900 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-5 py-4 bg-gray-50 border-0 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:bg-white transition-all"
                  placeholder="Project Discussion"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-gray-900 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-5 py-4 bg-gray-50 border-0 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:bg-white transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-4 px-6 rounded-2xl hover:bg-pink-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-bold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
