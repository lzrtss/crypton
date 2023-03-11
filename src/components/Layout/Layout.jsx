import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

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
        <Suspense fallback={<MainSpinner />}>
          <Toaster position="top-center" reverseOrder={false} />
          <Outlet />
        </Suspense>
      </MainContent>
      <AppFooter />
    </Wrapper>
  );
};

export default Layout;
