import { Router } from "express";
import { login, signup } from "../controllers/user.controller.js";

const route = Router();

route.post("/login", login);
route.post("/signup", signup);

export default route;
