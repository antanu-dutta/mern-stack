import { useState } from "react";
import Container from "../Container";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.jpg";

import { NavLink } from "react-router-dom";
import {
  ChevronDown,
  Egg,
  Utensils,
  Soup,
  IceCream,
  Menu,
  Search,
  LogIn,
  UserPlus,
  X,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Auth buttons (Desktop only) */}
      {!user && (
        <div className="hidden md:flex items-center justify-center space-x-4 p-3">
          <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition">
            <LogIn size={18} />
            <NavLink to="/login">Login</NavLink>
          </button>
          <button className="flex items-center gap-2 px-5 py-2 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-100 transition">
            <UserPlus size={18} />
            <NavLink to="/register">Sign Up</NavLink>
          </button>
        </div>
      )}

      <Container>
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              className="w-14 h-14 rounded-full object-cover"
              src={logo}
              alt="website-logo"
            />
            <h1 className="text-xl font-bold text-orange-600">RecipeFinder</h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex space-x-2 items-center">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-orange-500 text-white"
                        : "hover:bg-orange-200 hover:text-orange-800"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/popular"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-orange-500 text-white"
                        : "hover:bg-orange-200 hover:text-orange-800"
                    }`
                  }
                >
                  Popular
                </NavLink>
              </li>

              {/* Categories Dropdown */}
              <li className="relative">
                <button
                  onClick={() => setOpenDropdown(!openDropdown)}
                  className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 ${
                    openDropdown
                      ? "bg-orange-500 text-white"
                      : "hover:bg-orange-200 hover:text-orange-800"
                  }`}
                >
                  Categories <ChevronDown size={16} />
                </button>

                {openDropdown && (
                  <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
                    {[
                      {
                        to: "/categories/breakfast",
                        label: "Breakfast",
                        icon: <Egg size={18} />,
                      },
                      {
                        to: "/categories/lunch",
                        label: "Lunch",
                        icon: <Utensils size={18} />,
                      },
                      {
                        to: "/categories/dinner",
                        label: "Dinner",
                        icon: <Soup size={18} />,
                      },
                      {
                        to: "/categories/desserts",
                        label: "Desserts",
                        icon: <IceCream size={18} />,
                      },
                    ].map((item, idx) => (
                      <li key={idx}>
                        <NavLink
                          to={item.to}
                          className={`flex items-center gap-2 px-4 py-2 hover:bg-orange-100 transition ${
                            idx === 0
                              ? "rounded-t-lg"
                              : idx === 3
                              ? "rounded-b-lg"
                              : ""
                          }`}
                          onClick={() => setOpenDropdown(false)}
                        >
                          {item.icon}
                          <span>{item.label}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {user && (
                <li>
                  <NavLink
                    to="/my-recipes"
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-orange-500 text-white"
                          : "hover:bg-orange-200 hover:text-orange-800"
                      }`
                    }
                  >
                    My Recipe
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>

          {/* search input */}
          <div className="hidden md:flex items-center bg-white border border-gray-300 rounded-full shadow-sm overflow-hidden w-full max-w-sm">
            <input
              type="text"
              placeholder="Search for recipes, ingredients, cuisines…"
              className="flex-grow px-4 py-2 text-gray-700 focus:outline-none"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 p-3 flex items-center justify-center transition">
              <Search size={18} />
            </button>
          </div>

          {/* profile avatar */}
          {user && (
            <div className="relative hidden md:block">
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => setProfileDropdown(!profileDropdown)}
              >
                <img
                  src={avatar}
                  alt="Profile Avatar"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <ChevronDown size={16} />
              </div>

              {profileDropdown && (
                <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
                  <ul className="flex flex-col">
                    <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer">
                      <NavLink to={"/profile"}>Profile</NavLink>
                    </li>
                    <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer">
                      Settings
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
                      onClick={logout}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden p-2 rounded-md hover:bg-orange-100"
          >
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenu && (
          <nav className="md:hidden mt-2">
            <ul className="flex flex-col space-y-2 p-4 bg-orange-50 rounded-lg shadow-md">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setMobileMenu(false)}
                  className="block px-4 py-2 rounded-md hover:bg-orange-200"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/popular"
                  onClick={() => setMobileMenu(false)}
                  className="block px-4 py-2 rounded-md hover:bg-orange-200"
                >
                  Popular
                </NavLink>
              </li>
              <li>
                <button
                  onClick={() => setOpenDropdown(!openDropdown)}
                  className="flex items-center justify-between w-full px-4 py-2 rounded-md hover:bg-orange-200"
                >
                  Categories <ChevronDown size={16} />
                </button>
                {openDropdown && (
                  <ul className="mt-1 ml-4 space-y-1">
                    <li>
                      <NavLink
                        to="/categories/breakfast"
                        onClick={() => setMobileMenu(false)}
                        className="block px-4 py-2 rounded-md hover:bg-orange-100"
                      >
                        🍳 Breakfast
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/categories/lunch"
                        onClick={() => setMobileMenu(false)}
                        className="block px-4 py-2 rounded-md hover:bg-orange-100"
                      >
                        🍲 Lunch
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/categories/dinner"
                        onClick={() => setMobileMenu(false)}
                        className="block px-4 py-2 rounded-md hover:bg-orange-100"
                      >
                        🍛 Dinner
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/categories/desserts"
                        onClick={() => setMobileMenu(false)}
                        className="block px-4 py-2 rounded-md hover:bg-orange-100"
                      >
                        🍩 Desserts
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <NavLink
                  to="/my-recipe"
                  onClick={() => setMobileMenu(false)}
                  className="block px-4 py-2 rounded-md hover:bg-orange-200"
                >
                  My Recipe
                </NavLink>
              </li>

              {/* Auth buttons (Mobile only) */}
              <li className="flex flex-col gap-2 pt-2">
                <button className="flex items-center gap-2 px-5 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600 transition">
                  <LogIn size={18} />
                  <span>Login</span>
                </button>
                <button className="flex items-center gap-2 px-5 py-2 rounded-md border border-orange-500 text-orange-500 hover:bg-orange-100 transition">
                  <UserPlus size={18} />
                  <span>Sign Up</span>
                </button>
              </li>
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
};

export default Header;
