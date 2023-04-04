import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import store from 'store/configureStore';
import { Auth0ProviderWithHistory } from 'components';
import 'normalize.css';
import { GlobalStyle } from 'styles';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <App />
        <GlobalStyle />
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </Provider>,
);
