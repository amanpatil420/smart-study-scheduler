import React from "react";

const TaskCard = ({ task, onDelete }) => (
  <div className="border rounded p-3 mb-2 bg-white shadow">
    <h3 className="font-semibold">{task.title}</h3>
    <p>Due: {new Date(task.deadline).toLocaleDateString()}</p>
    <p>Duration: {task.duration} mins</p>
    <p>Priority: {task.priority}</p>
    <p>Scheduled: {task.scheduledDate ? new Date(task.scheduledDate).toDateString() : "Not Scheduled"}</p>
    <button onClick={() => onDelete(task._id)} className="text-red-500 mt-2">Delete</button>
  </div>
);

export default TaskCard;
