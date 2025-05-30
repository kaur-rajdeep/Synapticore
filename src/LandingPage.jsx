import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Shield,
  Zap,
  Heart,
  Mail,
  MapPin,
  ChevronRight,
  Star,
  Sun,
  Moon,
} from "lucide-react";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ["home", "about", "products", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Theme-based classes
  const themeClasses = {
    // Main background
    mainBg: isDarkTheme ? "bg-slate-900 text-white" : "bg-gray-50 text-gray-900",
    
    // Pattern
    pattern: isDarkTheme ? "opacity-5" : "opacity-30",
    patternColor: isDarkTheme ? "white" : "rgb(156 163 175)",
    
    // Navigation
    navBg: isDarkTheme 
      ? scrolled ? "bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50" : "bg-transparent"
      : scrolled ? "bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-sm" : "bg-transparent",
    logoText: isDarkTheme ? "text-white" : "text-gray-900",
    logoSubtext: isDarkTheme ? "text-slate-400" : "text-gray-600",
    navButton: (isActive) => isDarkTheme 
      ? isActive 
        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
        : "text-slate-300 hover:text-white hover:bg-slate-800/50"
      : isActive
        ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
    mobileButton: isDarkTheme 
      ? "bg-slate-800/50 text-slate-300 hover:text-white" 
      : "bg-gray-100 text-gray-600 hover:text-gray-900",
    mobileMenu: isDarkTheme 
      ? "bg-slate-900/95 backdrop-blur-lg border-t border-slate-700/50"
      : "bg-white/95 backdrop-blur-lg border-t border-gray-200/50 shadow-sm",
    mobileMenuItem: isDarkTheme 
      ? "text-slate-300 hover:text-white hover:bg-slate-800/50"
      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
    
    // Theme toggle button
    themeButton: isDarkTheme 
      ? "bg-slate-800/50 text-slate-300 hover:text-white hover:bg-slate-700/50"
      : "bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200",
    
    // Hero section
    gradientOrb1: isDarkTheme ? "bg-emerald-500/10" : "bg-emerald-200/30",
    gradientOrb2: isDarkTheme ? "bg-cyan-500/10" : "bg-cyan-200/30",
    badge: isDarkTheme 
      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
      : "bg-emerald-100 border-emerald-200 text-emerald-700",
    heroTitle: isDarkTheme 
      ? "from-white via-slate-200 to-[#d6f8f2]"
      : "from-gray-900 via-gray-700 to-emerald-600",
    heroSubtext: isDarkTheme ? "text-slate-300" : "text-gray-600",
    primaryButton: "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-emerald-500/25",
    secondaryButton: isDarkTheme 
      ? "border-slate-600 text-slate-200 hover:bg-slate-800/50 hover:border-slate-500"
      : "border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400",
    
    // About section
    aboutBadge: isDarkTheme 
      ? "bg-slate-800/50 border-slate-700/50 text-slate-300"
      : "bg-gray-100 border-gray-200 text-gray-600",
    aboutTitle: isDarkTheme 
      ? "from-white to-[#d6f8f2]"
      : "from-gray-900 to-emerald-600",
    aboutText: isDarkTheme ? "text-slate-300" : "text-gray-600",
    featureCard: isDarkTheme 
      ? "bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50"
      : "bg-white border-gray-200 shadow-sm hover:shadow-md",
    featureTitle: isDarkTheme ? "text-white" : "text-gray-900",
    featureText: isDarkTheme ? "text-slate-400" : "text-gray-600",
    
    // Products section
    productsBg: isDarkTheme ? "bg-slate-800/30" : "bg-gray-100/50",
    productCard: isDarkTheme 
      ? "bg-gradient-to-r from-slate-800/40 to-slate-900/40 border-slate-700/50"
      : "bg-white border-gray-200 hover:shadow-lg",
    productCardHover: isDarkTheme ? "hover:border-emerald-500/30" : "hover:border-emerald-300",
    productTitle: isDarkTheme ? "text-white" : "text-gray-900",
    productTitleHover: isDarkTheme ? "group-hover:text-emerald-400" : "group-hover:text-emerald-600",
    productText: isDarkTheme ? "text-slate-300" : "text-gray-600",
    productFeature: isDarkTheme ? "bg-slate-900/50" : "bg-gray-50",
    
    // Licensing section
    licensingCard: isDarkTheme 
      ? "bg-gradient-to-r from-slate-800/40 to-slate-900/40 border-slate-700/50"
      : "bg-white border-gray-200 shadow-sm",
    licensingTitle: isDarkTheme ? "text-slate-200" : "text-gray-900",
    licensingSubtitle: isDarkTheme ? "text-emerald-400" : "text-emerald-600",
    licensingText: isDarkTheme ? "text-slate-300" : "text-gray-600",
    
    // Contact section
    contactCard: isDarkTheme 
      ? "bg-gradient-to-r from-slate-800/40 to-slate-900/40 border-slate-700/50"
      : "bg-white border-gray-200 shadow-sm",
    contactTitle: isDarkTheme ? "from-white to-slate-300" : "from-gray-900 to-gray-700",
    contactText: isDarkTheme ? "text-slate-300" : "text-gray-600",
    contactItemTitle: isDarkTheme ? "text-white" : "text-gray-900",
    contactItemText: isDarkTheme ? "text-slate-300" : "text-gray-600",
    
    // Footer
    footerBg: isDarkTheme ? "" : "bg-white",
    footerBorder: isDarkTheme ? "border-slate-700/50" : "border-gray-200",
    footerTitle: isDarkTheme ? "text-white" : "text-gray-900",
    footerSubtext: isDarkTheme ? "text-slate-400" : "text-gray-600",
    footerCopyright: isDarkTheme ? "text-slate-500" : "text-gray-500",
  };

  return (
    <div className={`min-h-screen overflow-x-hidden ${themeClasses.mainBg}`}>
      {/* Background Pattern */}
      <div className={`fixed inset-0 ${themeClasses.pattern}`}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${themeClasses.patternColor} 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${themeClasses.navBg}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center">
                <Heart className={`w-6 h-6 ${isDarkTheme ? 'text-slate-900' : 'text-white'}`} />
              </div>
              <div>
                <h1 className={`text-xl font-bold ${themeClasses.logoText}`}>Synapticore</h1>
                <p className={`text-xs ${themeClasses.logoSubtext}`}>Medical Technology</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-8">
                {["home", "about", "products", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${themeClasses.navButton(activeSection === item)}`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
              
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${themeClasses.themeButton}`}
                aria-label="Toggle theme"
              >
                {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile menu button and theme toggle */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${themeClasses.themeButton}`}
                aria-label="Toggle theme"
              >
                {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${themeClasses.mobileButton}`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`lg:hidden ${themeClasses.mobileMenu}`}>
            <div className="px-6 py-4 space-y-2">
              {["home", "about", "products", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${themeClasses.mobileMenuItem}`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 lg:px-8"
      >
        {/* Gradient Orbs */}
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${themeClasses.gradientOrb1} rounded-full blur-3xl`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 ${themeClasses.gradientOrb2} rounded-full blur-3xl`}></div>

        <div className="relative max-w-6xl mx-auto text-center">
          <div className={`inline-flex items-center px-4 py-2 rounded-full border text-sm font-medium mb-8 ${themeClasses.badge}`}>
            <Star className="w-4 h-4 mr-2" />
            Pioneering Medical Innovation
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold mb-6">
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${themeClasses.heroTitle}`}>
              Synapticore Technology Pvt. Ltd.
            </span>
          </h1>

          <p className={`text-md md:text-xl lg:text-xl mb-12 max-w-4xl mx-auto leading-relaxed ${themeClasses.heroSubtext}`}>
            Innovating in Medical Technology through cutting-edge research and
            life-saving devices
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("about")}
              className={`group px-4 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center ${themeClasses.primaryButton}`}
            >
              Learn More
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className={`px-8 py-4 border rounded-xl font-semibold transition-all duration-300 ${themeClasses.secondaryButton}`}
            >
              Our Products
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-4 py-2 rounded-full border text-sm font-medium mb-6 ${themeClasses.aboutBadge}`}>
              <Shield className="w-4 h-4 mr-2" />
              About Our Mission
            </div>
            <h2 className={`leading-normal text-2xl md:text-4xl lg:text-5xl font-bold mb-12 bg-gradient-to-r bg-clip-text text-transparent ${themeClasses.aboutTitle}`}>
              Advancing Healthcare Solutions
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className={`text-md lg:text-lg leading-relaxed ${themeClasses.aboutText}`}>
                Synapticore Technology Pvt. Ltd. stands at the forefront of
                medical innovation, committed to advancing healthcare solutions
                through groundbreaking research and product development.
              </p>
              <p className={`text-md lg:text-lg leading-relaxed ${themeClasses.aboutText}`}>
                Our focus on high-impact medical devices positions us at the
                critical intersection of science and healthcare, where we will
                develop and deliver life-saving technologies that make a real
                difference.
              </p>
              <p className={`text-md lg:text-lg leading-relaxed ${themeClasses.aboutText}`}>
                Operating under prestigious national institute licensing, we
                maintain the highest standards of safety, efficiency, and
                regulatory compliance in all our specialized device
                manufacturing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className={`border rounded-2xl p-6 text-center transition-shadow ${themeClasses.featureCard}`}>
                <Zap className={`w-8 h-8 mx-auto mb-4 ${isDarkTheme ? 'text-emerald-400' : 'text-emerald-500'}`} />
                <h3 className={`font-bold mb-2 ${themeClasses.featureTitle}`}>Innovation</h3>
                <p className={`text-sm ${themeClasses.featureText}`}>
                  Cutting-edge research & development
                </p>
              </div>
              <div className={`border rounded-2xl p-6 text-center transition-shadow ${themeClasses.featureCard}`}>
                <Shield className={`w-8 h-8 mx-auto mb-4 ${isDarkTheme ? 'text-cyan-400' : 'text-cyan-500'}`} />
                <h3 className={`font-bold mb-2 ${themeClasses.featureTitle}`}>Safety</h3>
                <p className={`text-sm ${themeClasses.featureText}`}>
                  Highest regulatory compliance
                </p>
              </div>
              <div className={`border rounded-2xl p-6 text-center transition-shadow ${themeClasses.featureCard}`}>
                <Heart className={`w-8 h-8 mx-auto mb-4 ${isDarkTheme ? 'text-rose-400' : 'text-rose-500'}`} />
                <h3 className={`font-bold mb-2 ${themeClasses.featureTitle}`}>Impact</h3>
                <p className={`text-sm ${themeClasses.featureText}`}>
                  Life-saving technologies
                </p>
              </div>
              <div className={`border rounded-2xl p-6 text-center transition-shadow ${themeClasses.featureCard}`}>
                <Star className={`w-8 h-8 mx-auto mb-4 ${isDarkTheme ? 'text-amber-400' : 'text-amber-500'}`} />
                <h3 className={`font-bold mb-2 ${themeClasses.featureTitle}`}>Excellence</h3>
                <p className={`text-sm ${themeClasses.featureText}`}>
                  Premier manufacturing standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className={`py-24 px-6 lg:px-8 ${themeClasses.productsBg}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-4 py-2 rounded-full border text-sm font-medium mb-6 ${themeClasses.aboutBadge}`}>
              <Zap className="w-4 h-4 mr-2" />
              Licensed Medical Devices
            </div>
            <h2 className={`leading-normal text-2xl md:text-4xl lg:text-5xl font-bold mb-12 bg-gradient-to-r bg-clip-text text-transparent ${themeClasses.aboutTitle}`}>
              Our Product Portfolio
            </h2>
          </div>

          <div className="space-y-8">
            {/* Intracranial Electrodes */}
            <div className={`group border rounded-3xl p-8 transition-all duration-300 ${themeClasses.productCard} ${themeClasses.productCardHover}`}>
              <div className="flex items-start space-x-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className={`w-5 h-5 ${isDarkTheme ? 'text-slate-900' : 'text-white'}`} />
                    </div>
                    <div>
                      <h3 className={`sm:text-md md:text-lg lg:text-2xl font-bold transition-colors m-0 ${themeClasses.productTitle} ${themeClasses.productTitleHover}`}>
                        Intracranial Electrodes
                      </h3>
                    </div>
                  </div>

                  <p className={`text-md md:text-lg mb-6 leading-relaxed ${themeClasses.productText}`}>
                    Advanced electrodes designed for acute and chronic
                    Electrocorticography (ECoG), engineered for safe
                    implantation periods up to 15 days. These precision
                    instruments support critical neurological monitoring and
                    research applications.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className={`rounded-xl p-4 ${themeClasses.productFeature}`}>
                      <h4 className={`font-semibold mb-2 ${isDarkTheme ? 'text-emerald-400' : 'text-emerald-600'}`}>
                        Application
                      </h4>
                      <p className={`text-sm ${themeClasses.productText}`}>
                        Neurophysiological monitoring and complex brain disorder
                        diagnosis
                      </p>
                    </div>
                    <div className={`rounded-xl p-4 ${themeClasses.productFeature}`}>
                      <h4 className={`font-semibold mb-2 ${isDarkTheme ? 'text-cyan-400' : 'text-cyan-600'}`}>
                        Duration
                      </h4>
                      <p className={`text-sm ${themeClasses.productText}`}>
                        Safe implantation up to 15 days
                      </p>
                    </div>
                    <div className={`rounded-xl p-4 ${themeClasses.productFeature}`}>
                      <h4 className={`font-semibold mb-2 ${isDarkTheme ? 'text-rose-400' : 'text-rose-600'}`}>
                        Design
                      </h4>
                      <p className={`text-sm ${themeClasses.productText}`}>
                        Precision-engineered for acute and chronic use
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Plasma Protein System */}
            <div className={`group border rounded-3xl p-8 transition-all duration-300 ${themeClasses.productCard} ${isDarkTheme ? 'hover:border-cyan-500/30' : 'hover:border-cyan-300'}`}>
              <div className="flex items-start space-x-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Heart className={`w-5 h-5 ${isDarkTheme ? 'text-slate-900' : 'text-white'}`} />
                    </div>
                    <h3 className={`sm:text-md md:text-lg lg:text-2xl font-bold mb-0 transition-colors ${themeClasses.productTitle} ${isDarkTheme ? 'group-hover:text-cyan-400' : 'group-hover:text-cyan-600'}`}>
                      Plasma Protein Isolation & Purification System
                    </h3>
                  </div>
                  <p className={`text-md md:text-lg mb-6 leading-relaxed ${themeClasses.productText}`}>
                    Sophisticated biotechnology system engineered for the
                    isolation and purification of critical plasma proteins,
                    supporting the production of high-purity therapeutic
                    proteins essential for clinical and pharmaceutical
                    applications.
                  </p>
                  <div className={`rounded-xl p-6 ${themeClasses.productFeature}`}>
                    <h4 className={`font-semibold mb-4 ${isDarkTheme ? 'text-cyan-400' : 'text-cyan-600'}`}>
                      Key Proteins Processed:
                    </h4>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {["Fibrinogen", "Thrombin", "IVIG", "Albumin"].map(
                        (protein) => (
                          <div
                            key={protein}
                            className={`flex items-center space-x-2 ${themeClasses.productText}`}
                          >
                            <ChevronRight className={`w-4 h-4 ${isDarkTheme ? 'text-emerald-400' : 'text-emerald-500'}`} />
                            <span className="text-sm">{protein}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licensing Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`inline-flex items-center px-4 py-2 rounded-full border text-sm font-medium mb-8 ${themeClasses.aboutBadge}`}>
            <Shield className="w-4 h-4 mr-2" />
            Official Licensing
          </div>
          <h2 className={`leading-normal text-2xl md:text-4xl lg:text-5xl font-bold mb-12 bg-gradient-to-r bg-clip-text text-transparent ${themeClasses.aboutTitle}`}>
            Technology Transferred from
          </h2>
          <div className={`border rounded-3xl p-4 sm:p-6 lg:p-8 ${themeClasses.licensingCard}`}>
            <div className="flex-1 min-w-0">
              <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 leading-normal ${themeClasses.licensingTitle}`}>
                Sree Chitra Tirunal Institute for Medical Sciences and
                Technology, Trivandrum
              </h3>
              <p className={`text-sm sm:text-base font-medium mb-1 ${themeClasses.licensingSubtitle}`}>
                (SCTIMST)
              </p>
            </div>
            <p className={`text-base sm:text-lg leading-relaxed ${themeClasses.licensingText}`}>
              An Institution of National Importance
              <br className="hidden sm:inline" />
              <span className="sm:hidden"> - </span>Department of Science and
              Technology, Government of India
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-24 px-6 lg:px-8 ${themeClasses.productsBg}`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-4 py-2 rounded-full border text-sm font-medium mb-6 ${themeClasses.aboutBadge}`}>
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </div>
            <h2 className={`text-2xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent ${themeClasses.contactTitle}`}>
              Contact Us
            </h2>
            <p className={`text-md lg:text-xl ${themeClasses.contactText}`}>
              Want to learn more about our innovative solutions?
            </p>
          </div>

          <div className={`border rounded-3xl p-8 ${themeClasses.contactCard}`}>
            <div className="grid md:grid-cols-1 gap-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Mail className={`w-5 h-5 ${isDarkTheme ? 'text-slate-900' : 'text-white'}`} />
                </div>
                <div>
                  <h4 className={`font-semibold mb-1 ${themeClasses.contactItemTitle}`}>Email</h4>
                  <p className={`text-xs sm:text-sm md:text-xl ${themeClasses.contactItemText}`}>vikrant.jee@synapticoretechnology.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-12 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center">
              <Heart className={`w-5 h-5 ${isDarkTheme ? 'text-slate-900' : 'text-white'}`} />
            </div>
            <div>
              <h3 className={`font-xl font-semibold mb-1 ${themeClasses.contactItemTitle}`}>
                Synapticore Technology
              </h3>
              <p className="text-xs text-slate-400">
                Empowering Innovation in Medical Technology
              </p>
            </div>
          </div>
          <div className="w-24 h-px bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-slate-500 text-sm">
            © 2025 Synapticore Technology Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
