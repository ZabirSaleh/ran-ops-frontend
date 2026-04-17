export const kpiSeries = [
  { time: "08:00", prb: 42, thpt: 118, drops: 0.7, energy: 84 },
  { time: "09:00", prb: 51, thpt: 125, drops: 0.9, energy: 86 },
  { time: "10:00", prb: 64, thpt: 111, drops: 1.6, energy: 88 },
  { time: "11:00", prb: 72, thpt: 98, drops: 2.2, energy: 91 },
  { time: "12:00", prb: 78, thpt: 92, drops: 2.9, energy: 94 },
  { time: "13:00", prb: 69, thpt: 106, drops: 1.8, energy: 89 },
];

export const cells = [
  {
    id: "BD-CTG-CHANDPUR-001",
    tech: "5G",
    status: "Healthy",
    prb: 54,
    throughput: 123,
    users: 88,
    outageRisk: 0.08,
  },
  {
    id: "BD-CTG-CHANDPUR-002",
    tech: "4G",
    status: "Congested",
    prb: 83,
    throughput: 81,
    users: 141,
    outageRisk: 0.21,
  },
  {
    id: "BD-DHK-MIRPUR-017",
    tech: "5G",
    status: "Warning",
    prb: 71,
    throughput: 96,
    users: 109,
    outageRisk: 0.14,
  },
  {
    id: "BD-KHL-KHULNA-005",
    tech: "4G",
    status: "Low Load",
    prb: 21,
    throughput: 57,
    users: 23,
    outageRisk: 0.04,
  },
];

export const predictions = [
  {
    cell: "BD-CTG-CHANDPUR-002",
    issue: "Congestion",
    confidence: 0.87,
    horizon: "Next 15 min",
    action: "Activate load balancing and optimize scheduler weights",
  },
  {
    cell: "BD-DHK-MIRPUR-017",
    issue: "Throughput Degradation",
    confidence: 0.76,
    horizon: "Next 30 min",
    action: "Review interference trend and rebalance neighbors",
  },
  {
    cell: "BD-KHL-KHULNA-005",
    issue: "Energy Saving Opportunity",
    confidence: 0.91,
    horizon: "Now",
    action: "Recommend reduced power mode during low-load window",
  },
];

export const energyActions = [
  {
    cell: "BD-KHL-KHULNA-005",
    mode: "Reduced Power",
    saving: "12%",
    impact: "Negligible QoS impact",
    status: "Recommended",
  },
  {
    cell: "BD-CTG-CHANDPUR-001",
    mode: "Normal",
    saving: "0%",
    impact: "Peak hour protection",
    status: "Keep Active",
  },
  {
    cell: "BD-DHK-MIRPUR-017",
    mode: "Carrier Sleep (Planned)",
    saving: "8%",
    impact: "Safe after 01:00",
    status: "Scheduled",
  },
];