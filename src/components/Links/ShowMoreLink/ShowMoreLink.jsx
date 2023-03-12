import React from 'react';
import PropTypes from 'prop-types';

import { Link, LinkWrapper } from './ShowMoreLink.styled';

const ShowMoreLink = ({ to }) => {
  return (
    <LinkWrapper>
      <Link to={to}>Show More</Link>
    </LinkWrapper>
  );
};

ShowMoreLink.propTypes = {
  to: PropTypes.string.isRequired,
};

export default ShowMoreLink;
