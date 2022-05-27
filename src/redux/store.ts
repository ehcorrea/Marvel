import authReducer from './auth';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { authReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
