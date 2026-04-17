import React from "react";
import { kpiSeries } from "../data/mockData";

export default function TinyBarChart({ dataKey }) {
  const max = Math.max(...kpiSeries.map((item) => item[dataKey]));

  return (
    <div className="tiny-chart">
      {kpiSeries.map((item) => (
        <div className="tiny-bar-item" key={item.time}>
          <div
            className="tiny-bar"
            style={{
              height: `${(item[dataKey] / max) * 140}px`,
            }}
          />
          <span>{item.time}</span>
        </div>
      ))}
    </div>
  );
}