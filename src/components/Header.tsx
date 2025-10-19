import React from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand - Minimalist */}
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full bg-pink-600 group-hover:scale-150 transition-transform duration-300`}
              ></div>
              <h1
                className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Hashara Vidusanka
              </h1>
            </div>
          </div>

          {/* Desktop Navigation - Clean minimal style */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? scrolled
                      ? "text-pink-600"
                      : "text-white"
                    : scrolled
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
                {/* Active underline indicator */}
                {activeSection === item.id && (
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full ${
                      scrolled ? "bg-pink-600" : "bg-white"
                    }`}
                  ></span>
                )}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("contact")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                scrolled
                  ? "bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl"
                  : "bg-white text-gray-900 hover:bg-white/90 shadow-xl"
              }`}
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2.5 rounded-lg transition-all duration-300 ${
              scrolled
                ? "text-gray-900 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - Full screen overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-20 bg-white z-40 animate-fade-in">
            <div className="flex flex-col h-full p-8">
              <nav className="space-y-2">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-6 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-gray-900 text-white"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="mt-auto">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full px-6 py-4 bg-gray-900 text-white rounded-2xl text-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
