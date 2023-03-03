import React from 'react';

import { useAuth } from 'hooks';
import {
  AuthenticatedWatchListIcon,
  UnAuthenticatedWatchListIcon,
} from 'components';
import { Icon } from './WatchListIcon.styled';

const WatchListIcon = ({ coin }) => {
  const { isAuthenticated } = useAuth();

  return (
    <Icon>
      {isAuthenticated ? (
        <AuthenticatedWatchListIcon coin={coin} />
      ) : (
        <UnAuthenticatedWatchListIcon />
      )}
    </Icon>
  );
};

export default WatchListIcon;
