import { useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // fixed unique toast id
    const toastId = "login-toast";

    // if already shown, prevent showing again

    toast.loading("Loading...", { id: toastId });

    try {
      const data = await login({ email, password });
      if (typeof data === "string") {
        return toast.error(data, { duration: 2000, id: toastId });
      }
      if (data?.success) {
        navigate("/");
        toast.success(data.message || "Login successful!", { id: toastId });
      } else {
        toast.error(data?.message || "Invalid email or password!", {
          id: toastId,
        });
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong!", { id: toastId });
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md mt-10">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Login
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-all"
          >
            Login
          </button>
        </form>

        {/* Extra Links */}
        <p className="text-sm text-center text-gray-600 mt-5">
          Don’t have an account?{" "}
          <NavLink
            to="/register"
            className="text-orange-500 font-semibold hover:underline"
          >
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  );
}
