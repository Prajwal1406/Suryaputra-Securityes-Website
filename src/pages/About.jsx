import { useNavigate } from "react-router-dom";
import {
  Shield,
  FileCheck,
  Briefcase,
  Building2,
  CheckCircle2,
  Send,
} from "lucide-react";

// ==========================================
// 1. ABOUT COMPONENT (Copy to about.jsx)
// ==========================================
const About = ({ onContactClick }) => {
  const navigate = useNavigate();
  return (
    <div className="flex-grow bg-gray-50 animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-2 px-4 mb-6 bg-yellow-500/20 text-yellow-400 rounded-full backdrop-blur-sm border border-yellow-500/30">
            <Shield className="w-5 h-5 mr-2" />
            <span className="font-semibold tracking-wide uppercase text-sm">
              Premier Security Services
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Suryaputra Securities
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
            "For best security requirements"
          </p>
        </div>
      </section>

      {/* Mission & Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Committed to Your Safety
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We aim to provide quality service and effective communication to
                ensure customer satisfaction by adopting the latest techniques.
                At Suryaputra Securities, we understand that security is not
                just about manpower; it's about trust, vigilance, and rapid
                response.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-slate-900">
                      Operating Locations
                    </h4>
                    <p className="text-slate-600">
                      Serving Bangalore, Mandya, and Ramanagara.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <Briefcase className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-slate-900">
                      Sectors Served
                    </h4>
                    <p className="text-slate-600">
                      Apartments, Offices, Industries, Banks, and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1555436169-20e93ea9a7ff?auto=format&fit=crop&q=80"
                  alt="Security Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-slate-800 text-white p-6 rounded-xl shadow-lg hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-yellow-500">39+</div>
                  <div className="text-sm leading-tight">
                    Years of
                    <br />
                    Management Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Our Services</h2>
            <p className="text-slate-600 mt-2">
              Comprehensive solutions for all your facility needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Security Manpower
              </h3>
              <p className="text-slate-600">
                Trained and vigilant security personnel for residential,
                commercial, and industrial properties.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-green-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
                <Building2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Housekeeping Services
              </h3>
              <p className="text-slate-600">
                Professional housekeeping staff to maintain hygiene and
                cleanliness standards for corporate offices and apartments.
              </p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center hover:-translate-y-1 transition-transform">
              <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src="/assets/images/PrakashBabu.jpeg"
                    alt="Prakash Babu"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Prakash Babu (B.E.)
              </h3>
              <p className="text-sm text-blue-600 font-medium mb-3">
                Management Lead
              </p>
              <p className="text-sm text-slate-500">
                39 years in management (State & Central Public Sector).
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center hover:-translate-y-1 transition-transform">
              <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src="/assets/images/Madhusudan.jpeg"
                    alt="Madhususan"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                K.L. Madhusudhan (M.A.)
              </h3>
              <p className="text-sm text-blue-600 font-medium mb-3">
                Operations & Accounts
              </p>
              <p className="text-sm text-slate-500">
                15 years in accounting, materials, and stores.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center hover:-translate-y-1 transition-transform">
              <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src="/assets/images/Ramesh.jpeg"
                    alt="Ramesh"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900">T.R. Ramesh</h3>
              <p className="text-sm text-blue-600 font-medium mb-3">
                Operations
              </p>
              <p className="text-sm text-slate-500">
                20 years in operation & maintenance.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center hover:-translate-y-1 transition-transform">
              <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src="/assets/images/Venu.jpeg"
                    alt="Venu"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Venu</h3>
              <p className="text-sm text-blue-600 font-medium mb-3">
                Operations
              </p>
              <p className="text-sm text-slate-500">
                20 years in operation & maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Official Details & Banking */}
      <section className="py-16 bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <FileCheck className="w-6 h-6 text-yellow-500 mr-3" />
                <h3 className="text-xl font-bold text-white">
                  Registration Details
                </h3>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 space-y-4 border border-slate-700">
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">GSTN</span>
                  <span className="font-mono text-white">29AFQFS7247J1Z2</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">PAN</span>
                  <span className="font-mono text-white">AFQFS7247J</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">Udyam Reg</span>
                  <span className="font-mono text-white">
                    UDYAM-KR-03-0575913
                  </span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-slate-400">Reg No</span>
                  <span className="font-mono text-white">
                    32/58/S/0114/2025
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <Building2 className="w-6 h-6 text-yellow-500 mr-3" />
                <h3 className="text-xl font-bold text-white">
                  Banking Information
                </h3>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 space-y-4 border border-slate-700">
                <div className="grid grid-cols-3 gap-4 border-b border-slate-700 pb-2">
                  <span className="text-slate-400 col-span-1">Account</span>
                  <span className="text-white col-span-2 text-right">
                    Suryaputra Securities
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 border-b border-slate-700 pb-2">
                  <span className="text-slate-400 col-span-1">Bank/Branch</span>
                  <span className="text-white col-span-2 text-right">
                    Bank of Baroda/Mandya
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 border-b border-slate-700 pb-2">
                  <span className="text-slate-400 col-span-1">Acc No</span>
                  <span className="font-mono text-white col-span-2 text-right">
                    73870200001567
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 border-b border-slate-700 pb-2">
                  <span className="text-slate-400 col-span-1">IFSC</span>
                  <span className="font-mono text-white col-span-2 text-right">
                    BARB0VJMAMA
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-2">
                  <span className="text-slate-400 col-span-1">MICR</span>
                  <span className="font-mono text-white col-span-2 text-right">
                    571012520
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA instead of full contact strip */}
      <section className="bg-yellow-500 py-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Need reliable security?
          </h2>
          <p className="text-slate-800 mb-8 text-lg">
            Contact us today for a customized security plan.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 inline-flex items-center"
          >
            Get in Touch <Send className="ml-2 w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
