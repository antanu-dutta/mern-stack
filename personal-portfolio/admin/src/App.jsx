import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Create from "./pages/Create";
import "izitoast/dist/css/iziToast.min.css";
import SmallClock from "./components/Clock";

const App = () => {
  return (
    <>
      <SmallClock />
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  );
};

export default App;
