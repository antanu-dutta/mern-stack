import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
dotenv.config();
import { connectDB } from "./config/db.js";

const app = express();
const port = process.env.PORT || 4000;

// database connection
connectDB();

// middlewares
app.use(express.json());

// REST API
app.get("/", (req, res) => {
  res.send("API working");
});

app.use("/api/user", userRoute);

app.listen(port, () =>
  console.log(`server is running on http://localhost:${port}`)
);
