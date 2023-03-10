import React from 'react';

import { LinkWrapper, Link } from './GoHomeLink.styled';

const GoHomeLink = ({ props }) => {
  return (
    <LinkWrapper>
      <Link to="/" {...props}>
        Go Home
      </Link>
    </LinkWrapper>
  );
};

export default GoHomeLink;
