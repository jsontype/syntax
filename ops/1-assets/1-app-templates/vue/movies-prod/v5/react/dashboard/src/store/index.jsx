import { configureStore } from '@reduxjs/toolkit';
import settingReducer from './setting/reducers';
export const store = configureStore({
  reducer: {
    setting: settingReducer
  }
});
