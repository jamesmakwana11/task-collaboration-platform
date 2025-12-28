const Task = require("../models/Task");

// ✅ Create Task (Admin / Manager)
exports.createTask = async (req, res) => {
  try {
    const task = await Task.create({
      ...req.body,
      createdBy: req.user.id,
    });

    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.getTasks = async (req, res) => {
  let filter = {};

  
  if (req.user.role === "Developer") {
    filter.assignedTo = req.user.id;
  }

  const tasks = await Task.find(filter)
    .populate("assignedTo", "name role")
    .populate("createdBy", "name");

  res.json(tasks);
};

// ✅ Update Task Status with Validation
exports.updateTaskStatus = async (req, res) => {
  const { status } = req.body;
  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  const validTransitions = {
    Todo: ["In Progress"],
    "In Progress": ["Blocked", "Done"],
    Blocked: ["In Progress"],
    Done: [],
  };

  if (!validTransitions[task.status].includes(status)) {
    return res
      .status(400)
      .json({ message: `Invalid status transition from ${task.status}` });
  }

  task.status = status;
  await task.save();

  res.json(task);
};
