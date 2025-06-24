const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  difficulty: {
    type: Number, // Scale: 1 (Easy) to 5 (Hard)
    required: true,
  },
  credits: {
    type: Number,
    required: true,
  },
  progress: {
    type: Number,
    default: 0, // In percentage (0–100)
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model("Subject", subjectSchema);
