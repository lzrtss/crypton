import React from 'react';
import PropTypes from 'prop-types';

import { CoinCard, Grid } from 'components';
import { coinType } from 'types';

const CoinList = ({ coins }) => {
  return (
    <Grid>
      {coins.map(coin => (
        <li key={coin.uuid}>{<CoinCard coin={coin} />}</li>
      ))}
    </Grid>
  );
};

CoinList.propTypes = {
  coins: PropTypes.arrayOf(coinType),
};

CoinList.defaultProps = {
  coins: null,
};

export default CoinList;
