import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CasesChart = ({ dailyData }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  const casesData = dailyData.cases && Object.values(dailyData.cases);

  const labels = dailyData.cases && Object.keys(dailyData.cases);

  const data = {
    labels,
    datasets: [
      {
        label: "Confirmed Cases",
        data: casesData,
        borderColor: "#E17427",
        backgroundColor: "#E17427",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default CasesChart;
