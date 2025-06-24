import React, { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: "",
    subjectId: "",
    deadline: "",
    duration: 60,
    priority: 3,
    userId: "demo-user"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onAdd(formData);
    setFormData({
      title: "",
      subjectId: "",
      deadline: "",
      duration: 60,
      priority: 3,
      userId: "demo-user"
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mb-4">
      <input type="text" name="title" placeholder="Task title" required className="border p-2 w-full" onChange={handleChange} value={formData.title} />
      <input type="text" name="subjectId" placeholder="Subject ID" required className="border p-2 w-full" onChange={handleChange} value={formData.subjectId} />
      <input type="date" name="deadline" required className="border p-2 w-full" onChange={handleChange} value={formData.deadline} />
      <input type="number" name="duration" placeholder="Duration (min)" className="border p-2 w-full" onChange={handleChange} value={formData.duration} />
      <input type="number" name="priority" placeholder="Priority (1-5)" className="border p-2 w-full" onChange={handleChange} value={formData.priority} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Add Task</button>
    </form>
  );
};

export default TaskForm;
