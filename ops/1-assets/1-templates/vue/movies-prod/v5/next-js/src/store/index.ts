import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import settingReducer from './setting/reducers';
import streamitReducer from './streamit/reducers';
import streamitShop from './shop/reducers';
import streamitMedia from './media/reducers'
export const store = () => configureStore({
  reducer: {
    setting: settingReducer,
    streamit: streamitReducer,
    shop: streamitShop,
    media: streamitMedia
  }
});


export const wrapperStore = createWrapper(store);