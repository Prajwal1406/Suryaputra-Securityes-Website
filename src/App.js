import React from "react";
import { Routes, Route } from "react-router-dom";

// Import Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import Pages (assuming you have these files, or use the placeholders below)
import Home from "./pages/Home";
import About from "./pages/About"; // Make sure you created this file
import Services from "./pages/Services"; // Make sure you created this file
import Contact from "./pages/Contact"; // Make sure you created this file

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Navbar sits at the top, outside Routes */}
      <Navbar />

      {/* 2. Routes determine what shows in the middle */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* 3. Footer sits at the bottom, outside Routes */}
      <Footer />
    </div>
  );
}

export default App;
