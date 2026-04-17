import React from "react";
import { Bot } from "lucide-react";
import Card from "../components/Card";
import { cells } from "../data/mockData";
import { runAgent } from "../agent/ranAgent";
import {
  formatConfidence,
  getPriorityBadgeClass,
} from "../agent/agentUtils";

export default function AgentPage() {
  const results = runAgent(cells);

  return (
    <div className="page-stack">
      <Card title="Agentic AI Decision Panel" icon={Bot}>
        <div className="prediction-grid">
          {results.map((item) => (
            <div className="prediction-card" key={item.cellId}>
              <div className="prediction-head">
                <div>
                  <h4>{item.cellId}</h4>
                  <p>{item.state}</p>
                </div>

                <div className={getPriorityBadgeClass(item.priority)}>
                  {item.priority}
                </div>
              </div>

              <div className="prediction-body">
                <p>
                  <strong>Recommended Action:</strong> {item.recommendedAction}
                </p>
                <p>
                  <strong>Reason:</strong> {item.reason}
                </p>
                <p>
                  <strong>Confidence:</strong> {formatConfidence(item.confidence)}
                </p>
              </div>

              <div className="agent-observations">
                <strong>Observations:</strong>
                <ul>
                  {item.observations.length > 0 ? (
                    item.observations.map((obs, idx) => <li key={idx}>{obs}</li>)
                  ) : (
                    <li>No abnormal condition detected</li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}