import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Brand */}
      <div className="text-xl font-bold text-indigo-600">MyDashboard</div>

      {/* Nav links */}
      <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <NavLink to="/" className="hover:text-indigo-600 transition">
          Dashboard
        </NavLink>
        <NavLink to="/project" className="hover:text-indigo-600 transition">
          Projects
        </NavLink>
        <NavLink to="/create" className="hover:text-indigo-600 transition">
          Create
        </NavLink>
      </div>

      {/* User dropdown */}
      <div className="relative" ref={dropdownRef}>
        <div
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <img
            src="https://i.pravatar.cc/40"
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 border-indigo-500"
          />
          <span className="hidden sm:inline-block font-medium text-gray-700">
            John Doe
          </span>
        </div>

        {/* Dropdown menu */}
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-10">
            <a
              href="/profile"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Profile
            </a>
            <button
              onClick={() => alert("Logging out...")}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
