const express = require("express");

const router = express.Router();

const monitorController = require("./../controllers/monitor.controller");

router.get("/", monitorController.findAll);
router.post("/", monitorController.create);
router.get("/:id", monitorController.findById);
router.put("/:id", monitorController.update);
router.delete("/:id", monitorController.delete);

module.exports = router;
