import React from "react";
import { Cpu } from "lucide-react";
import StatCard from "../components/StatCard";
import Card from "../components/Card";
import { predictions } from "../data/mockData";

export default function PredictionPage() {
  return (
    <div className="page-stack">
      <div className="stats-grid three">
        <StatCard
          label="Congestion Model"
          value="F1: 0.88"
          sub="Gradient boosting classifier"
        />
        <StatCard
          label="Outage Risk Model"
          value="AUC: 0.91"
          sub="Binary cell health model"
        />
        <StatCard
          label="Drop Prediction"
          value="Recall: 0.84"
          sub="15-minute prediction window"
        />
      </div>

      <Card title="Current AI Predictions" icon={Cpu}>
        <div className="prediction-grid">
          {predictions.map((item, index) => (
            <div className="prediction-card" key={index}>
              <div className="prediction-head">
                <div>
                  <h4>{item.issue}</h4>
                  <p>
                    {item.cell} · {item.horizon}
                  </p>
                </div>
                <div className="confidence">
                  {Math.round(item.confidence * 100)}%
                </div>
              </div>

              <div className="prediction-body">
                Recommended response: {item.action}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}