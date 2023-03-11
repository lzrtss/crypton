import React from 'react';

import {
  ChartSection,
  CoinStatisticsSection,
  Container,
  ErrorMessage,
  GoBackLink,
} from 'components';
import CoinDetailsPageSkeleton from './CoinDetailsPageSkeleton';
import { useCoinDetails } from 'hooks';

const CoinDetailsPage = () => {
  const {
    chartData,
    coinDetails,
    error,
    isLoading: isLoadingCoinDetails,
    priceChange,
    timePeriod,
    timePeriods,
    handleTimePeriodChange,
  } = useCoinDetails();

  if (error) {
    return <ErrorMessage />;
  }

  if (isLoadingCoinDetails) {
    return <CoinDetailsPageSkeleton />;
  }

  return (
    <Container>
      <GoBackLink />

      <ChartSection
        chartData={chartData}
        coin={coinDetails}
        priceChange={priceChange}
        timePeriod={timePeriod}
        timePeriods={timePeriods}
        handleTimePeriodChange={handleTimePeriodChange}
      />

      <CoinStatisticsSection coinDetails={coinDetails} />
    </Container>
  );
};

export default CoinDetailsPage;
