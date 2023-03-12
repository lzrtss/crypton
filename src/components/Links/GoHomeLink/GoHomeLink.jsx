import React from 'react';

import { SecondaryLink } from '../Links.styled';
import { LinkWrapper } from './GoHomeLink.styled';

const GoHomeLink = () => {
  return (
    <LinkWrapper>
      <SecondaryLink to="/">Go Home</SecondaryLink>
    </LinkWrapper>
  );
};

export default GoHomeLink;
