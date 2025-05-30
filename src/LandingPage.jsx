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
  Building2,
} from "lucide-react";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-slate-900" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Synapticore</h1>
                <p className="text-xs text-slate-400">Medical Technology</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {["home", "about", "products", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-800/50 text-slate-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-700/50">
            <div className="px-6 py-4 space-y-2">
              {["home", "about", "products", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8">
            <Star className="w-4 h-4 mr-2" />
            Pioneering Medical Innovation
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold mb-6 ">
            <span className="bg-gradient-to-r from-white via-slate-200 to-[#d6f8f2] bg-clip-text text-transparent">
              Synapticore Technology Pvt. Ltd.
            </span>
          </h1>

          <p className="text-md md:text-xl lg:text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Empowering Innovation in Medical Technology through cutting-edge
            research and life-saving devices
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("about")}
              className="group px-4 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl font-semibold text-slate-900 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center"
            >
              Learn More
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="px-8 py-4 border border-slate-600 rounded-xl font-semibold text-slate-200 hover:bg-slate-800/50 hover:border-slate-500 transition-all duration-300"
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              About Our Mission
            </div>
            <h2 className="leading-normal text-2xl md:text-4xl lg:text-5xl font-bold mb-12 bg-gradient-to-r from-white to-[#d6f8f2] bg-clip-text text-transparent">
              Advancing Healthcare Solutions
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-md lg:text-lg text-slate-300 leading-relaxed">
                Synapticore Technology Pvt. Ltd. stands at the forefront of
                medical innovation, committed to advancing healthcare solutions
                through groundbreaking research and product development.
              </p>
              <p className="text-md lg:text-lg text-slate-300 leading-relaxed">
                Our focus on high-impact medical devices positions us at the
                critical intersection of science and healthcare, where we
                develop and deliver life-saving technologies that make a real
                difference.
              </p>
              <p className="text-md lg:text-lg text-slate-300 leading-relaxed">
                Operating under prestigious national institute licensing, we
                maintain the highest standards of safety, efficacy, and
                regulatory compliance in all our specialized device
                manufacturing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-6 text-center">
                <Zap className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                <h3 className="font-bold text-white mb-2">Innovation</h3>
                <p className="text-sm text-slate-400">
                  Cutting-edge research & development
                </p>
              </div>
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-6 text-center">
                <Shield className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="font-bold text-white mb-2">Safety</h3>
                <p className="text-sm text-slate-400">
                  Highest regulatory compliance
                </p>
              </div>
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-6 text-center">
                <Heart className="w-8 h-8 text-rose-400 mx-auto mb-4" />
                <h3 className="font-bold text-white mb-2">Impact</h3>
                <p className="text-sm text-slate-400">
                  Life-saving technologies
                </p>
              </div>
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-6 text-center">
                <Star className="w-8 h-8 text-amber-400 mx-auto mb-4" />
                <h3 className="font-bold text-white mb-2">Excellence</h3>
                <p className="text-sm text-slate-400">
                  Premier manufacturing standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Licensed Medical Devices
            </div>
            <h2 className="leading-normal text-2xl md:text-4xl lg:text-5xl  font-bold mb-12 bg-gradient-to-r from-white to-[#d6f8f2] bg-clip-text text-transparent">
              Our Product Portfolio
            </h2>
          </div>

          <div className="space-y-8">
            {/* Intracranial Electrodes */}
            <div className="group bg-gradient-to-r from-slate-800/40 to-slate-900/40 border border-slate-700/50 rounded-3xl p-8 hover:border-emerald-500/30 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-slate-900"/>
                    </div>
                    <div>
                      <h3 className="sm:text-md md:text-lg lg:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors m-0">
                        Intracranial Electrodes
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-300 text-md md:text-lg mb-6 leading-relaxed">
                    Advanced electrodes designed for acute and chronic
                    Electrocorticography (ECoG), engineered for safe
                    implantation periods up to 15 days. These precision
                    instruments support critical neurological monitoring and
                    research applications.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="bg-slate-900/50 rounded-xl p-4">
                      <h4 className="font-semibold text-emerald-400 mb-2">
                        Application
                      </h4>
                      <p className="text-slate-300 text-sm">
                        Neurophysiological monitoring and complex brain disorder
                        diagnosis
                      </p>
                    </div>
                    <div className="bg-slate-900/50 rounded-xl p-4">
                      <h4 className="font-semibold text-cyan-400 mb-2">
                        Duration
                      </h4>
                      <p className="text-slate-300 text-sm">
                        Safe implantation up to 15 days
                      </p>
                    </div>
                    <div className="bg-slate-900/50 rounded-xl p-4">
                      <h4 className="font-semibold text-rose-400 mb-2">
                        Design
                      </h4>
                      <p className="text-slate-300 text-sm">
                        Precision-engineered for acute and chronic use
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Plasma Protein System */}
            <div className="group bg-gradient-to-r from-slate-800/40 to-slate-900/40 border border-slate-700/50 rounded-3xl p-8 hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-slate-900" />
                </div>
                  <h3 className="sm:text-md md:text-lg lg:text-2xl font-bold text-white mb-0 group-hover:text-cyan-400 transition-colors">
                    Plasma Protein Isolation & Purification System
                  </h3>
                </div>
                  <p className="text-slate-300 text-md md:text-lg mb-6 leading-relaxed">
                    Sophisticated biotechnology system engineered for the
                    isolation and purification of critical plasma proteins,
                    supporting the production of high-purity therapeutic
                    proteins essential for clinical and pharmaceutical
                    applications.
                  </p>
                  <div className="bg-slate-900/50 rounded-xl p-6">
                    <h4 className="font-semibold text-cyan-400 mb-4">
                      Key Proteins Processed:
                    </h4>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {["Fibrinogen", "Thrombin", "IVIG", "Albumin"].map(
                        (protein) => (
                          <div
                            key={protein}
                            className="flex items-center space-x-2 text-slate-300"
                          >
                            <ChevronRight className="w-4 h-4 text-emerald-400" />
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
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm font-medium mb-8">
            <Shield className="w-4 h-4 mr-2" />
            Official Licensing
          </div>
          <h2 className="leading-normal text-2xl md:text-4xl lg:text-5xl  font-bold mb-12 bg-gradient-to-r from-white to-[#d6f8f2] bg-clip-text text-transparent">
            Licensed By
          </h2>
          <div className="bg-gradient-to-r from-slate-800/40 to-slate-900/40 border border-slate-700/50 rounded-3xl p-4 sm:p-6 lg:p-8">
           
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-200 mb-2 leading-normal">
                  Sree Chitra Tirunal Institute for Medical Sciences and Technology, Trivandrum
                </h3>
                <p className="text-sm sm:text-base text-emerald-400 font-medium mb-1">(SCTIMST)</p>
            </div>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              An Institution of National Importance<br className="hidden sm:inline" />
              <span className="sm:hidden"> - </span>Department of Science and Technology, Government of India
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm font-medium mb-6">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl  font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-md lg:text-xl text-slate-300">
              Want to learn more about our innovative solutions?
            </p>
          </div>

          <div className="bg-gradient-to-r from-slate-800/40 to-slate-900/40 border border-slate-700/50 rounded-3xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-slate-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <p className="text-slate-300">Info@panaceainfosec.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-slate-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Location</h4>
                  <p className="text-slate-300">Panacea Infosec (P) Ltd.</p>
                  <p className="text-slate-400 text-sm">
                    Plot no - 226, 3rd floor, A - 2,
                    <br />
                    Sector - 17 Dwarka, New Delhi - 110075
                  </p>
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
              <Heart className="w-6 h-6 text-slate-900" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
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
