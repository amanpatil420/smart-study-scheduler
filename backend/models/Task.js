const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: "Subject", required: true },
  title: { type: String, required: true },
  deadline: { type: Date, required: true },
  duration: { type: Number, required: true }, // in minutes
  priority: { type: Number, default: 1 }, // 1 (Low) to 5 (High)
  scheduledDate: { type: Date },
  isCompleted: { type: Boolean, default: false }
}, {
  timestamps: true,
});

module.exports = mongoose.model("Task", taskSchema);
