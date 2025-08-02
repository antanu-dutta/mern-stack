import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

if (
  !process.env.CLOUDINARY_CLOUD_NAME ||
  !process.env.CLOUDINARY_API_KEY ||
  !process.env.CLOUDINARY_API_SECRET
) {
  throw new Error("Cloudinary environment variables are not set");
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "projects", // Optional: specify folder
    });
    return result;
  } catch (error) {
    throw new Error("Cloudinary upload failed: " + error.message);
  }
};

export { cloudinary };
