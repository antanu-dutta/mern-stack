import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 px-4">
      <form className="bg-white shadow-2xl rounded-xl px-8 py-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Login
        </h1>

        {/* Email Input */}
        <div className="mb-5">
          <label className="block text-gray-600 mb-2 text-sm">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Password Input */}
        <div className="mb-5">
          <label className="block text-gray-600 mb-2 text-sm">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>
        </div>

        {/* Remember me + Forgot Password */}
        <div className="flex items-center justify-between mb-6 text-sm">
          <label className="flex items-center gap-2 text-gray-600">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="accent-indigo-500"
            />
            Remember me
          </label>
          <a href="#" className="text-indigo-500 hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          Log In
        </button>

        {/* Sign Up Prompt */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-indigo-500 hover:underline font-medium">
            Sign up here
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
