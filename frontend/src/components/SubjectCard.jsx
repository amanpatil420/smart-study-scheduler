import React from "react";

const SubjectCard = ({ subject, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">{subject.name}</h2>
        <p className="text-sm text-gray-600">
          <strong>Difficulty:</strong> {subject.difficulty}/5
        </p>
        <p className="text-sm text-gray-600">
          <strong>Credits:</strong> {subject.credits}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Progress:</strong> {/* Update when progress is tracked */} 0%
        </p>
      </div>
      <button
        onClick={() => onDelete(subject._id)}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default SubjectCard;
