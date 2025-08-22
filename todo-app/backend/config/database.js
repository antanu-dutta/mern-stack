import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("database conneted");
  } catch (error) {
    console.error("database error:", error.message);
  }
};
