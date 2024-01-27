const express = require("express");
const router = express.Router();
const PropertiesController = require("../routers/PropertiesRoutes");
const AuthController = require("../routers/Auth");
router.use("/product", PropertiesController);
router.use("/", AuthController);

module.exports = router;
