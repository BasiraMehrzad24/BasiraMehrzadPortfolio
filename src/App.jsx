import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./Pages/Contact";
import NotFound from "./pages/NotFound";
import ProjectDetails from "./pages/ProjectDetails";
function App() {
  const { theme } = useTheme();
  const [showContact, setShowContact] = useState(false);

  return (
    <div className={`${theme}-theme`}>
      <ScrollProgress />

      <Navbar theme={theme} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>

      <Footer openContact={() => setShowContact(true)} />

      {showContact && (
        <div className="modal-overlay" onClick={() => setShowContact(false)}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowContact(false)}>
              ✕
            </button>

            <Contact title="Contact Me!" showPreview={true} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
