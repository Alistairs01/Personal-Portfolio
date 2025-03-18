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
      <h1>Hi, I'm Alexander Smith,</h1>
      <p>A passionate web developer dedicated to crafting clean, efficient, and user-friendly digital experiences. With a strong background in front-end and back-end development, I specialize in building responsive websites and dynamic web applications that bring ideas to life. I thrive on solving complex problems with code, staying updated with the latest technologies, and delivering high-quality solutions that meet both user needs and business goals. Whether it's developing sleek UI designs, optimizing performance, or creating seamless user interactions, I’m always excited to take on new challenges and push the boundaries of web development.</p>

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
