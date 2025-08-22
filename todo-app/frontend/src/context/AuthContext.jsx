import React, { createContext, useContext, useState, useEffect } from "react";
import { api } from "../../config/api";
import { closeSnackbar, enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // stores logged-in user
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Load user from localStorage on app start
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const signup = async (formData) => {
    try {
      const res = await api.post("/user/signup", formData);
      const snackbarKey = enqueueSnackbar(res.data.message, {
        variant: res.data.success ? "success" : "error",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
        action: () => (
          <button
            onClick={() => closeSnackbar(snackbarKey)}
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              cursor: "pointer",
              marginLeft: "8px",
            }}
          >
            <X />
          </button>
        ),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const login = async (formData) => {
    try {
      const res = await api.post("/user/login", formData);
      const snackbarKey = enqueueSnackbar(res.data.message, {
        variant: res.data.success ? "success" : "error",

        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
        action: () => (
          <button
            onClick={() => closeSnackbar(snackbarKey)}
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              cursor: "pointer",
              marginLeft: "8px",
            }}
          >
            <X />
          </button>
        ),
      });
    } catch (error) {
      console.error(error);
    }

    // Mock:
    const existingUser = { username: "John Doe", email: formData.email };
    setUser(existingUser);
    localStorage.setItem("user", JSON.stringify(existingUser));
    return existingUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, signup, login, logout, navigate }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
