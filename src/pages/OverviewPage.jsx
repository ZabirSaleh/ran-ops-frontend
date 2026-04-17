import React from "react";
import { BarChart3, Wifi, TowerControl } from "lucide-react";
import StatCard from "../components/StatCard";
import Card from "../components/Card";
import TinyBarChart from "../components/TinyBarChart";
import StatusBadge from "../components/StatusBadge";
import { cells } from "../data/mockData";

export default function OverviewPage() {
  return (
    <div className="page-stack">
      <div className="stats-grid">
        <StatCard
          label="Active Cells"
          value="24"
          sub="2 degraded, 1 low-load candidate"
        />
        <StatCard
          label="Avg DL Throughput"
          value="103 Mbps"
          sub="Last 6-hour rolling view"
        />
        <StatCard
          label="Predicted Congestion"
          value="3 Cells"
          sub="Next 15–30 minutes"
        />
        <StatCard
          label="Energy Saving Potential"
          value="11.4%"
          sub="Estimated nightly opportunity"
        />
      </div>

      <div className="two-grid">
        <Card title="PRB Utilization Trend" icon={BarChart3}>
          <TinyBarChart dataKey="prb" />
        </Card>

        <Card title="Throughput Trend" icon={Wifi}>
          <TinyBarChart dataKey="thpt" />
        </Card>
      </div>

      <Card title="Cell Health Summary" icon={TowerControl}>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Cell ID</th>
                <th>Tech</th>
                <th>Status</th>
                <th>PRB %</th>
                <th>Throughput</th>
                <th>Users</th>
                <th>Outage Risk</th>
              </tr>
            </thead>
            <tbody>
              {cells.map((cell) => (
                <tr key={cell.id}>
                  <td>{cell.id}</td>
                  <td>{cell.tech}</td>
                  <td>
                    <StatusBadge value={cell.status} />
                  </td>
                  <td>{cell.prb}%</td>
                  <td>{cell.throughput} Mbps</td>
                  <td>{cell.users}</td>
                  <td>{Math.round(cell.outageRisk * 100)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}