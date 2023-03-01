import React from 'react';
import { Outlet } from 'react-router-dom';

import { AppFooter, AppHeader, MainSpinner } from 'components';
import { MainContent, Wrapper } from './Layout.styled';
import { useAuth } from 'hooks';

const Layout = () => {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <MainSpinner />;
  }

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
