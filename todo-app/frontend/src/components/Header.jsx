// src/components/Header.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icon library
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, navigate } = useAuth();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tasks", path: "/tasks" },
    { name: "About", path: "/about" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src="/logo192.png" alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-indigo-600">MyTodo</span>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-indigo-600 transition ${
                  isActive ? "text-indigo-600 font-semibold" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {!user ? (
            <div className="flex gap-3">
              <NavLink
                to="/login"
                className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Sign Up
              </NavLink>
            </div>
          ) : (
            <h1 onClick={handleLogout}>Logout</h1>
          )}
          {/* Auth Buttons */}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-indigo-600"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <nav className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `hover:text-indigo-600 transition ${
                    isActive ? "text-indigo-600 font-semibold" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/login"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Sign Up
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
