import jwt from "jsonwebtoken";

export const generateToken = (userId) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not set in environment variables");
  }
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET);
  return token;
};
