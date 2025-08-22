import express from "express";
import {
  registerUser,
  loginUser,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Get logged in user (protected)
router.get("/profile", authMiddleware, getUser);

// Update user (protected)
router.put("/update", authMiddleware, updateUser);

// Delete user (protected)
router.delete("/delete", authMiddleware, deleteUser);

export default router;
