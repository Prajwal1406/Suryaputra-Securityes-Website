import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  FileCheck,
  Briefcase,
  Building2,
  CheckCircle2,
  Send,
  MapPin,
  Users,
  Award
} from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  // Reuse the same animation styles for consistency
  const customStyles = `
    @keyframes kenBurns {
      0% { transform: scale(1) translate(0, 0); }
      50% { transform: scale(1.1) translate(-1%, -1%); }
      100% { transform: scale(1) translate(0, 0); }
    }
    .animate-ken-burns {
      animation: kenBurns 20s ease-in-out infinite alternate;
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
        <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80')] bg-cover bg-center animate-ken-burns opacity-30 will-change-transform" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="animate-fade-in-up inline-flex items-center justify-center p-2 px-4 mb-6 bg-yellow-500/10 text-yellow-400 rounded-full backdrop-blur-sm border border-yellow-500/30">
              <Shield className="w-5 h-5 mr-2" />
              <span className="font-semibold tracking-wide uppercase text-sm">
                Premier Security Services
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight animate-fade-in-up delay-100">
              Suryaputra Securities
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light animate-fade-in-up delay-200">
              "For best security requirements"
            </p>
          </div>
        </section>

        {/* Mission & Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up delay-100">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 relative inline-block">
                  Committed to Your Safety
                  <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-yellow-500 rounded-full"></span>
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  We aim to provide quality service and effective communication to
                  ensure customer satisfaction by adopting the latest techniques.
                  At Suryaputra Securities, we understand that security is not
                  just about manpower; it's about trust, vigilance, and rapid
                  response.
                </p>

                <div className="space-y-6">
                  <div className="group flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-green-200 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                      <MapPin className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-slate-900">
                        Operating Locations
                      </h4>
                      <p className="text-slate-600">
                        Serving Bangalore, Mandya, and Ramanagara.
                      </p>
                    </div>
                  </div>
                  
                  <div className="group flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                      <Briefcase className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-slate-900">
                        Sectors Served
                      </h4>
                      <p className="text-slate-600">
                        Apartments, Offices, Industries, Banks, and more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative animate-fade-in-up delay-200 group">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative z-10 transform transition-transform duration-500 group-hover:scale-[1.02]">
                  <img
                    src="assets\images\homepage.png"
                    alt="Security Team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                </div>
                {/* Decorative background element */}
                <div className="absolute -inset-4 bg-yellow-500/10 rounded-3xl -z-0 transform rotate-2 transition-transform group-hover:rotate-3"></div>
                
                <div className="absolute -bottom-6 -left-6 bg-slate-800 text-white p-6 rounded-xl shadow-xl hidden md:block z-20 border border-slate-700">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-yellow-500">39+</div>
                    <div className="text-sm leading-tight text-slate-300">
                      Years of<br />
                      Management Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Services</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Comprehensive solutions tailored for optimal facility management
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Security Card */}
              <div 
                onClick={() => navigate("/contact")}
                className="group cursor-pointer bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110">
                   <Shield className="w-32 h-32 text-blue-600" />
                </div>
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Shield className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                  Security Manpower
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Trained and vigilant security personnel for residential,
                  commercial, and industrial properties.
                </p>
                <span className="text-blue-600 font-semibold flex items-center text-sm group-hover:translate-x-2 transition-transform">
                  Request Quote <Send className="ml-2 w-4 h-4" />
                </span>
              </div>

              {/* Housekeeping Card */}
              <div 
                onClick={() => navigate("/contact")}
                className="group cursor-pointer bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110">
                   <Building2 className="w-32 h-32 text-green-600" />
                </div>
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
                  <Building2 className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-green-700 transition-colors">
                  Housekeeping Services
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Professional housekeeping staff to maintain hygiene and
                  cleanliness standards for corporate offices and apartments.
                </p>
                <span className="text-green-600 font-semibold flex items-center text-sm group-hover:translate-x-2 transition-transform">
                  Request Quote <Send className="ml-2 w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Key Personnel
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Led by experienced professionals from Public Sector backgrounds.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  name: "Prakash Babu (B.E.)", 
                  role: "Management Lead", 
                  exp: "39 years in management (State & Central Public Sector).",
                  img: "/assets/images/PrakashBabu.jpeg",
                  initials: "PB"
                },
                { 
                  name: "K.L. Madhusudhan (M.A.)", 
                  role: "Operations & Accounts", 
                  exp: "15 years in accounting, materials, and stores.",
                  img: "/assets/images/Madhusudan.jpeg",
                  initials: "KM"
                },
                { 
                  name: "T.R. Ramesh", 
                  role: "Operations", 
                  exp: "20 years in operation & maintenance.",
                  img: "/assets/images/Ramesh.jpeg",
                  initials: "TR"
                },
                { 
                  name: "Venu", 
                  role: "Operations", 
                  exp: "20 years in operation & maintenance.",
                  img: "/assets/images/Venu.jpeg",
                  initials: "V"
                }
              ].map((member, idx) => (
                <div key={idx} className="group bg-white rounded-xl p-6 text-center border border-slate-100 hover:border-blue-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-50 group-hover:border-blue-50 transition-colors">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.onerror = null; 
                          e.target.src = `https://ui-avatars.com/api/?name=${member.initials}&background=random`;
                        }}
                      />
                    </div>
                    <div className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-1 border-2 border-white">
                      <Award className="w-3 h-3" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-800 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-blue-600 font-semibold mb-3 uppercase tracking-wide text-xs">
                    {member.role}
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {member.exp}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Official Details & Banking */}
        <section className="py-16 bg-slate-900 text-slate-300 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Registration */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-yellow-500/10 rounded-lg mr-3">
                    <FileCheck className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Registration Details
                  </h3>
                </div>
                <div className="bg-slate-800/50 rounded-2xl p-6 space-y-4 border border-slate-700/50 backdrop-blur-sm">
                  {[
                    { label: "GSTN", value: "29AFQFS7247J1Z2" },
                    { label: "PAN", value: "AFQFS7247J" },
                    { label: "Udyam Reg", value: "UDYAM-KR-03-0575913" },
                    { label: "Reg No", value: "32/58/S/0114/2025" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between border-b border-slate-700/50 pb-2 last:border-0 last:pb-0">
                      <span className="text-slate-400 text-sm font-medium">{item.label}</span>
                      <span className="font-mono text-white text-sm bg-slate-700/50 px-2 py-0.5 rounded text-right select-all">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Banking */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-yellow-500/10 rounded-lg mr-3">
                    <Building2 className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Banking Information
                  </h3>
                </div>
                <div className="bg-slate-800/50 rounded-2xl p-6 space-y-4 border border-slate-700/50 backdrop-blur-sm">
                  {[
                    { label: "Account", value: "Suryaputra Securities" },
                    { label: "Bank/Branch", value: "Bank of Baroda/Mandya" },
                    { label: "Acc No", value: "73870200001567" },
                    { label: "IFSC", value: "BARB0VJMAMA" },
                    { label: "MICR", value: "571012520" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between border-b border-slate-700/50 pb-2 last:border-0 last:pb-0">
                      <span className="text-slate-400 text-sm font-medium">{item.label}</span>
                      <span className="font-mono text-white text-sm bg-slate-700/50 px-2 py-0.5 rounded text-right select-all">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-yellow-500 py-16 text-center overflow-hidden">
           {/* Abstract background pattern */}
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black via-transparent to-transparent"></div>
           
           <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Need reliable security?
            </h2>
            <p className="text-slate-800 mb-8 text-lg font-medium">
              Contact us today for a customized security plan.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get in Touch <Send className="ml-2 w-5 h-5" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;