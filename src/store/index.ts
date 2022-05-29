import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { persistStore } from 'redux-persist';

import authReducer from './auth';
import charactersReducer from './characters';

import { marvelApi } from '../service/marvel';

const persistConfig = {
  key: 'marvel-app',
  version: 1,
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  authReducer,
  charactersReducer,
  [marvelApi.reducerPath]: marvelApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      marvelApi.middleware
    ),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
