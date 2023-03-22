import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

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

function LineChart({ data }) {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const indonesia = data.find(pop => pop.CCA3 === 'IDN');

    setChartData({
      labels: ['1970', '1980', '1990', '2000', '2010', '2015', '2020', '2022'],
      datasets: [
        {
          label: 'Pertumbuhan Penduduk Indonesia',
          borderColor: 'rgba(0,0,0,1)',
          backgroundColor: 'rgba(75,192,192,1)',
          borderWidth: 2,
          data: [
            indonesia[`1970 Population`],
            indonesia[`1980 Population`],
            indonesia[`1990 Population`],
            indonesia[`2000 Population`],
            indonesia[`2010 Population`],
            indonesia[`2015 Population`],
            indonesia[`2020 Population`],
            indonesia[`2022 Population`],
          ],
        },
      ],
    });
  }, [data]);

  return <Line data={chartData} options={options} />;
}

export default LineChart;
