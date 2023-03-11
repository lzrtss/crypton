import React from 'react';

import {
  CoinsSectionSkeleton,
  Container,
  ExchangesSectionSkeleton,
  MarketStatisticsSectionSkeleton,
} from 'components';

const HomePageSkeleton = () => {
  return (
    <Container>
      <MarketStatisticsSectionSkeleton preview />
      <CoinsSectionSkeleton preview />
      <ExchangesSectionSkeleton preview />
    </Container>
  );
};

export default HomePageSkeleton;
