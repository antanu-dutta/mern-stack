import { Admin } from "../models/Admin.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/services.js";

export const registerAdmin = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: "Name, email, and password are required" });
  }
  try {
    const adminExist = await Admin.findOne({ email });
    if (adminExist)
      return res.status(400).json({ message: "Admin is already registered" });
    const hashed = await bcrypt.hash(password, 10);
    const admin = await Admin.create({ name, email, password: hashed });
    res.json(admin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
  try {
    const adminExist = await Admin.findOne({ email });
    if (!adminExist)
      return res.status(401).json({ message: "Invalid Credential" });

    const passwordMatched = await bcrypt.compare(password, adminExist.password);
    if (!passwordMatched)
      return res.status(401).json({ message: "Invalid Credential" });

    let token;
    try {
      token = generateToken(adminExist._id);
    } catch (tokenErr) {
      return res
        .status(500)
        .json({ message: "Token generation failed", error: tokenErr.message });
    }

    const adminData = adminExist.toObject();
    delete adminData.password;

    res.json({ ...adminData, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
