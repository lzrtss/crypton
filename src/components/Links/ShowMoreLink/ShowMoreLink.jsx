import React from 'react';

import { Link, LinkWrapper } from './ShowMoreLink.styled';

const ShowMoreLink = ({ to, ...otherProps }) => {
  return (
    <LinkWrapper>
      <Link to={to} {...otherProps}>
        Show More
      </Link>
    </LinkWrapper>
  );
};

export default ShowMoreLink;
