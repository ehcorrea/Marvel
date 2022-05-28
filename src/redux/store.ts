import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth';
import charactersReducer from './characters';

import { marvelApi } from '../service/marvel';

export const store = configureStore({
  reducer: {
    authReducer,
    charactersReducer,
    [marvelApi.reducerPath]: marvelApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(marvelApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
