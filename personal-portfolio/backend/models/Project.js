import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    imagePublicID: {
      type: String,
      required: true,
    },
    githubLink: {
      type: String,
      required: true,
      unique: true,
    },
    projectType: {
      type: String,
      enum: [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "REACT",
        "NODEJS",
        "NEXT JS",
        "FULL STACK",
      ],
      required: true,
    },
    hostedLink: {
      type: String,
      default: "https://www.youtube.com/",
    },
  },
  { timestamps: true }
);

export const Project = mongoose.model("project", projectSchema);
