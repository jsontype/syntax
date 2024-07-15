import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './state';

export const streamitSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    set_breadcrumb: (state, action) => {
      if (typeof action.payload !== typeof undefined) {
        state.breadcrumb = action.payload
      }
    }
  },
});

export default streamitSlice.reducer;
