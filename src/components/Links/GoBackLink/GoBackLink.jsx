import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import { SecondaryLink } from '../Links.styled';
import { LinkWrapper } from './GoBackLink.styled';

const GoBackLink = () => {
  const location = useLocation();

  return (
    <LinkWrapper>
      <SecondaryLink to={location?.state?.from ?? '/'}>
        <FaArrowLeft size={12} /> Go Back
      </SecondaryLink>
    </LinkWrapper>
  );
};

export default GoBackLink;
