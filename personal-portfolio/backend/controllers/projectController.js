import { Project } from "../models/Project.js";
import { cloudinary, uploadToCloudinary } from "../utils/cloudinary.js";
import fs from "fs";
import path from "path";

// get projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({});
    res.status(201).json(projects);
  } catch (error) {
    console.error("error", error.message);
  }
};

// add project
export const addProject = async (req, res) => {
  try {
    const { title, githubLink, hostedLink, projectType } = req.body;
    if (!title || !githubLink) {
      return res
        .status(400)
        .json({ message: "title and githubLink are required" });
    }
    if (!projectType)
      return res.status(400).json({ message: "Project Type is Required" });
    const projectExistance = await Project.findOne({ githubLink });
    if (projectExistance)
      return res.status(400).json({ message: "Project already added" });

    if (!req.file) {
      return res.status(400).json({ message: "Image file is required" });
    }

    // Save buffer to temp file for Cloudinary upload
    const tempPath = path.join(
      process.cwd(),
      "temp",
      `${Date.now()}_${req.file.originalname}`
    );
    try {
      fs.mkdirSync(path.dirname(tempPath), { recursive: true });
      fs.writeFileSync(tempPath, req.file.buffer);
    } catch (fsErr) {
      return res
        .status(500)
        .json({ message: "Failed to save image file", error: fsErr.message });
    }

    let result;
    try {
      result = await uploadToCloudinary(tempPath);
    } catch (cloudErr) {
      fs.unlinkSync(tempPath);
      return res
        .status(500)
        .json({ message: "Cloudinary upload failed", error: cloudErr.message });
    }

    // Remove temp file
    try {
      fs.unlinkSync(tempPath);
    } catch (unlinkErr) {
      // Log but don't fail the request
      console.error("Temp file cleanup error:", unlinkErr);
    }

    try {
      await Project.create({
        title,
        image: result.secure_url,
        githubLink,
        hostedLink,
        projectType,
        imagePublicID: result.public_id,
      });
    } catch (dbErr) {
      return res
        .status(500)
        .json({ message: "Database error", error: dbErr.message });
    }

    res.json({ message: "Project Added Successfully", result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Edit project
export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, githubLink, hostedLink } = req.body;

    if (!id) {
      return res.status(400).json({ message: "Project ID is required" });
    }

    const existingProject = await Project.findById(id);
    if (!existingProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    let updatedImageUrl = existingProject.image;
    let updatedimagePublicID = existingProject.imagePublicID;

    if (req.file) {
      // Remove old image from Cloudinary
      if (existingProject.imagePublicID) {
        try {
          await cloudinary.uploader.destroy(existingProject.imagePublicID);
        } catch (cloudErr) {
          return res.status(500).json({
            message: "Failed to remove old image from Cloudinary",
            error: cloudErr.message,
          });
        }
      }

      // Save new file temporarily
      const tempPath = path.join(
        process.cwd(),
        "temp",
        `${Date.now()}_${req.file.originalname}`
      );
      try {
        fs.mkdirSync(path.dirname(tempPath), { recursive: true });
        fs.writeFileSync(tempPath, req.file.buffer);
      } catch (fsErr) {
        return res.status(500).json({
          message: "Failed to save new image file",
          error: fsErr.message,
        });
      }

      // Upload new image
      let result;
      try {
        result = await cloudinary.uploader.upload(tempPath, {
          folder: "projects",
        });
      } catch (cloudErr) {
        fs.unlinkSync(tempPath);
        return res.status(500).json({
          message: "Cloudinary upload failed",
          error: cloudErr.message,
        });
      }

      // Cleanup temp file
      try {
        fs.unlinkSync(tempPath);
      } catch (unlinkErr) {
        console.error("Temp file cleanup error:", unlinkErr);
      }

      updatedImageUrl = result.secure_url;
      updatedimagePublicID = result.public_id;
    }

    let updatedProject;
    try {
      updatedProject = await Project.findByIdAndUpdate(
        id,
        {
          name,
          githubLink,
          hostedLink,
          image: updatedImageUrl,
          imagePublicID: updatedimagePublicID,
        },
        { new: true }
      );
    } catch (dbErr) {
      return res
        .status(500)
        .json({ message: "Database error", error: dbErr.message });
    }

    res.json({ message: "Project updated", project: updatedProject });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// delete project
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Project ID is required" });
    }
    const existenceProject = await Project.findById(id);
    if (!existenceProject) {
      return res.status(404).json({ message: "Project not found" });
    }
    // remove image from cloud
    try {
      await cloudinary.uploader.destroy(existenceProject.imagePublicID);
    } catch (cloudErr) {
      return res.status(500).json({
        message: "Failed to remove image from Cloudinary",
        error: cloudErr.message,
      });
    }
    // remove image from db
    try {
      await Project.findByIdAndDelete(id);
    } catch (dbErr) {
      return res
        .status(500)
        .json({ message: "Database error", error: dbErr.message });
    }
    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("Error deleting project:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
