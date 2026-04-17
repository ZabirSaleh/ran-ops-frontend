import React from "react";
import { BatteryCharging } from "lucide-react";
import StatCard from "../components/StatCard";
import Card from "../components/Card";
import StatusBadge from "../components/StatusBadge";
import { energyActions } from "../data/mockData";

export default function EnergyPage() {
  return (
    <div className="page-stack">
      <div className="stats-grid three">
        <StatCard
          label="Low-Load Cells"
          value="5"
          sub="Based on hourly traffic profile"
        />
        <StatCard
          label="Estimated Savings"
          value="11.4%"
          sub="Night window projection"
        />
        <StatCard
          label="QoS Penalty"
          value="< 2%"
          sub="In controlled simulation"
        />
      </div>

      <Card
        title="Energy Saving Actions"
        icon={BatteryCharging}
        right={<div className="small-note">Baseline vs Energy Mode</div>}
      >
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Cell</th>
                <th>Mode</th>
                <th>Saving</th>
                <th>Impact</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {energyActions.map((item) => (
                <tr key={item.cell + item.mode}>
                  <td>{item.cell}</td>
                  <td>{item.mode}</td>
                  <td>{item.saving}</td>
                  <td>{item.impact}</td>
                  <td>
                    <StatusBadge value={item.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}