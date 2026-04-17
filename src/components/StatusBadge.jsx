import React from "react";

export default function StatusBadge({ value }) {
  const getClassName = () => {
    switch (value) {
      case "Healthy":
      case "Recommended":
        return "badge green";
      case "Warning":
        return "badge amber";
      case "Congested":
        return "badge red";
      case "Low Load":
        return "badge blue";
      case "Scheduled":
        return "badge purple";
      case "Keep Active":
        return "badge gray";
      default:
        return "badge gray";
    }
  };

  return <span className={getClassName()}>{value}</span>;
}