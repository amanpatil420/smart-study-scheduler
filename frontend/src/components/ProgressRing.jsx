// src/components/ProgressRing.jsx
import React from "react";

const ProgressRing = ({ progress }) => {
  const radius = 50;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  // ✅ Ensure progress is always a valid number between 0 and 100
  const safeProgress = isNaN(progress) ? 0 : Math.min(Math.max(progress, 0), 100);
  const strokeDashoffset =
    circumference - (safeProgress / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="#e5e7eb"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#3b82f6"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="16"
        fill="#000"
      >
        {`${safeProgress}%`}
      </text>
    </svg>
  );
};

export default ProgressRing;
