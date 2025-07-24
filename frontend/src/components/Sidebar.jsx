// src/components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-slate-800 text-white flex flex-col p-6 space-y-6">
      <h1 className="text-2xl font-bold">Smart Study</h1>
      <nav className="space-y-4">
        <NavLink to="/dashboard" className="hover:underline">📊 Dashboard</NavLink>
        <NavLink to="/schedule" className="hover:underline">📅 Schedule</NavLink>
        <NavLink to="/projects" className="hover:underline">📁 Projects</NavLink>
        <NavLink to="/profile" className="hover:underline">👤 Profile</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
