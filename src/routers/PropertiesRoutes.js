// src/routes/PropertiesRoutes.js
const express = require("express");
const PropertiesController = require("../controllers/PropertiesController");
const router = express.Router();
// Create a new Properties
router.get("/list", PropertiesController.listProperties);
router.put("/update", PropertiesController.updateProperties);
router.delete("/delete/:id", PropertiesController.deleteProperties);
router.post("/create", PropertiesController.createProperties);

module.exports = router;
