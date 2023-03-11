import React from 'react';

import {
  CoinsSection,
  Container,
  ErrorMessage,
  ExchangesSection,
  MarketStatisticsSection,
} from 'components';
import HomePageSkeleton from './HomePageSkeleton';
import { usePreviewData } from 'hooks';

const HomePage = () => {
  const limit = 4;

  const { coins, error, exchanges, isLoading, stats } = usePreviewData(limit);

  if (error) {
    return <ErrorMessage />;
  }

  if (isLoading) {
    return <HomePageSkeleton />;
  }

  return (
    <Container>
      <MarketStatisticsSection stats={stats} />
      <CoinsSection coins={coins} />
      <ExchangesSection exchanges={exchanges?.slice(0, limit)} preview />
    </Container>
  );
};

export default HomePage;
