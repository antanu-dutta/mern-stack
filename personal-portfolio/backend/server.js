import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./config/db.js";
import adminRoute from "./routes/authRoute.js";
import projectRoute from "./routes/projectRoute.js";

dotenv.config();

const app = express();

// middlewares
app.use(
  cors({
    origin: "https://personal-portfolio-admin.onrender.com",
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API working");
});

// REST API
app.use("/api/admin", adminRoute);
app.use("/api/projects", projectRoute);

// Global error handler
app.use((err, req, res, next) => {
  console.error("Global error:", err);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
    error: process.env.NODE_ENV === "production" ? undefined : err.stack,
  });
});

db()
  .then(() =>
    app.listen(4000, () => console.log(`server is running on ${4000}`))
  )
  .catch((err) => console.error(err));

// Handle uncaught exceptions and unhandled rejections
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  process.exit(1);
});
