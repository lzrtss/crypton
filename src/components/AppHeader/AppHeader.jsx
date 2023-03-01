import React from 'react';

import { AppLogo, AuthMenu, Container, MainNavbar } from 'components';
import { Header, Wrapper } from './AppHeader.styled';

const AppHeader = () => {
  return (
    <Header>
      <Container>
        <Wrapper>
          <AppLogo />
          <MainNavbar />
          <AuthMenu />
        </Wrapper>
      </Container>
    </Header>
  );
};

export default AppHeader;
