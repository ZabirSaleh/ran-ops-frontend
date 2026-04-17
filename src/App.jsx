import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import OverviewPage from "./pages/OverviewPage";
import MonitoringPage from "./pages/MonitoringPage";
import PredictionPage from "./pages/PredictionPage";
import OptimizationPage from "./pages/OptimizationPage";
import EnergyPage from "./pages/EnergyPage";
import AgentPage from "./pages/AgentPage";

export default function App() {
  const [page, setPage] = useState("overview");

  const renderPage = () => {
    switch (page) {
      case "overview":
        return <OverviewPage />;
      case "monitoring":
        return <MonitoringPage />;
      case "prediction":
        return <PredictionPage />;
      case "optimization":
        return <OptimizationPage />;
      case "energy":
        return <EnergyPage />;
      case "agent":
        return <AgentPage />;
      default:
        return <OverviewPage />;
    }
  };

  return (
    <div className="app-shell">
      <Sidebar page={page} setPage={setPage} />

      <main className="main-content">
        <div className="page-header">
          <div>
            <h1>RAN OPS System Demo</h1>
            <p>
              Agentic AI for KPI monitoring, prediction, optimization, and
              energy-aware RAN control.
            </p>
          </div>

          <div className="header-badge">
            Demo Cluster: Bangladesh Lab
          </div>
        </div>

        {renderPage()}
      </main>
    </div>
  );
}