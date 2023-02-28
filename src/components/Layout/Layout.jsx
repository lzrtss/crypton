import { AppFooter, AppHeader } from 'components';
import React from 'react';

import { MainContent, Wrapper } from './Layout.styled';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Wrapper>
      <AppHeader />
      <MainContent>
        <Outlet />
      </MainContent>
      <AppFooter />
    </Wrapper>
  );
};

export default Layout;
