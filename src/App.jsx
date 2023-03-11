import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout, PrivateRoute } from 'components';
import { HomePage } from 'pages';

const CoinsPage = lazy(() => import('pages/CoinsPage/CoinsPage'));
const CoinDetailsPage = lazy(() =>
  import('pages/CoinDetailsPage/CoinDetailsPage'),
);
const ExchangesPage = lazy(() => import('pages/ExchangesPage/ExchangesPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const WatchListPage = lazy(() => import('pages/WatchListPage/WatchListPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="coins" element={<CoinsPage />} />
        <Route path="coins/:coinId" element={<CoinDetailsPage />} />
        <Route path="exchanges" element={<ExchangesPage />} />
        <Route
          path="watchlist"
          element={
            <PrivateRoute>
              <WatchListPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
