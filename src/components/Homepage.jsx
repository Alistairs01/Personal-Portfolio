import React, { useState, useEffect } from "react";
import "../App.css";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }

    console.log(`Theme changed: ${darkMode ? "Dark Mode" : "Light Mode"}`);
  }, [darkMode]);

  return (
    <div className="content">
      <h1>Welcome to My Portfolio</h1>
      <p>I am a passionate developer eager to build amazing web experiences.</p>

      {/* Theme Toggle Button */}
      <div className="theme-toggle-container">
        <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </div>
  );
};

export default Home;
