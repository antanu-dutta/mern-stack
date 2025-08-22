import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { api } from "../../config/api";
import { useSnackbar } from "notistack";
import { X } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const SignupForm = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    signup(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 pt-20">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
          Sign Up
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Choose a username"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
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
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Create a password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Sign Up
        </button>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <NavLink to="/login" className="text-indigo-600 hover:underline">
            Login
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
