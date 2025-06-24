import React, { useState, useEffect } from "react";
import SubjectCard from "../components/SubjectCard";

const Dashboard = () => {
  const [subjects, setSubjects] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    difficulty: 1,
    credits: 3,
    userId: "demo-user", // Replace with real userId
  });

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    const res = await fetch(`/api/subjects?userId=${formData.userId}`);
    const data = await res.json();
    setSubjects(data);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/subjects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setFormData({ name: "", difficulty: 1, credits: 3, userId: "demo-user" });
    fetchSubjects();
  };

  const handleDelete = async (id) => {
    await fetch(`/api/subjects/${id}`, { method: "DELETE" });
    fetchSubjects();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Subjects</h1>

      <form onSubmit={handleSubmit} className="mb-4 space-y-2">
        <input
          type="text"
          name="name"
          placeholder="Subject Name"
          className="border p-2 w-full"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="difficulty"
          min="1"
          max="5"
          placeholder="Difficulty (1-5)"
          className="border p-2 w-full"
          value={formData.difficulty}
          onChange={handleChange}
        />
        <input
          type="number"
          name="credits"
          placeholder="Credits"
          className="border p-2 w-full"
          value={formData.credits}
          onChange={handleChange}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Subject
        </button>
      </form>

      {subjects.map((subject) => (
        <SubjectCard key={subject._id} subject={subject} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Dashboard;
