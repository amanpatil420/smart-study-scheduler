import React from "react";
// components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex space-x-4 bg-white p-4 shadow">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/schedule">Schedule</Link>
      <Link to="/projects">Projects</Link>
    </nav>
  );
};

export default Navbar;

