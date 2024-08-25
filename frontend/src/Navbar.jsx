import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file for animations and transitions

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">MindBridge</div>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/signup" className="nav-link">Signup</Link>
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
}
