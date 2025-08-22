// src/context/AuthContext.jsx
import { createContext, useState, useEffect, useContext } from "react";
import { api } from "../api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);

  // Keep user logged in
  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          const res = await api.get("/users/profile", {
            headers: { Authorization: `Bearer ${token}` },
          });

          setUser(res.data);
        } catch (err) {
          console.error("Auth Error:", err);
          logout();
        }
      }
      setLoading(false);
    };
    fetchUser();
  }, [token]);

  // Signup
  const signup = async (data) => {
    try {
      const res = await api.post("/users/register", data);
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      return res.data;
    } catch (err) {
      return err.response?.data || err.message;
    }
  };

  // Login
  const login = async (data) => {
    try {
      const res = await api.post("/users/login", data);
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
      return res.data;
    } catch (err) {
      console.log(err.message);
      return err.response?.data || err.message;
    }
  };

  // Update user
  const updateUser = async (data) => {
    try {
      const res = await api.put("/users/update", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
      return res.data;
    } catch (err) {
      throw err.response?.data || err.message;
    }
  };

  // Delete user
  const deleteUser = async () => {
    try {
      const res = await api.delete("/users/delete", {
        headers: { Authorization: `Bearer ${token}` },
      });
      logout();
      return res.data;
      s;
    } catch (err) {
      throw err.response?.data || err.message;
    }
  };

  const getMe = async () => {
    try {
      const res = await api.get("/users/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    } catch (err) {
      throw err.response?.data || err.message;
    }
  };

  // Logout
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        signup,
        login,
        logout,
        updateUser,
        deleteUser,
        getMe,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using AuthContext
export const useAuth = () => useContext(AuthContext);
