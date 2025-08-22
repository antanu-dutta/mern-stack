import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const createUser = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.json({ success: false, message: "User already exists" });
    const hashed = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      fullName,
      email,
      password: hashed,
      profilePic: "",
    });
    const { password: _, ...useWithoutPassword } = newUser.toObject();
    res.json({
      success: true,
      message: "User created Successfully",
      newUser: useWithoutPassword,
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const isUser = await User.findById(id);

    if (!isUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Build update object
    const updateData = { ...req.body };

    // If file uploaded, add profilePic path
    if (req.file) {
      updateData.profilePic = `/uploads/${req.file.filename}`;
    }

    const updatedUser = await User.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    res.json({ success: true, message: "User updated", user: updatedUser });
  } catch (error) {
    console.error("Update user error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const updateProfilePic = async (req, res) => {
  try {
    const fileName = req.fileName;
    console.log(fileName);
  } catch (error) {}
};
