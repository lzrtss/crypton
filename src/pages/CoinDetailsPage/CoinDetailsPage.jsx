import React from 'react';

import {
  ChartSection,
  ChartSectionSkeleton,
  Container,
  ErrorMessage,
  GoBackLink,
} from 'components';
import { useCoinDetails } from 'hooks';

const CoinDetailsPage = () => {
  const {
    chartData,
    coinDetails,
    coinHistoryError,
    isLoading: isLoadingCoinDetails,
    priceChange,
    timePeriod,
    timePeriods,
    handleTimePeriodChange,
  } = useCoinDetails();

  return (
    <Container>
      <GoBackLink />
      {isLoadingCoinDetails ? (
        <ChartSectionSkeleton />
      ) : (
        <ChartSection
          chartData={chartData}
          coin={coinDetails?.data?.coin}
          error={coinHistoryError}
          priceChange={priceChange}
          timePeriod={timePeriod}
          timePeriods={timePeriods}
          handleTimePeriodChange={handleTimePeriodChange}
        />
      )}
    </Container>
  );
};

export default CoinDetailsPage;
