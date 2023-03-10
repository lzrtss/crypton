import React from 'react';
import PropTypes from 'prop-types';

import { StyledContainer } from './Container.styled';

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Container.defaultProps = {
  children: null,
};
export default Container;
