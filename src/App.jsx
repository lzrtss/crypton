import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout, PrivateRoute } from 'components';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Home Page</div>} />
        <Route path="coins" element={<div>Coins Page</div>} />
        <Route path="coins/:id" element={<div>Coin Details Page</div>} />
        <Route path="exchanges" element={<div>Exchanges Page</div>} />
        <Route
          path="watchlist"
          element={
            <PrivateRoute>
              <div>Watchlist Page</div>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<div>Not Found Page</div>} />
      </Route>
    </Routes>
  );
};

export default App;
