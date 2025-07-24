// src/components/Topbar.jsx
import React from "react";

const Topbar = () => {
  return (
    <div className="bg-white px-6 py-4 shadow flex justify-end items-center">
      <p className="mr-4 font-semibold">Jane Doe</p>
      <img
        src="https://i.pravatar.cc/40?img=5"
        alt="Profile"
        className="w-10 h-10 rounded-full"
      />
    </div>
  );
};

export default Topbar;
