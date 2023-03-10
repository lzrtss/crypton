import { configureStore } from '@reduxjs/toolkit';

import { coinsApi } from './services';

export default configureStore({
  reducer: {
    [coinsApi.reducerPath]: coinsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    coinsApi.middleware,
  ],
});
