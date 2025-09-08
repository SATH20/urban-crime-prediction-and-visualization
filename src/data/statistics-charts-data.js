import { chartsConfig } from "@/configs";

const weeklyCrimeChart = {
  type: "bar",
  height: 220,
  series: [
    {
      name: "Crime Cases",
      data: [45, 60, 35, 50, 75, 90, 55],
    },
  ],
  options: {
    ...chartsConfig,
    colors: "#d32f2f", // red for crimes
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  },
};

const monthlyReportChart = {
  type: "line",
  height: 220,
  series: [
    {
      name: "Reports Logged",
      data: [120, 150, 200, 180, 230, 300, 280, 310, 340],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#0288d1"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"
      ],
    },
  },
};

const resolvedCasesChart = {
  type: "line",
  height: 220,
  series: [
    {
      name: "Resolved Cases",
      data: [30, 45, 70, 60, 90, 110, 95, 105, 130],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#388e3c"], // green for resolved
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"
      ],
    },
  },
};

export const statisticsChartsData = [
  {
    color: "white",
    title: "Weekly Crime Activity",
    description: "Crime cases recorded by weekday",
    footer: "last updated 2 hours ago",
    chart: weeklyCrimeChart,
  },
  {
    color: "white",
    title: "Monthly Reports Logged",
    description: "Trend of crime reports received per month",
    footer: "auto-synced with database",
    chart: monthlyReportChart,
  },
  {
    color: "white",
    title: "Resolved Cases Overview",
    description: "Crimes resolved vs logged reports",
    footer: "updated just now",
    chart: resolvedCasesChart,
  },
];

export default statisticsChartsData;
