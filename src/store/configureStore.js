import { configureStore } from '@reduxjs/toolkit';

import { coinsApi, exchangesApi, watchListApi } from './services';

export default configureStore({
  reducer: {
    [coinsApi.reducerPath]: coinsApi.reducer,
    [exchangesApi.reducerPath]: exchangesApi.reducer,
    [watchListApi.reducerPath]: watchListApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    coinsApi.middleware,
    exchangesApi.middleware,
    watchListApi.middleware,
  ],
});
