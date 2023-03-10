import React from 'react';
import { useLocation } from 'react-router-dom';

import { StyledLink } from './CoinDetailsLink.styled';

const CoinDetailsLink = ({ children, to, ...otherProps }) => {
  const location = useLocation();

  return (
    <StyledLink to={to} state={{ from: location }} {...otherProps}>
      {children}
    </StyledLink>
  );
};

export default CoinDetailsLink;
