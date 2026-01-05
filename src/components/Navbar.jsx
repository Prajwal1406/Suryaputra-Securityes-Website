import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Shield className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-wide leading-none">
                SURYAPUTRA
              </span>
              <span className="text-[10px] text-gray-400 tracking-wider">
                SECURITIES
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className="hover:text-blue-400 transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-blue-400 transition-colors text-sm font-medium"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="hover:text-blue-400 transition-colors text-sm font-medium"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2 bg-blue-600 rounded-full hover:bg-blue-500 transition-all shadow-lg text-sm font-bold"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-4 py-3 space-y-3">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-white"
            >
              About Us
            </Link>
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-white"
            >
              Services
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-blue-400 font-bold"
            >
              Contact Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
