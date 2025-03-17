import React, { useState, useEffect } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light-mode");

  useEffect(() => {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);

    // Debugging Logs
    console.log(`Theme changed to: ${theme}`);
    const computedStyle = window.getComputedStyle(document.body);
    console.log(`Current background image: ${computedStyle.backgroundImage}`);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light-mode" ? "dark-mode" : "light-mode");
  };

  return (
    <div className="theme-toggle-container">
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light-mode" ? "🌙" : "☀️"}
      </button>
    </div>
  );
}

export default ThemeToggle;
