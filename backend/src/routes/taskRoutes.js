const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");
const {
  createTask,
  getTasks,
  updateTaskStatus,
} = require("../controllers/taskController");

const router = express.Router();

// Admin & Manager
router.post("/", protect, authorize("Admin", "Manager"), createTask);

// All roles
router.get("/", protect, getTasks);

// Status update
router.patch(
  "/:id/status",
  protect,
  authorize("Admin", "Manager", "Developer"),
  updateTaskStatus
);

module.exports = router;
