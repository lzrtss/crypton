import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { Auth0ProviderWithHistory } from 'components';
import { GlobalStyle } from 'styles';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Auth0ProviderWithHistory>
      <App />
      <GlobalStyle />
    </Auth0ProviderWithHistory>
  </BrowserRouter>,
);
