import React from 'react';

import { CoinCard, Grid } from 'components';

const CoinList = ({ coins }) => {
  return (
    <Grid>
      {coins?.map(coin => (
        <li key={coin.uuid}>{<CoinCard coin={coin} />}</li>
      ))}
    </Grid>
  );
};

export default CoinList;
