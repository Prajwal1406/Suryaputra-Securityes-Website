import { useNavigate } from "react-router-dom";
import {
  Users,
  Briefcase,
  Building2,
  CheckCircle2,
  Send,
  ArrowRight,
  ShieldCheck,
  Warehouse,
  Landmark,
  Building,
} from "lucide-react";

const Services = ({ onContactClick }) => {
  const navigate = useNavigate();
  return (
    <div className="flex-grow bg-gray-50 animate-in fade-in duration-500">
      {/* Services Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-2 px-4 mb-6 bg-blue-500/20 text-blue-400 rounded-full backdrop-blur-sm border border-blue-500/30">
            <Briefcase className="w-5 h-5 mr-2" />
            <span className="font-semibold tracking-wide uppercase text-sm">
              Our Expertise
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Facility Solutions
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From manned guarding to pristine maintenance, we deliver excellence
            across all sectors.
          </p>
        </div>
      </section>

      {/* Main Services Detail */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {/* Service 1: Security */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-blue-700" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Security Manpower
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                We provide disciplined, well-trained, and groomed security
                personnel to safeguard your assets and people. Our security
                staff undergoes rigorous verification and training processes.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                  <span>24/7 Security Guards & Supervisors</span>
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                  <span>Gate Management & Visitor Tracking</span>
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                  <span>Perimeter Patrolling</span>
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                  <span>Emergency Response Coordination</span>
                </li>
              </ul>
              <button
                onClick={() => navigate("/contact")}
                className="text-blue-700 font-bold hover:text-blue-900 flex items-center"
              >
                Request Security Assessment{" "}
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-video relative">
                <img
                  src="/assets/images/homepage.png"
                  alt="Security Guard"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/10"></div>
              </div>
            </div>
          </div>

          {/* Service 2: Housekeeping */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-video relative">
                <img
                  src="https://assets1.hospitalitytech.com/images/v/max_width_1440/2022-05/shutterstock_1628546512.jpg"
                  alt="Housekeeping Staff"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-green-900/10"></div>
              </div>
            </div>
            <div className="order-2">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-green-700" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Housekeeping Services
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Maintain a pristine environment with our professional
                housekeeping solutions. We serve corporate offices, residential
                complexes, and industrial units with specialized cleaning
                protocols.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                  <span>Daily Office & Facility Cleaning</span>
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                  <span>Waste Management & Disposal</span>
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                  <span>Deep Cleaning & Sanitization</span>
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                  <span>Pantry Management</span>
                </li>
              </ul>
              <button
                onClick={() => navigate("/contact")}
                className="text-green-700 font-bold hover:text-green-900 flex items-center"
              >
                Get Cleaning Quote <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Served */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Sectors We Serve
            </h2>
            <p className="text-slate-600 mt-2">
              Tailored approaches for diverse environments
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-all">
              <Building className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900">Apartments</h3>
              <p className="text-sm text-slate-500 mt-1">
                Residential Complexes
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-all">
              <Building2 className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900">Offices</h3>
              <p className="text-sm text-slate-500 mt-1">
                Corporate & IT Parks
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-all">
              <Warehouse className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900">Industries</h3>
              <p className="text-sm text-slate-500 mt-1">
                Factories & Warehouses
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-all">
              <Landmark className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900">Banks</h3>
              <p className="text-sm text-slate-500 mt-1">ATMs & Branches</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Ready to upgrade your facility management?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Contact us for a free site survey and quotation.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-3 px-8 rounded-full transition-colors duration-300 inline-flex items-center"
          >
            Contact Us Now <Send className="ml-2 w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
export default Services;
