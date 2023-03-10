import React from 'react';
import Skeleton from 'react-loading-skeleton';

import {
  WatchListIcon,
  Card,
  CardHeader,
  Details,
  RowPlaceholder,
} from './CoinCard.styled';
import 'react-loading-skeleton/dist/skeleton.css';

const CoinCardSkeleton = () => {
  return (
    <Card>
      <CardHeader>
        <Skeleton circle width={42} height={42} />
        <Skeleton width={100} height={42} />
        <WatchListIcon>
          <Skeleton circle width={28} height={28} />
        </WatchListIcon>
      </CardHeader>
      <Details>
        {Array(4)
          .fill(null)
          .map((_, i) => (
            <RowPlaceholder key={i}>
              <Skeleton />
            </RowPlaceholder>
          ))}
      </Details>
    </Card>
  );
};

export default CoinCardSkeleton;
