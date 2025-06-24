import React from "react";

const SubjectCard = ({ subject, onDelete }) => {
  return (
    <div className="border p-4 rounded shadow mb-2">
      <h2 className="text-xl font-semibold">{subject.name}</h2>
      <p>Difficulty: {subject.difficulty}/5</p>
      <p>Credits: {subject.credits}</p>
      <p>Progress: {subject.progress}%</p>
      <button
        className="mt-2 text-red-600"
        onClick={() => onDelete(subject._id)}
      >
        Delete
      </button>
    </div>
  );
};

export default SubjectCard;
