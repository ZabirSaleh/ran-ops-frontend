import React from "react";
import { Settings, Zap } from "lucide-react";
import Card from "../components/Card";

const actions = [
  {
    name: "Load Balancing",
    trigger: "PRB > 80% and throughput decline",
    impact: "Reduce congestion risk",
    type: "SON Rule",
  },
  {
    name: "Neighbor Optimization",
    trigger: "Handover failures rising",
    impact: "Improve mobility stability",
    type: "SON Rule",
  },
  {
    name: "AI Action Ranking",
    trigger: "Multiple degradation signals",
    impact: "Prioritize safest intervention",
    type: "Agentic AI",
  },
  {
    name: "Rollback Guard",
    trigger: "QoS worsens after change",
    impact: "Restore previous profile",
    type: "Control Logic",
  },
];

export default function OptimizationPage() {
  return (
    <div className="page-stack">
      <Card title="Optimization Decision Engine" icon={Settings}>
        <div className="optimization-grid">
          {actions.map((item) => (
            <div className="opt-card" key={item.name}>
              <div className="opt-top">
                <h4>{item.name}</h4>
                <span className="opt-tag">{item.type}</span>
              </div>
              <p>
                <strong>Trigger:</strong> {item.trigger}
              </p>
              <p>
                <strong>Expected impact:</strong> {item.impact}
              </p>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Closed-Loop Flow" icon={Zap}>
        <div className="flow-grid">
          <div className="flow-box">Observe KPIs</div>
          <div className="flow-box">Detect anomaly</div>
          <div className="flow-box">Predict risk</div>
          <div className="flow-box">Recommend action</div>
          <div className="flow-box">Evaluate outcome</div>
        </div>
      </Card>
    </div>
  );
}