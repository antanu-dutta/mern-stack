import express from "express";
import { createUser, updateUser } from "../controllers/user.controller.js";
import { upload } from "../config/upload.js";
const router = express.Router();

router.post("/", createUser); // CREATE user
router.put("/update/:id", upload.single("profilePic"), updateUser);

export default router;
