import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlice';

export const appStore = configureStore({
  reducer: {
    data: dataReducer,
  },
});