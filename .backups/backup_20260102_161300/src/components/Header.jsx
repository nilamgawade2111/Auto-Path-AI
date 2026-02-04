import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold">My App</h1>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/test" className="nav-link">Test Page</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/blogs" className="nav-link">Blogs</Link>
      </nav>
    </header>
  );
};

export default Header;