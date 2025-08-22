const express = require("express");
const { protect } = require("../middlewares/auth.middleware.js");
const { getDashboardData } = require("../controllers/dashboard.controller.js");

const router = express.Router();

router.get("/", protect, getDashboardData);

module.exports = router;
