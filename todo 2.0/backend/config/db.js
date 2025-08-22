import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("db connected ✅");
  } catch (error) {
    console.error("database error", error.message);
  }
};
