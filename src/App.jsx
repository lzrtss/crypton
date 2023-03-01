import React from 'react';

import { Layout } from 'components';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>HOME PAGE</div>} />
        <Route path="*" element={<div>HOME PAGE</div>} />
      </Route>
    </Routes>
  );
};

export default App;
