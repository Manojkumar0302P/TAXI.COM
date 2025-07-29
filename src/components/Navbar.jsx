import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h3 id='head'>Taxi.com</h3>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link> {/* Add more routes as needed */}
      </div>
    </nav>
  );
}
