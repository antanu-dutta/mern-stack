import mongoose from "mongoose";

export const db = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not set in environment variables");
    }
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`connected: ${connection.connections[0].host}`);
  } catch (error) {
    console.log(`db connection error`);
    console.error(error);
    throw error;
  }
};
