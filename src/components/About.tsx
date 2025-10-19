import React from "react";
import { Award, Users, Coffee, Code } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const About: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  const stats = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      value: "7th",
      label: "Semester Completed",
    },
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      value: "16+",
      label: "Projects Completed",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      value: "6m+",
      label: "Industry Experience",
    },
    {
      icon: <Coffee className="w-8 h-8 text-blue-600" />,
      value: "2",
      label: "Research Papers",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gray-50">
      {/* Decorative dot pattern - top left */}
      <div className="absolute top-20 left-10 grid grid-cols-3 gap-2 opacity-30">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-pink-500"></div>
        ))}
      </div>

      {/* Decorative dot pattern - bottom right */}
      <div className="absolute bottom-20 right-10 grid grid-cols-4 gap-2 opacity-30">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-blue-500"></div>
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
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Crafting <span className="text-pink-600">AI Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I am here ready to help you in making creative digital products
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            ref={contentRef}
            className={`transition-all duration-1000 delay-200 ${
              contentVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                My Journey
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I am an undergraduate in the Faculty of Engineering,
                  University of Ruhuna, following a Computer Engineering Degree
                  Program. Currently in my 7th semester, I've gained valuable
                  industry experience as an AI/ML Engineering Trainee at Sri
                  Lanka Telecom (SLT).
                </p>
                <p>
                  My expertise includes Deep Learning (CNN, RNN, Autoencoders),
                  Retrieval-Augmented Generation (RAG), Computer Vision, and
                  Natural Language Processing. I've worked on diverse projects
                  ranging from AI-powered chatbots to traffic flow analysis and
                  parking spot detection systems.
                </p>
                <p>
                  I am a keen learner who is always willing to learn something
                  new and adapt myself in any new environment, while gaining
                  ample knowledge when working as a team. I would love to apply
                  my knowledge in computer engineering and develop my skills
                  within the industrial context.
                </p>
              </div>
            </div>
          </div>

          <div ref={statsRef} className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ${
                  statsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100 + 400}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-pink-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {React.cloneElement(stat.icon as React.ReactElement, {
                      className: "w-8 h-8 text-pink-600",
                    })}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
