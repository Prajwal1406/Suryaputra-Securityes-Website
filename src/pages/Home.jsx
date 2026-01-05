import { useNavigate } from "react-router-dom";
import {
  Users,
  Shield,
  MapPin,
  Clock,
  ArrowRight,
  Star,
  ShieldCheck,
  Briefcase,
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  // Custom CSS for animations (Ken Burns, Floating, Shimmer)
  const customStyles = `
    @keyframes kenBurns {
      0% { transform: scale(1) translate(0, 0); }
      50% { transform: scale(1.1) translate(-1%, -1%); }
      100% { transform: scale(1) translate(0, 0); }
    }
    .animate-ken-burns {
      animation: kenBurns 20s ease-in-out infinite alternate;
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
    .animate-float {
      animation: float 4s ease-in-out infinite;
    }

    @keyframes pulse-glow {
      0%, 100% { box-shadow: 0 0 0 0 rgba(234, 179, 8, 0.4); }
      50% { box-shadow: 0 0 0 10px rgba(234, 179, 8, 0); }
    }
    .animate-pulse-glow {
      animation: pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    
    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
      animation: fade-in-up 0.8s ease-out forwards;
    }
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <div className="flex-grow bg-gray-50 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden h-[600px] flex items-center">
          {/* Animated Background Layer */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80')] bg-cover bg-center animate-ken-burns opacity-40 will-change-transform" />
            {/* Dynamic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/20" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="max-w-2xl">
              {/* Floating Badge with Live Indicator */}
              <div className="animate-float inline-flex items-center justify-center p-2 px-4 mb-6 bg-yellow-500/10 text-yellow-400 rounded-full backdrop-blur-md border border-yellow-500/30 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                <span className="relative flex h-3 w-3 mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                </span>
                <ShieldCheck className="w-5 h-5 mr-2" />
                <span className="font-semibold tracking-wide uppercase text-sm">
                  System Active & Trusted
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight opacity-0 animate-fade-in-up delay-100">
                Professional Security <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                  You Can Trust
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 font-light leading-relaxed opacity-0 animate-fade-in-up delay-200">
                "For best security requirements." We provide top-tier security
                manpower and housekeeping services across Bangalore, Mandya, and
                Ramanagara.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up delay-300">
                <button
                  onClick={() => navigate("/contact")}
                  className="group relative overflow-hidden bg-yellow-500 text-slate-900 font-bold py-4 px-8 rounded-lg transition-all hover:bg-yellow-400 hover:scale-105 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] flex items-center justify-center"
                >
                  <span className="relative z-10 flex items-center">
                    Get a Quote{" "}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button
                  onClick={() => navigate("/about")}
                  className="group bg-white/5 backdrop-blur-sm border-2 border-white/20 hover:border-white text-white font-bold py-4 px-8 rounded-lg transition-all hover:bg-white/10"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Strip - Interactive Hover Effects */}
        <section className="bg-blue-900 text-white py-12 relative z-20 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              {[
                {
                  icon: Clock,
                  title: "24/7 Protection",
                  desc: "Round-the-clock vigilance",
                },
                {
                  icon: Users,
                  title: "Expert Staff",
                  desc: "Trained professionals",
                },
                {
                  icon: Shield,
                  title: "Licensed Agency",
                  desc: "Fully compliant & registered",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-center md:justify-start p-4 rounded-xl transition-colors hover:bg-blue-800/50 cursor-default"
                >
                  <div className="bg-blue-800 p-3 rounded-lg mr-4 group-hover:scale-110 group-hover:bg-blue-700 transition-all duration-300 shadow-lg">
                    <feature.icon className="w-8 h-8 text-yellow-500 group-hover:text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg group-hover:text-yellow-200 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-blue-200 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Animated Cards */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Why Choose Suryaputra?
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                We combine decades of public sector management experience with
                modern security techniques.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Star,
                  color: "text-yellow-500",
                  title: "Experienced Leadership",
                  desc: "Managed by veterans with over 39 years of experience in State & Central Public Sectors.",
                },
                {
                  icon: Briefcase,
                  color: "text-blue-600",
                  title: "Diverse Sectors",
                  desc: "Proven track record in serving apartments, corporate offices, industries, and banks.",
                },
                {
                  icon: MapPin,
                  color: "text-green-600",
                  title: "Local Expertise",
                  desc: "Strong operational presence and rapid response capabilities in Bangalore, Mandya, and Ramanagara.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group bg-slate-50 p-8 rounded-xl border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-slate-200 hover:bg-white"
                >
                  <item.icon
                    className={`w-10 h-10 ${item.color} mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  />
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 group-hover:text-slate-700">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview - Image Zoom Effects */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">
                  Our Core Services
                </h2>
                <p className="text-slate-600">
                  Tailored solutions for your facility
                </p>
              </div>
              <button
                onClick={() => navigate("/about")}
                className="group text-blue-900 font-semibold hover:text-blue-700 hidden md:inline-flex items-center transition-colors"
              >
                View All Services{" "}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Security Manpower",
                  sub: "Guards, Supervisors & Officers",
                  img: "https://images.unsplash.com/photo-1555436169-20e93ea9a7ff?auto=format&fit=crop&q=80",
                },
                {
                  title: "Housekeeping",
                  sub: "Cleaning & Maintenance Staff",
                  img: "https://images.unsplash.com/photo-1581578731117-104f8a3d46a8?auto=format&fit=crop&q=80",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl h-64 cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
                  onClick={() => navigate("/about")}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url('${service.img}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                  <div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-300 group-hover:translate-x-2">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 group-hover:text-white transition-colors">
                      {service.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
