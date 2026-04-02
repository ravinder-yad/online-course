const express = require("express");
const router = express.Router();
const { getLiveClass, createLiveClass } = require("../controllers/liveController");

// Route to get classes for live room (id)
router.get("/:roomId", getLiveClass);

// Route to manually create a new class entry
router.post("/create", createLiveClass);

module.exports = router;
