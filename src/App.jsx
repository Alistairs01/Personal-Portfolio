import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Homepage";
import About from "./components/Aboutpage";
import Projects from "./components/Projectspage";
import Contact from "./components/Contactpage";
import ThemeToggle from "./components/ThemeToggle"; // Import the theme toggle component
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <ThemeToggle /> {/* Add ThemeToggle button */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
