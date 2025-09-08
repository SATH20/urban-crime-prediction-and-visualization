// src/data/visualization-cards.js

export const visualizationCards = [
  {
    title: "Crime by Type",
    chartType: "bar",
    labels: ["Theft", "Assault", "Burglary", "Homicide", "Robbery"],
    data: [45, 25, 30, 5, 20],
    colors: ["#4F46E5", "#16A34A", "#F59E0B", "#DC2626", "#6366F1"],
  },
  {
    title: "Crime Severity",
    chartType: "pie",
    labels: ["Low", "Medium", "High"],
    data: [30, 45, 25],
    colors: ["#10B981", "#F59E0B", "#EF4444"],
  },
  {
    title: "Time-Based Trends",
    chartType: "line",
    labels: ["12 AM", "4 AM", "8 AM", "12 PM", "4 PM", "8 PM"],
    data: [5, 10, 20, 40, 35, 25],
    colors: ["#3B82F6"],
  },
];

export default visualizationCards;