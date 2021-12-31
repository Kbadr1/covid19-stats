import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Box } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ContinentsChart = ({ continets }) => {
  let labels = [];
  continets.map(({ continent }) => labels.push(continent));

  let confirmedData = [];
  continets.map(({ cases }) => confirmedData.push(cases));

  let recoveredData = [];
  continets.map(({ recovered }) => recoveredData.push(recovered));

  let deathsData = [];
  continets.map(({ deaths }) => deathsData.push(deaths));

  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Confirmed",
        data: confirmedData,
        backgroundColor: "#E17427",
      },
      {
        label: "Recovered",
        data: recoveredData,
        backgroundColor: "#41A7A3",
      },
      {
        label: "Deaths",
        data: deathsData,
        backgroundColor: "#9D3535",
      },
    ],
  };

  return (
    <Box className="chart-box" mb={4}>
      <Bar options={options} data={data} />
    </Box>
  );
};

export default ContinentsChart;
