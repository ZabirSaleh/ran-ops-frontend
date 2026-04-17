export function formatConfidence(value) {
  return `${Math.round(value * 100)}%`;
}

export function getPriorityBadgeClass(priority) {
  switch (priority) {
    case "Critical":
      return "badge red";
    case "High":
      return "badge amber";
    case "Medium":
      return "badge blue";
    default:
      return "badge green";
  }
}