import React from 'react';
import PropTypes from 'prop-types';

import { CoinCardSkeleton, Grid } from 'components';

const CoinListSkeleton = ({ numberOfItems }) => {
  const list = Array(numberOfItems).fill(null);

  return (
    <Grid>
      {list.map((_, i) => (
        <li key={i}>
          <CoinCardSkeleton />
        </li>
      ))}
    </Grid>
  );
};

CoinListSkeleton.propTypes = {
  numberOfItems: PropTypes.number,
};

CoinListSkeleton.defaultProps = {
  numberOfItems: 8,
};

export default CoinListSkeleton;
