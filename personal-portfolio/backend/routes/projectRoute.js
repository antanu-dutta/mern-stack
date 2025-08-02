import express from "express";
import multer from "multer";
import {
  addProject,
  deleteProject,
  getProjects,
  updateProject,
} from "../controllers/projectController.js";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

router.post("/add", upload.single("image"), addProject);
router.get("/", getProjects);
router.put("/edit/:id", upload.single("image"), updateProject);
router.delete("/delete/:id", deleteProject);

export default router;
