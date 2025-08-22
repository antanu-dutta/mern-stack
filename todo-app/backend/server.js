import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import cors from "cors";
import { connectDB } from "./config/database.js";
import userRoute from "./routes/user.route.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// database connection
connectDB();

// middlewares
app.use(
  session({
    secret: "secret123",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.get("/", (req, res) => {
  res.send("server is running");
});
app.use("/api/user", userRoute);

app.listen(PORT, () =>
  console.log(`server is running on http://localhost:${PORT}/`)
);
