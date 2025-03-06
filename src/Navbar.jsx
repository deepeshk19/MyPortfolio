import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>

      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
        <li><Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link></li>
        <li><Link to="/resume" onClick={() => setMenuOpen(false)}>Resume</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
};
