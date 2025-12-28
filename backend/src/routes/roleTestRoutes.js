const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

const router = express.Router();

// Admin only
router.get("/admin", protect, authorize("Admin"), (req, res) => {
  res.json({ message: "Welcome Admin" });
});

// Manager only
router.get("/manager", protect, authorize("Manager"), (req, res) => {
  res.json({ message: "Welcome Manager" });
});

// Developer only
router.get("/developer", protect, authorize("Developer"), (req, res) => {
  res.json({ message: "Welcome Developer" });
});

module.exports = router;
