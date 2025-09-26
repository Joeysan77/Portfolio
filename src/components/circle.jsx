import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export function Circle({ value, size = 100, strokeWidth = 8 }) {
  return (
    <div style={{ width: size, height: size }} className="relative">
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        strokeWidth={strokeWidth}
        styles={buildStyles({
          pathColor: "green",   // Tailwind blue-500
          trailColor: "#e5e7eb",  // Tailwind gray-200
          textColor: "#1f2937",   // Tailwind gray-800
          textSize: "1.5rem",
          strokeLinecap: "round",
        })}
      />
    </div>
  );
}