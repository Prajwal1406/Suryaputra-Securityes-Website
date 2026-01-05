import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="https://preview.redd.it/minimalist-line-art-of-lord-hanuman-felt-peace-while-v0-7tkkz8c3v5ze1.jpeg?auto=webp&s=92fd5e6d77eb164cd5b14c0099712c0138cd931a"
              alt="Company Logo"
              className="h-12 w-12 rounded-full group-hover:opacity-90 transition duration-200"
            />

            <div className="flex flex-col">
              <span className="font-bold text-2xl tracking-wide leading-tight text-white">
                SURYAPUTRA
              </span>
              <span className="text-sm text-blue-300 tracking-wider">
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
      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-slate-800 border-t border-slate-700 transform transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen
            ? "max-h-96 opacity-100 scale-y-100"
            : "max-h-0 opacity-0 scale-y-0"
        }`}
      >
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
    </nav>
  );
};

export default Navbar;
