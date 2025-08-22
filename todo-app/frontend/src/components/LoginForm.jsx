import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { api } from "../../config/api";
import { closeSnackbar, enqueueSnackbar } from "notistack";
import { X } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-[350px]"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Login
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Username</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Login
        </button>

        {/* Redirect Link */}
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <NavLink to="/signup" className="text-indigo-600 hover:underline">
            Sign Up
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
