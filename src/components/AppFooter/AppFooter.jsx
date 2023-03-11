import React from 'react';

import { Footer } from './AppFooter.styled';
import { Container, StyledLink } from 'components';

const AppFooter = () => {
  return (
    <Footer>
      <Container>
        <StyledLink to="/">CRYPTON</StyledLink> &copy;{' '}
        {new Date().getFullYear()}
      </Container>
    </Footer>
  );
};

export default AppFooter;
