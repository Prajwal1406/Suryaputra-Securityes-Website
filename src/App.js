import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

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
      <>
        <Helmet>
          <title>Suryaputra Securities | Trusted Security Agency</title>
          <meta
            name="description"
            content="Professional security services across Bangalore, Mandya, and Ramanagara."
          />

          <meta
            property="og:url"
            content="https://suryaputra-security.netlify.app/"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Suryaputra Securities | Trusted Security Agency"
          />
          <meta
            property="og:description"
            content="Professional security services across Bangalore, Mandya, and Ramanagara."
          />
          <meta property="og:image" content="/assets/images/logo.webp" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:domain"
            content="suryaputra-security.netlify.app"
          />
          <meta
            property="twitter:url"
            content="https://suryaputra-security.netlify.app/"
          />
          <meta
            name="twitter:title"
            content="Suryaputra Securities | Trusted Security Agency"
          />
          <meta
            name="twitter:description"
            content="Professional security services across Bangalore, Mandya, and Ramanagara."
          />
          <meta name="twitter:image" content="/assets/images/logo.webp" />

          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        </Helmet>
      </>

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
