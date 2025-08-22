import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // 10 salt rounds

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      profilePic: "",
    });

    await newUser.save();

    const userData = {
      _id: newUser._id,
      name: newUser.username,
      email: newUser.email,
    };

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: userData,
    });
  } catch (error) {
    console.error("Signup Error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Step 1: Get user (with password)
    const user = await User.findOne({ email });
    if (!user) return res.json({ success: false, message: "User not found" });

    // Step 2: Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.json({ success: false, message: "Password is incorrect" });

    // Step 3: Create session
    req.session.isLoggedIn = true;
    req.session.username = user.username;

    // Step 4: Remove password before sending response
    const { password: _, ...userWithoutPassword } = user.toObject();

    res.json({
      success: true,
      message: "Login Successfully",
      user: userWithoutPassword,
    });
  } catch (error) {
    console.error("login error", error);
    res.status(500).json({ message: "Server error" });
  }
};
