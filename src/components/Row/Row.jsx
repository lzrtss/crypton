import React from 'react';
import PropTypes from 'prop-types';

import { StyledRow } from './Row.styled';

const Row = ({ children }) => {
  return <StyledRow>{children}</StyledRow>;
};

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Row.defaultProps = {
  children: null,
};

export default Row;
