import { formatDate } from './formatDate';

export const formatCoinChartData = (coinHistory = [], isNegative) => {
  const reversedCoinHistory = coinHistory.slice().reverse();

  return {
    labels: reversedCoinHistory.map(item =>
      formatDate(item.timestamp, 'DD/MM/YY'),
    ),
    datasets: [
      {
        label: 'Price in USD',
        data: reversedCoinHistory.map(item => Number(item.price).toFixed(2)),
        fill: false,
        backgroundColor: isNegative ? '#ff6347' : '#008080',
        borderColor: isNegative ? '#ff6347' : '#008080',
      },
    ],
  };
};
