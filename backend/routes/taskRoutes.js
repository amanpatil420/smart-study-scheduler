// backend/routes/taskRoutes.js

const express = require("express");
const router = express.Router();

// ✅ Import the controller that has your task handling functions
const taskController = require("../controllers/taskController");

// GET all tasks for a user
router.get("/", taskController.getTasks);

// POST a new task
router.post("/", taskController.createTask);

// PUT (update) a task by ID
router.put("/update/:id", taskController.updateTask);

// DELETE a task by ID
router.delete("/delete/:id", taskController.deleteTask);

module.exports = router;
