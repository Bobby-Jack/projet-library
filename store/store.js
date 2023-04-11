import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./features/accountSlice";

import { persistStore } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, accountSlice);

export const store = configureStore({
  reducer: {
    account: persistedReducer,
  },
});

export const persistor = persistStore(store);