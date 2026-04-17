import React from "react";
import {
  Home,
  Activity,
  TrendingUp,
  Settings,
  BatteryCharging,
  TowerControl,
  Database,
  Bot,
} from "lucide-react";

const navItems = [
  { key: "overview", label: "Overview", icon: Home },
  { key: "monitoring", label: "KPI Monitoring", icon: Activity },
  { key: "prediction", label: "AI Prediction", icon: TrendingUp },
  { key: "optimization", label: "Optimization", icon: Settings },
  { key: "energy", label: "Energy", icon: BatteryCharging },
  { key: "agent", label: "Agentic AI", icon: Bot },
];

export default function Sidebar({ page, setPage }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">
          <TowerControl size={22} />
        </div>
        <div>
          <h2>RAN OPS</h2>
          <p>AI-Driven RAN Management</p>
        </div>
      </div>

      <nav className="nav-list">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = page === item.key;

          return (
            <button
              key={item.key}
              className={`nav-btn ${active ? "active" : ""}`}
              onClick={() => setPage(item.key)}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="lab-card">
        <div className="lab-title">
          <Database size={16} />
          <span>Lab Status</span>
        </div>
        <p>Source: 4G/5G KPI feed</p>
        <p>Mode: Emulator / Testbed</p>
        <p>Polling: 1 minute</p>
        <p>Storage: PostgreSQL</p>
      </div>
    </aside>
  );
}