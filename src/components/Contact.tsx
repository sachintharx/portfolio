import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-4">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's collaborate on your next AI/ML project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="backdrop-blur-sm bg-white/70 p-8 rounded-2xl border border-white shadow-lg">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center group hover:translate-x-2 transition-transform">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:shadow-lg transition-shadow">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-gray-900 font-semibold text-sm">Email</p>
                  <a
                    href="mailto:hashara.vidusanka@email.com"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    hashara.vidusanka@email.com
                  </a>
                </div>
              </div>
              <div className="flex items-center group hover:translate-x-2 transition-transform">
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 group-hover:shadow-lg transition-shadow">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-gray-900 font-semibold text-sm">Phone</p>
                  <a
                    href="tel:+94771234567"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    +94 77 123 4567
                  </a>
                </div>
              </div>
              <div className="flex items-center group hover:translate-x-2 transition-transform">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 group-hover:shadow-lg transition-shadow">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-gray-900 font-semibold text-sm">
                    Location
                  </p>
                  <p className="text-gray-600">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="group p-4 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <Linkedin
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
                <a
                  href="#"
                  className="group p-4 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <Github
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
                <a
                  href="#"
                  className="group p-4 rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <Twitter
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-sm bg-white/70 p-8 rounded-2xl border border-white shadow-lg">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Send Message
            </h3>
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm"
                  placeholder="Project Discussion"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-semibold"
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
