import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:4000/api", // auto switch in prod
  withCredentials: true, // for cookies/session if needed
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add interceptors for auth token
// axiosInstance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("authToken");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default axiosInstance;
