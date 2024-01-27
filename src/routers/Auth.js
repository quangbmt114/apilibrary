const express = require("express");
const AuthController = require("../controllers/AuhController");
const router = express.Router();
// Create a new Properties
router.post("/login", AuthController.Login);
router.post("/register", AuthController.createUser);

module.exports = router;
