const express = require('express');

const router = express.Router();

const monitoringController = require("../controllers/monitoring.controller");

router.get("/", monitoringController.findAll);
router.post("/", monitoringController.create);
router.get("/:id", monitoringController.findById);
router.put("/:id", monitoringController.update);
router.delete("/:id", monitoringController.delete);

module.exports = router;