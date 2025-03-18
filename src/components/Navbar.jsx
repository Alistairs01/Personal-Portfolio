import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import profilePic from "../assets/Ray-Ban.jfif";

const Navbar = () => {
  const [rotation, setRotation] = useState(0);
  const location = useLocation(); // Track active page

  useEffect(() => {
    console.log("Navbar component rendered.");

    // Rotate navbar every 5 seconds
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 45) % 360);
      console.log(`Navbar rotated to ${rotation + 45} degrees`);
    }, 5000);

    return () => clearInterval(interval);
  }, [rotation]);

  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="navbar-wrapper">
      {/* Profile Picture (Centered, Not Moving) */}
      <div className="profile-container">
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </div>

      {/* Rotating Navbar (Covers Left Half of Screen) */}
      <nav
        className="rotating-navbar"
        style={{
          transform: `rotate(${rotation}deg)`, // Rotates around the center
        }}
      >
        {pages.map((page, index) => {
          const angle = (180 / (pages.length - 1)) * index - 90; // Distribute links across half-circle
          const radius = 250; // Keep items within view
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);
          const isActive = location.pathname === page.path;

          return (
            <Link
              key={page.path}
              to={page.path}
              className={`nav-item ${isActive ? "active" : ""}`}
              style={{
                transform: `translate(${x}px, ${y}px) rotate(${-rotation}deg)`, // Keep upright
              }}
            >
              {page.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
