const Task = require("../models/Task");

// Get tasks by user
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.query.userId }).populate("subjectId");
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create new task
exports.createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete task
exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
