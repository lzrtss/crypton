import React from 'react';

import { BitcoinIcon, Link, Wrapper } from './AppLogo.styled';

const AppLogo = () => {
  return (
    <Link to="/">
      <Wrapper>
        CRYPT
        <BitcoinIcon />N
      </Wrapper>
    </Link>
  );
};

export default AppLogo;
