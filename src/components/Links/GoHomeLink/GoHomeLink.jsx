import React from 'react';

import { SecondaryLink } from '../Links.styled';
import { LinkWrapper } from './GoHomeLink.styled';

const GoHomeLink = ({ props }) => {
  return (
    <LinkWrapper>
      <SecondaryLink to="/" {...props}>
        Go Home
      </SecondaryLink>
    </LinkWrapper>
  );
};

export default GoHomeLink;
