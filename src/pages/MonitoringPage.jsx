import React from "react";
import { Activity, AlertTriangle } from "lucide-react";
import Card from "../components/Card";
import { kpiSeries } from "../data/mockData";

export default function MonitoringPage() {
  return (
    <div className="two-grid">
      <Card title="KPI Timeline" icon={Activity}>
        <div className="timeline-list">
          {kpiSeries.map((item) => (
            <div key={item.time} className="timeline-row">
              <div className="timeline-time">{item.time}</div>
              <div className="timeline-boxes">
                <div className="mini-box">PRB: {item.prb}%</div>
                <div className="mini-box">THPT: {item.thpt}</div>
                <div className="mini-box">Drops: {item.drops}%</div>
                <div className="mini-box">Energy: {item.energy}%</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Alarm and Degradation Signals" icon={AlertTriangle}>
        <div className="alert-stack">
          <div className="alert-box amber-box">
            Handover failure rate increased on <strong>BD-DHK-MIRPUR-017</strong>
            during 10:00–12:00.
          </div>

          <div className="alert-box red-box">
            Congestion threshold exceeded on{" "}
            <strong>BD-CTG-CHANDPUR-002</strong> with PRB above 80%.
          </div>

          <div className="alert-box blue-box">
            Low-load pattern detected on <strong>BD-KHL-KHULNA-005</strong>.
            Candidate for energy-saving mode.
          </div>
        </div>
      </Card>
    </div>
  );
}