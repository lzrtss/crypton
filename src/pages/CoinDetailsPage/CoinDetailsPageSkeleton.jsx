import React from 'react';

import {
  ChartSectionSkeleton,
  CoinStatisticsSectionSkeleton,
  Container,
  GoBackLink,
} from 'components';

const CoinDetailsPageSkeleton = () => {
  return (
    <Container>
      <GoBackLink />
      <ChartSectionSkeleton />
      <CoinStatisticsSectionSkeleton />
    </Container>
  );
};

export default CoinDetailsPageSkeleton;
