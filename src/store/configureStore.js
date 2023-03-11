import { configureStore } from '@reduxjs/toolkit';

import { coinsApi, exchangesApi } from './services';

export default configureStore({
  reducer: {
    [coinsApi.reducerPath]: coinsApi.reducer,
    [exchangesApi.reducerPath]: exchangesApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    coinsApi.middleware,
    exchangesApi.middleware,
  ],
});
