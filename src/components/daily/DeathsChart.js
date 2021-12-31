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

const deathsChart = ({ dailyData }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  const deathsData = dailyData.deaths && Object.values(dailyData.deaths);

  const labels = dailyData.deaths && Object.keys(dailyData.deaths);

  const data = {
    labels,
    datasets: [
      {
        label: "Deaths",
        data: deathsData,
        borderColor: "#9D3535",
        backgroundColor: "#9D3535",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default deathsChart;
