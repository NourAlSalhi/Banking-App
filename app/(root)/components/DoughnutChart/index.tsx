"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: { accounts: Account[] }) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1250, 2250, 5000],
        backgroundColor: [
          "#0179FE",
          "#4893FF",
          "#85B7FF",
          "#BED9FF",
          "#E9F2FF",
        ],
      },
    ],
    labels: ["Bank1", "Bank2", "Bank3"],
  };

  return (
    <Doughnut
      data={data}
      options={{
        cutout: "75%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

export default DoughnutChart;
