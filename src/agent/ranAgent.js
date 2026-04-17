export function evaluateCell(cell) {
  const observations = [];
  const actions = [];

  if (cell.prb > 80) {
    observations.push("High PRB utilization detected");
    actions.push({
      type: "Load Balancing",
      priority: 9,
      reason: "PRB above 80% indicates possible congestion",
    });
  }

  if (cell.throughput < 90) {
    observations.push("Low throughput detected");
    actions.push({
      type: "Scheduler Optimization",
      priority: 7,
      reason: "Throughput is below expected threshold",
    });
  }

  if (cell.outageRisk > 0.2) {
    observations.push("Elevated outage risk detected");
    actions.push({
      type: "Fault Investigation",
      priority: 10,
      reason: "Outage risk is above 20%",
    });
  }

  if (cell.users < 30 && cell.prb < 30) {
    observations.push("Low-load window detected");
    actions.push({
      type: "Energy Saving Mode",
      priority: 8,
      reason: "Low traffic and low PRB suggest safe power reduction",
    });
  }

  let state = "Healthy";
  let priority = "Low";

  if (cell.outageRisk > 0.2) {
    state = "Outage Risk";
    priority = "Critical";
  } else if (cell.prb > 80 && cell.throughput < 90) {
    state = "Congested";
    priority = "High";
  } else if (cell.users < 30 && cell.prb < 30) {
    state = "Low Load";
    priority = "Medium";
  } else if (cell.throughput < 100) {
    state = "Warning";
    priority = "Medium";
  }

  const bestAction =
    actions.sort((a, b) => b.priority - a.priority)[0] || {
      type: "No Action",
      priority: 1,
      reason: "KPIs are within normal range",
    };

  const confidence = calculateConfidence(state);

  return {
    cellId: cell.id,
    state,
    priority,
    observations,
    recommendedAction: bestAction.type,
    reason: bestAction.reason,
    confidence,
  };
}

function calculateConfidence(state) {
  if (state === "Outage Risk") return 0.92;
  if (state === "Congested") return 0.87;
  if (state === "Low Load") return 0.9;
  if (state === "Warning") return 0.74;
  return 0.95;
}

export function runAgent(cells) {
  return cells.map((cell) => evaluateCell(cell));
}