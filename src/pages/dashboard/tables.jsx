import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";


import {
  Chart as ChartJS,
  ArcElement,
  Tooltip as ChartTooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";


ChartJS.register(
  ArcElement,
  ChartTooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

export function Tables() {

  const crimeCategoryData = {
    labels: ["Theft", "Assault", "Vandalism", "Robbery", "Cyber Crime", "Domestic Violence"],
    datasets: [
      {
        label: "Crime Count",
        data: [25, 15, 10, 20, 18, 12],
        backgroundColor: ["#ef5350", "#ffa726", "#66bb6a", "#42a5f5", "#ab47bc", "#26a69a"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      {/* Existing Zone Table */}
      {/* ... Your existing 2 cards remain unchanged ... */}

      {/* Crime Category Chart */}
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-6 p-6">
          <Typography variant="h6" color="white">
            Crime Stats by Category
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col items-center">
          {}
          <div className="w-full max-w-xl">
            <Bar
              data={crimeCategoryData}
              options={{
                responsive: true,
                plugins: {
                  legend: { position: "bottom" },
                  title: {
                    display: false,
                    text: "Crime Distribution",
                  },
                },
              }}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Tables;
