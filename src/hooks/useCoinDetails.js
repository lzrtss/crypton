import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetCoinByIdQuery, useGetCoinHistoryQuery } from 'store/services';
import { formatCoinChartData, isNegative } from 'utils';

export const useCoinDetails = () => {
  const { coinId } = useParams();

  const [timePeriod, setTimePeriod] = useState('7d');
  const timePeriods = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const handleTimePeriodChange = e => {
    setTimePeriod(e.target.value);
  };

  const {
    data,
    error: coinDetailsError,
    isLoading: isLoadingCoinDetails,
  } = useGetCoinByIdQuery(coinId);

  const coinDetails = data?.data?.coin;

  const {
    data: coinHistory,
    error: coinHistoryError,
    isLoading: isLoadingCoinHistory,
  } = useGetCoinHistoryQuery({ coinId, timePeriod });

  const priceChange = coinHistory?.data?.change;

  const chartData = formatCoinChartData(
    coinHistory?.data?.history,
    isNegative(priceChange),
  );

  return {
    chartData,
    coinDetails,
    error: coinDetailsError || coinHistoryError,
    isLoading: isLoadingCoinHistory || isLoadingCoinDetails,
    priceChange,
    timePeriod,
    timePeriods,
    handleTimePeriodChange,
  };
};
