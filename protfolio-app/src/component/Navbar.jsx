import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-text">
          Portfolio <FaStar className="star" />
        </Link>

        {/* Toggle button for mobile */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Nav Links */}
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about-us" onClick={() => setMenuOpen(false)}>About-us</Link></li>
        <li><Link to="/skill" onClick={() => setMenuOpen(false)}>Skill</Link></li>
        <li><Link to="/project" onClick={() => setMenuOpen(false)}>Project</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact-us</Link></li>
        <li>
        <li>
            <a
             href="/public/parth.pdf"
             target="_blank"
             rel="noopener noreferrer"
             className="hire-btn"
              >
    Hire Me
  </a>
</li>
        
        </li>
      </ul>
    </nav>
  );
}