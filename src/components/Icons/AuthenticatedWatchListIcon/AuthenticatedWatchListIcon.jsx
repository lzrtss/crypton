import React from 'react';

import {
  FilledStarIcon,
  OutlinedStarIcon,
} from './AuthenticatedWatchListIcon.styled';
import { useWatchList } from 'hooks';
import { isInWatchList } from 'utils';
import { coinType } from 'types';

const AuthenticatedWatchListIcon = ({ coin }) => {
  const { uuid: coinId, name: coinName } = coin;

  const { watchList, handleAddToWatchList, handleRemoveFromWatchList } =
    useWatchList();

  return (
    <>
      {isInWatchList(coinId, watchList) ? (
        <FilledStarIcon
          size={28}
          data-tip="Remove from Watchlist"
          onClick={e => handleRemoveFromWatchList(e, coinId, coinName)}
        />
      ) : (
        <OutlinedStarIcon
          size={28}
          data-tip="Add to Watchlist"
          onClick={e => handleAddToWatchList(e, coin)}
        />
      )}
    </>
  );
};

AuthenticatedWatchListIcon.propTypes = {
  icon: coinType,
};

export default AuthenticatedWatchListIcon;
