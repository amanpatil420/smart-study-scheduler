// src/components/SubjectsList.jsx
import React from "react";

const subjects = [
  { name: "Math", due: "TUE 5", progress: 80 },
  { name: "History", due: "TUE 5", progress: 50 },
  { name: "Physics", due: "WED", progress: 30 },
];

const SubjectsList = () => {
  return (
    <div className="space-y-4">
      {subjects.map((subj) => (
        <div key={subj.name}>
          <div className="flex justify-between font-semibold">
            <span>{subj.name}</span>
            <span className="text-sm text-gray-400">Due {subj.due}</span>
          </div>
          <div className="w-full bg-gray-200 rounded h-2 mt-1">
            <div
              className="h-2 bg-indigo-500 rounded"
              style={{ width: `${subj.progress}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubjectsList;
