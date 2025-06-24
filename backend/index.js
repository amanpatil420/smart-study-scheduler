const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;
const subjectRoutes = require("./routes/subjectRoutes");
const taskRoutes = require("./routes/taskRoutes");

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/api/subjects", subjectRoutes);
app.use("/api/tasks", taskRoutes);

// DB Connection
connectDB();



// Basic route
app.get("/api", (req, res) => {
  res.send("Smart Study Scheduler backend is running ✅");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
