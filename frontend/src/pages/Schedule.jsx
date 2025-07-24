import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase"; // Adjust path if needed

const Schedule = () => {
  const [user, loading, error] = useAuthState(auth);
  const [tasks, setTasks] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      if (!user) return;

      try {
        console.log("👉 Fetching tasks for user:", user.uid);
        const response = await axios.get(`/api/tasks?userId=${user.uid}`);
        setTasks(response.data);
        console.log("✅ Tasks fetched:", response.data);
      } catch (err) {
        console.error("❌ Error fetching tasks:", err);
        setFetchError("Failed to load tasks. Please try again later.");
      }
    };

    fetchTasks();
  }, [user]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">📅 Your Weekly Schedule</h1>

      {fetchError && <p className="text-red-500">{fetchError}</p>}

      {tasks.length === 0 ? (
        <p>No tasks scheduled.</p>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task._id}
              className="p-4 bg-white shadow-md rounded-md border border-gray-200"
            >
              <p className="font-semibold text-lg">{task.title}</p>
              <p className="text-sm text-gray-600">
                Subject: {task.subject} | Difficulty: {task.difficulty}
              </p>
              <p className="text-sm text-gray-500">
                Deadline: {new Date(task.deadline).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Schedule;
