import React from 'react';

import { useAuth } from 'hooks';
import { OutlinedStarIcon } from './UnAuthenticatedWatchListIcon.styled';

const UnAuthenticatedWatchListIcon = () => {
  const { handleLogin } = useAuth();

  const handleClick = e => {
    e.preventDefault();

    handleLogin();
  };

  return (
    <OutlinedStarIcon
      size={28}
      data-tip="Add to Watchlist"
      onClick={handleClick}
    />
  );
};

export default UnAuthenticatedWatchListIcon;
