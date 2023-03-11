import React from 'react';

import { useAuth } from 'hooks';
import {
  AuthenticatedWatchListIcon,
  UnAuthenticatedWatchListIcon,
} from 'components';
import { Icon } from './WatchListIcon.styled';
import { coinType } from 'types';

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

WatchListIcon.propTypes = {
  icon: coinType,
};

export default WatchListIcon;
