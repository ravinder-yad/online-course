const LiveClass = require("../models/LiveClass");

// Get live class data by roomID (including historical messages)
const getLiveClass = async (req, res) => {
  try {
    const { roomId } = req.params;
    let liveClass = await LiveClass.findOne({ roomId });

    if (!liveClass) {
      return res.status(404).json({ message: "Live Class not found" });
    }

    res.status(200).json(liveClass);
  } catch (error) {
    res.status(500).json({ message: "Server error retrieving live class", error: error.message });
  }
};

// Create a new live class entry (Utility for setup)
const createLiveClass = async (req, res) => {
  try {
    const { roomId, title, instructor } = req.body;
    let liveClass = await LiveClass.findOne({ roomId });

    if (liveClass) {
      return res.status(400).json({ message: "Room already exists" });
    }

    liveClass = new LiveClass({ roomId, title, instructor });
    await liveClass.save();

    res.status(201).json(liveClass);
  } catch (error) {
    res.status(500).json({ message: "Server error creating live class", error: error.message });
  }
};

module.exports = {
  getLiveClass,
  createLiveClass
}