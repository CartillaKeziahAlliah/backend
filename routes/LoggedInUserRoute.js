const express = require("express");
const authenticateToken = require("../middlewares/authenticateToken");
const { getProfile } = require("../controllers/userController");
const router = express.Router();

router.get("/getUser", authenticateToken, getProfile);

module.exports = router;
