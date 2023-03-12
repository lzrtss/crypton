import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { StyledLink } from './CoinDetailsLink.styled';

const CoinDetailsLink = ({ children, to }) => {
  const location = useLocation();

  return (
    <StyledLink to={to} state={{ from: location }}>
      {children}
    </StyledLink>
  );
};

CoinDetailsLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  to: PropTypes.string.isRequired,
};

export default CoinDetailsLink;
