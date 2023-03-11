import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout, PrivateRoute } from 'components';
import { CoinDetailsPage, CoinsPage, ExchangesPage, NotFoundPage } from 'pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Home Page</div>} />
        <Route path="coins" element={<CoinsPage />} />
        <Route path="coins/:coinId" element={<CoinDetailsPage />} />
        <Route path="exchanges" element={<ExchangesPage />} />
        <Route
          path="watchlist"
          element={
            <PrivateRoute>
              <div>Watchlist Page</div>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
