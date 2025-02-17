// src/components/Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Be sure to create/update this file

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (e) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    // Attach event listener if menu is open
    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    // Cleanup listener on unmount or when menuOpen changes
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="navbar" ref={navRef}>
      {/* Left Section: Logo & Brand */}
      <div className="navbar-left">
        <img 
          src="/images/logo.png" 
          alt="Apex Racing Logo" 
          className="navbar-logo"
        />
      </div>

      {/* Center Section: Navigation Links */}
      <div className="navbar-center">
        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/cost-breakdown" onClick={() => setMenuOpen(false)}>Cost Breakdown</Link>
          <Link to="/bills" onClick={() => setMenuOpen(false)}>Bills</Link>
        </div>
      </div>

      {/* Right Section: Burger Menu Icon (visible on mobile) */}
      <div className="navbar-right">
        <div className="menu-icon" onClick={handleMenuToggle}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
