import React from 'react';

import {
  ChartSection,
  ChartSectionSkeleton,
  CoinStatisticsSection,
  CoinStatisticsSectionSkeleton,
  Container,
  ErrorMessage,
  GoBackLink,
} from 'components';
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

  return (
    <Container>
      <GoBackLink />
      {isLoadingCoinDetails ? (
        <ChartSectionSkeleton />
      ) : (
        <ChartSection
          chartData={chartData}
          coin={coinDetails}
          priceChange={priceChange}
          timePeriod={timePeriod}
          timePeriods={timePeriods}
          handleTimePeriodChange={handleTimePeriodChange}
        />
      )}
      {isLoadingCoinDetails ? (
        <CoinStatisticsSectionSkeleton />
      ) : (
        <CoinStatisticsSection coinDetails={coinDetails} />
      )}
    </Container>
  );
};

export default CoinDetailsPage;
