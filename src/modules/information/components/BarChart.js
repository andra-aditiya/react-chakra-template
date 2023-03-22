import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

import { Bar } from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
  ],
};

const options = {
  title: {
    display: true,
    text: 'Average Rainfall per month',
    fontSize: 20,
  },
  legend: {
    display: true,
    position: 'right',
  },
};

function BarChart() {
  return <Bar data={state} options={options} />;
}

export default BarChart;
