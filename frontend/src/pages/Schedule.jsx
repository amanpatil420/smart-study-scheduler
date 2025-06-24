import React, { useState, useEffect } from "react";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import { scheduleTasks } from "../utils/scheduleAlgo";

const Schedule = () => {
  const [tasks, setTasks] = useState([]);
  const userId = "demo-user";

  const fetchTasks = async () => {
    const res = await fetch(`/api/tasks?userId=${userId}`);
    const data = await res.json();
    setTasks(data);
  };

  const addTask = async (task) => {
    await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`/api/tasks/${id}`, { method: "DELETE" });
    fetchTasks();
  };

  const getNext7Days = () => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      days.push(d);
    }
    return days;
  };

  const applyAutoFill = () => {
    const scheduled = scheduleTasks(tasks, getNext7Days());
    setTasks(scheduled);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Weekly Scheduler</h1>
      <TaskForm onAdd={addTask} />
      <button onClick={applyAutoFill} className="mb-4 bg-green-600 text-white px-4 py-2 rounded">Auto-Fill Schedule</button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} onDelete={deleteTask} />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
