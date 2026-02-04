import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/test" className="nav-link">Test Page</Link>
      <Link to="/about" className="nav-link">About Us</Link>
      <Link to="/services" className="nav-link">Services</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
      <Link to="/new" className="nav-link">New Page</Link>
    </header>
  );
};

export default Header;