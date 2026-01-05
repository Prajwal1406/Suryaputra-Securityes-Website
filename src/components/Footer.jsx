import React from "react";
import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-400 py-10 mt-auto border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* Column 1: Brand */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-white text-lg font-bold mb-4 flex items-center">
            <Shield className="w-5 h-5 mr-2 text-blue-500" /> Suryaputra
            Securities
          </h3>
          <p className="text-sm leading-relaxed mb-4 max-w-xs">
            Providing top-tier security and housekeeping solutions across
            Bangalore, Mandya, and Ramanagara. Managed by public sector
            veterans.
          </p>
          <div className="flex space-x-4">
            <span className="bg-slate-800 p-2 rounded text-xs border border-slate-700">
              GSTN: 29AFOFS72471122
            </span>
            <span className="bg-slate-800 p-2 rounded text-xs border border-slate-700">
              UDYAM-KR-03-0575913
            </span>
          </div>
        </div>

        {/* Column 2: Links */}
        <div>
          <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400">
                About Management
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-400">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400">
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
            Contact
          </h3>
          <div className="space-y-3 text-sm">
            <p className="flex items-center">
              <Phone className="w-4 h-4 mr-3 text-blue-500" /> 7892991767
            </p>
            <p className="flex items-center">
              <Mail className="w-4 h-4 mr-3 text-blue-500" />{" "}
              mar3ps23062025@gmail.com
            </p>
            <p className="flex items-center">
              <MapPin className="w-4 h-4 mr-3 text-blue-500" /> Jagadish Nagar,
              Bangalore
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 pt-6 border-t border-slate-800 text-xs text-gray-500">
        © 2025 Suryaputra Securities. Registration No: 32/58/5/0114/2025
      </div>
    </footer>
  );
};

export default Footer;
