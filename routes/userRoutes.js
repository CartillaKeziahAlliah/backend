const express = require("express");
const { login, logout, signup } = require("../controllers/AuthController");
const authenticateToken = require("../middlewares/authenticateToken");
const router = express.Router();

router.post("/login", login);

router.post("/signup", signup);

router.post("/logout", authenticateToken, logout);

module.exports = router;
